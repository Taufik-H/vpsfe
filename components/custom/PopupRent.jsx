import React from "react";
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
const PopupRent = (props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Rent Now</Button>
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
                defaultValue="change the value to address from api"
                className="col-span-3"
                disabled
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Pay now</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PopupRent;
