import { pool } from "@/config/db";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  const data = await request.json();
  console.log({ data });
  try {
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
