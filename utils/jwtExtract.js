import { verify } from "jsonwebtoken";

export function jwtExtract(token, secretKey) {
  try {
    const payload = verify(token, secretKey);
    return payload;
  } catch (error) {
    console.error("Gagal mendekode token:", error.message);
    return null;
  }
}
