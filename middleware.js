import { NextResponse } from "next/server";
import * as jose from "jose";
import { UserContextProvider } from "@/components/custom/UserContext";

export default async function middleware(req) {
  const jwtSecret = process.env.JWT_SECRET;
  const encodedJwtSecret = new TextEncoder().encode(jwtSecret);
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const { payload } = await jose.jwtVerify(token, encodedJwtSecret);
    const user = payload; // Assuming the payload contains user data
    return NextResponse.next({
      props: {
        user,
      },
    });
  } catch (error) {
    console.log({ error });
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/destination/:path*"],
};
