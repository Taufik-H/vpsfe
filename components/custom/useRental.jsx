"use client";

import React, { useState } from "react";
import { ApiService } from "../../../../../../services/ApiService";
import { useRouter } from "next/navigation";
import { toastStyle } from "@/utils/toastStyle";
import toast from "react-hot-toast";
import { ethers } from "ethers";
import Cookies from "js-cookie";

const useRental = () => {
  const token = Cookies.get("token");

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
    const wallet = ethers.Wallet.createRandom();
    setWallet({
      address: wallet.address,
      mnemonic: wallet.mnemonic.phrase,
      privateKey: wallet.privateKey,
      rate: rate,
      id: id,
      title: title,
    });

    setOpenModal(true);
  };

  const handleRental = (payload) => {
    setLoading(true);

    ApiService.post("/rental", {
      payload,
    })
      .then((response) => {
        setLoading(false);
        console.log("response", response);
        if (response.status === 200) {
          setOpenModal(false);
          toast.success(response.data.message, toastStyle);
          router.refresh();
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
