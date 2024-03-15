"use client";

import Cookies from "js-cookie";
export const useLogout = () => {
  const handleLogout = () => {
    Cookies.remove("token");

    window.location.href = "/login";
    return;
  };
  return { handleLogout };
};
