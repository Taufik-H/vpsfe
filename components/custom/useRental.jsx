"use client";

import { userLoginState } from "@/recoil/userLogin";
import { ApiService } from "@/services/ApiService";
import { toastStyle } from "@/utils/toastStyle";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRecoilValue } from "recoil";

const useRental = () => {
  const userLoginData = useRecoilValue(userLoginState);

  const [isLoading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [dataWallet, setWallet] = useState({
    address: "",
    mnemonic: "",
    privateKey: "",
    rate: 0,
    id: "",
    title: "",
  });

  const router = useRouter();

  function onCloseModal() {
    setOpenModal(false);
  }

  const handleWallet = (id, title, rate) => {
    if (!userLoginData.isLogedin) {
      return toast.error("please login first", toastStyle);
    } else {
      setWallet({
        address: userLoginData.address,
        rate: rate,
        id: id,
        title: title,
      });

      setOpenModal(true);
    }
  };

  const handleRental = (payload) => {
    setLoading(true);

    ApiService.post("/rental", {
      payload,
    })
      .then((response) => {
        setLoading(false);
        // console.log("response", response);
        if (response.status === 200) {
          setOpenModal(false);
          toast.success(response.data.message, toastStyle);
          router.push("/waiting");
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error(`${error.response.data.error}`, toastStyle);
        setOpenModal(false);

        console.log(error);
      });
  };
  return {
    handleRental,
    isLoading,
    handleWallet,
    setOpenModal,
    dataWallet,
    openModal,
    onCloseModal,
  };
};

export default useRental;
