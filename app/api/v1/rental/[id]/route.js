import { pool } from "@/config/db";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  const data = await request.json();

  try {
    await pool.query("UPDATE rentals SET ? WHERE id = ?", [
      { status: true },
      params.id,
    ]);
    return NextResponse.json({
      message: "Succes confirm",
      status: true,
      id: params.id,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
