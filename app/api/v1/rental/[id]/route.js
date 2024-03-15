import { pool } from "@/config/db";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  const data = await request.json();
  console.log({ data });
  try {
    const findProduct = await pool.query("SELECT * FROM rentals WHERE id = ?", [
      parseInt(params.id),
    ]);

    if (!findProduct) {
      return NextResponse.json({ message: "Rental not found" });
    }

    const user = await pool.query("SELECT * FROM users WHERE id = ?", [
      findProduct[0].userId,
    ]);

    const finalBalance = user[0].balance + findProduct[0].deposit;

    const updateBalance = await pool.query(
      "UPDATE users SET balance = ? WHERE id = ?",
      [finalBalance, user.id],
    );

    await pool.query("UPDATE rentals SET ? WHERE id = ?", [
      {
        status: "runing",
        emailHost: data.payload.email,
        passwordHost: data.payload.password,
      },
      params.id,
    ]);

    return NextResponse.json({
      message: "Succes confirm",
      status: "runing",
      id: params.id,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
