"use client";
import React, { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { CiMicrochip } from "react-icons/ci";
import { TbCloudUpload } from "react-icons/tb";
import { TbCloudDownload } from "react-icons/tb";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const CardGpu = () => {
  const [progress, setProgress] = useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="mt-5 grid w-full lg:grid-cols-3">
      <Card className="cursor-pointer rounded-xl border bg-gradient-to-t from-slate-900 to-slate-950 p-3 transition-all duration-300 ease-in-out hover:border-slate-600">
        <div className="flex items-center gap-2 border-b pb-2">
          <div className="rounded-full border-2 border-slate-800 p-1">
            <CiMicrochip size={20} />
          </div>
          <div className="">
            <p className="text-xs font-medium text-slate-500">
              EPYC 7643 48-Core Processor AMD
            </p>
            <p className="text-sm font-bold">1x NVIDIA A100-SXM4-80GB</p>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <Badge
            variant="secondary"
            className="gap-2 transition-all duration-300 hover:bg-white hover:text-slate-900"
          >
            <p className=" uppercase">gpu</p>
            <p>0GB / 24GB</p>
          </Badge>
          <Badge
            variant="secondary"
            className="gap-2 transition-all duration-300 hover:bg-white hover:text-slate-900"
          >
            <p className=" uppercase">cpu</p>
            <p>2GB / 16GB</p>
          </Badge>
          <Badge
            variant="secondary"
            className="gap-2 transition-all duration-300 hover:bg-white hover:text-slate-900"
          >
            <TbCloudUpload /> 2GB / <TbCloudDownload /> 16GB
          </Badge>
        </div>
        <div className="my-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex  w-full flex-col items-start justify-start">
                <p className="mb-2 text-xs font-bold uppercase">used</p>
                <Progress value={progress} className="h-2 w-[100%] " />
              </TooltipTrigger>
              <TooltipContent>
                <p>{progress}%</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex items-center justify-end gap-4">
          <p className="font-semibold">$2.38 / Hour</p>
          <Button className="dark:text-white">Rent now</Button>
        </div>
      </Card>
    </div>
  );
};

export default CardGpu;
