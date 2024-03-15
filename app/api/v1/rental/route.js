import { pool } from "@/config/db";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";
export async function GET() {
  try {
    const results = await pool.query(
      "SELECT dataProduct.*, dataUser.*, rentals.*  FROM rentals LEFT JOIN users AS dataUser ON dataUser.id = rentals.userId  LEFT JOIN products as dataProduct ON rentals.nodeId = dataProduct.id;",
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

export async function POST(request) {
  //  detail user Login
  const cookieStorage = cookies();
  const token = cookieStorage.get("token")?.value;

  try {
    if (!token) {
      return NextResponse.json(
        { message: "user not found" },
        {
          status: 401,
        },
      );
    }
    const user = verify(token, process.env.JWT_SECRET);

    const data = await request.json();
    console.log("user data", data.payload);
    console.log("user data", user);

    const result = await pool.query("INSERT INTO rentals SET ?", {
      nodeId: data.payload.nodeId,
      deposit: Number(data.payload.mindeposit),
      userId: user.id,
      status: "pending",
      point: 10,
      address: user.address,
    });

    return NextResponse.json({
      data: result,
      message: "Success create rental",
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      },
    );
  }
}
