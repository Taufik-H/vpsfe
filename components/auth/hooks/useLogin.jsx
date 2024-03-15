"use client";

import { ApiService } from "@/services/ApiService";
import { toastStyle } from "@/utils/toastStyle";
import { useState } from "react";
import toast from "react-hot-toast";

export const useLogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    setLoading(true);
    ApiService.post("/auth/login", loginData)
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          toast.success(response.data.message, toastStyle);

          window.location.href = "/";
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error(`${error?.response?.data?.error}`);
      });
  };

  return { isLoading, loginData, handleChange, handleLogin };
};
