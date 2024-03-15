import React from "react";
import Navbar from "./Navbar";
import { cookies } from "next/headers";
import { SECRET_KEY } from "@/utils/ApiUrl";

const NavParent = () => {
  // const cookieStore = cookies();
  // const token = cookieStore.get("token")?.value;
  // if (token) {
  //   const payload = jwtExtract(token, SECRET_KEY);
  //   const { name, username, email } = payload;
  // }

  return (
    <div className="sticky top-0 p-2 px-10">
      <Navbar />
    </div>
  );
};

export default NavParent;
