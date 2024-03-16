"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { toastStyle } from "@/utils/toastStyle";
import { ApiService } from "@/services/ApiService";
import { Loader2 } from "lucide-react";
const PopupWallet = ({ idNode, status }) => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirm = () => {
    setisLoading(true);

    ApiService.patch(`/rental/${idNode}`, {
      payload,
    })
      .then((response) => {
        setisLoading(false);
        if (response.status === 200) {
          toast.success(response.data.message, toastStyle);
          window.location.reload();
        }
      })
      .catch((error) => {
        setisLoading(false);
        toast.error(`${error.response.data.error}`, toastStyle);
        console.log(error);
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {status === "runing" ? (
          <Button disabled>Confirm</Button>
        ) : (
          <Button>Rent Now</Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm user payment</DialogTitle>
          <DialogDescription>
            Complete the form below to rent the GPU
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid  items-center gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className=" text-left">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                className="col-span-3"
                placeholder="Email address"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid  items-center gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="passwordhost" className=" text-left">
                Host Password
              </Label>
              <Input
                id="passwordhost"
                name="password"
                placeholder="Host Password"
                className="col-span-3"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          {isLoading ? (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button onClick={handleConfirm} type="submit">
              Confirm
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PopupWallet;
