import { pool } from "@/config/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  //  detail user Login

  try {
    const results = await pool.query(
      "SELECT dataProduct.*, rentals.* FROM rentals LEFT JOIN products AS dataProduct ON rentals.nodeId = dataProduct.id WHERE rentals.userid = ?",
      [params.id],
    );
    return NextResponse.json({ data: results });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      },
    );
  }
}
