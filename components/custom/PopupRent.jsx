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

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import useRental from "./useRental";
const PopupRent = (props) => {
  const { dataWallet, handleWallet } = useRental();

  console.log({ dataWallet });

  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const handleClick = () => {
    // use logic to handle submit form

    setisLoading(true);
    setTimeout(() => {
      // After some delay, navigate to the waiting page
      router.push("/waiting");
    }, 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button onClick={() => handleWallet(props.id, props.title, props.rate)}>
          Rent Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Billing Payment</DialogTitle>
          <DialogDescription>
            Complete the form below to rent the GPU
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid  items-center gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className=" text-left">
                Name
              </Label>
              <Input
                id="name"
                defaultValue={dataWallet?.title}
                className="col-span-3"
                disabled
              />
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="price" className=" text-left">
                Price
              </Label>
              <Input
                id="price"
                defaultValue={dataWallet?.rate}
                className=""
                disabled
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="mindeposit" className=" text-left">
                Min Deposit
              </Label>
              <Input id="mindeposit" className="" />
            </div>
          </div>

          <div className="grid  items-center gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="walletadders" className=" text-left">
                Wallet address
              </Label>
              <Input
                id="walletaddress"
                defaultValue={dataWallet?.address}
                className="col-span-3"
                disabled
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
            <Button onClick={handleClick} type="submit">
              Pay now
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PopupRent;
