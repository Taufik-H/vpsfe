import { pool } from "@/config/db";
import { NextResponse as res } from "next/server";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
export async function POST(req) {
  const { email, password } = await req.json();

  try {
    if (!email && !password) {
      return res.json(
        { error: "email and password is required" },
        { status: 400 },
      );
    }

    const findUser = await await pool.query(
      "SELECT * FROM users WHERE email = ?",
      email,
    );

    if (!findUser[0]) {
      return res.json({ error: "User not found" }, { status: 404 });
    }

    const userData = findUser[0];

    const comparePassword = await bcrypt.compare(password, userData.password);

    // Jika password tidak cocok, kirim pesan error
    if (!comparePassword) {
      return res.json({ error: "Invalid Password" }, { status: 401 });
    }

    // Jika password cocok, kirim data user
    const payload = {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      roleId: userData.role,
    };

    // Buat token
    const token = sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
    const cookieResponse = res.json(
      { data: payload, message: "Login succesfully" },
      { status: 200 },
    );
    cookieResponse.cookies.set("token", token);

    return cookieResponse;
  } catch (error) {
    console.log(error);
    return res.json(
      { error: "Something went wrong. Please try again later" },
      { status: 500 },
    );
  }
}
