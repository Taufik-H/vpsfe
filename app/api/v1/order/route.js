import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
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

    console.log("user ", user);
    const results = await pool.query(
      "SELECT dataProduct.*, rentals.* FROM rentals LEFT JOIN products AS dataProduct ON rentals.nodeId = dataProduct.id WHERE rentals.userid = ?",
      [user.id],
    );
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      },
    );
  }
}
