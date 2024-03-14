import { pool } from "@/config/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const results = await pool.query("SELECT * FROM products");
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

export async function POST(request) {
  try {
    const { title, subTitle, gpu, gpuStart, cpu, cpuStart, down, up, rate } =
      await request.json();

    const result = await pool.query("INSERT INTO products SET ?", {
      title,
      subTitle,
      gpu,
      gpuStart,
      cpu,
      cpuStart,
      down,
      up,
      rate,
    });

    return NextResponse.json({
      data: result,
      message: "Success create product",
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
