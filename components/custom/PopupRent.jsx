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
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    price: "",
    mindeposit: "",
    walletadders: "",
  });

  const handleFormSubmit = () => {
    setisLoading(true);

    handleRental(data)
      .then(() => {
        router.push("/waiting");
      })
      .catch((error) => {
        console.error("Error while handling rental:", error);
        setisLoading(false);
      });
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
                defaultValue={props.name}
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
                defaultValue={props.price}
                className=""
                disabled
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="mindeposit" className=" text-left">
                Min Deposit
              </Label>
              <Input
                id="mindeposit"
                value={data.mindeposit}
                onChange={(e) =>
                  setData({ ...data, mindeposit: e.target.value })
                }
                className=""
              />
            </div>
          </div>

          <div className="grid  items-center gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="walletadders" className=" text-left">
                Wallet address
              </Label>
              <Input
                id="walletaddress"
                defaultValue={dataWallet ? dataWallet.address : ""}
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
            <Button onClick={handleFormSubmit} type="button">
              Pay now
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PopupRent;
