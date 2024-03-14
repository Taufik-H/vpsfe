import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { ethers } from "ethers";
import { pool } from "@/config/db";

export async function POST(request) {
  try {
    const { name, email, password, role, balance, id_tele } =
      await request.json();
    const wallet = ethers.Wallet.createRandom();
    const address = wallet.address;
    const pk = wallet.privateKey;
    const result = await pool.query("INSERT INTO users SET ?", {
      name,
      email,
      password: await bcrypt.hash(password, 10),
      role: role || "user",
      address,
      pk,
      balance: balance || 0,
      id_tele,
    });

    return NextResponse.json({ data: result, message: "Success create user" });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      },
    );
  }
}
