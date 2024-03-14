import mysql from "serverless-mysql";

export const pool = mysql({
  config: {
    host: "49.12.12.193",
    user: "flex",
    password: "jumat123",
    port: 3306,
    database: "flex",
  },
});
