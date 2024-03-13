import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Waiting = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="flex items-center justify-center gap-4 rounded-xl p-5">
        <Image src={"/logo.webp"} width={100} height={100} alt="logo" />
        <div className="">
          <p className="text-2xl font-bold">Payment sucessfully</p>
          <p className="mb-2 text-sm">Waiting for confirmation max 42 hours</p>
          <Link href="/user/order" className="text-xs font-bold underline">
            Check my order
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Waiting;
