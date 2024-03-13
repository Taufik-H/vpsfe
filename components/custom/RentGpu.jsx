import React from "react";
import { VscChip } from "react-icons/vsc";
import CardGpu from "./CardGpu";

const RentGpu = () => {
  return (
    <section className="sm:px-6 lg:px-12 ">
      <div className="mt-10 flex items-center  justify-items-center gap-4">
        <h1 className="text-lg font-bold capitalize">live GPU nodes</h1>
        <VscChip size={25} className="mt-1 animate-pulse text-green-600" />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-4">
        <CardGpu />
        <CardGpu />
        <CardGpu />
        <CardGpu />
        <CardGpu />
        <CardGpu />
      </div>
    </section>
  );
};

export default RentGpu;
