// import mysql from "serverless-mysql";

// export const pool = mysql({
//   config: {
//     host: "49.12.12.193",
//     user: "cloud",
//     password: "jumat123",
//     port: 3306,
//     database: "cloud",
//   },
// });
import mysql from "mysql2/promise";
export const pool = mysql.createPool({
  host: "49.12.12.193",
  user: "cloud",
  password: "jumat123",
  port: 3306,
  database: "cloud",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});
