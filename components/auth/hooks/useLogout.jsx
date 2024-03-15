"use client";

import { userLoginState } from "@/recoil/userLogin";
import Cookies from "js-cookie";
import { useResetRecoilState } from "recoil";
export const useLogout = () => {
  const reset = useResetRecoilState(userLoginState);
  const handleLogout = () => {
    Cookies.remove("token");
    reset;
    window.location.href = "/login";
    return;
  };
  return { handleLogout };
};
