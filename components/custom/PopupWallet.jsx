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
const PopupWallet = (props) => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Confirm</Button>
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
                className="col-span-3"
                placeholder="Email address"
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
                placeholder="Host Password"
                className="col-span-3"
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PopupWallet;
