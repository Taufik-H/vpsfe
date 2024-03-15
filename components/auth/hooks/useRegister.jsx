"use client";

import { ApiService } from "@/services/ApiService";
import { toastStyle } from "@/utils/toastStyle";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const useRegister = () => {
  const router = useRouter();
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [isLoading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleRegister = () => {
    setLoading(true);
    ApiService.post("/auth/register", registerData)
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          toast.success(response.data.message, toastStyle);
          router.push("/login");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log("err", error);
        toast.error(`${error?.response?.data?.error}`);
      });
  };

  return { isLoading, registerData, handleChange, handleRegister };
};
