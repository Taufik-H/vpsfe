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

const CardGpu = (props) => {
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(0), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Card className="cursor-pointer rounded-xl border p-3 transition-all duration-300 ease-in-out dark:bg-slate-900 hover:dark:border-slate-600">
      <div className="flex items-center gap-2 border-b pb-2">
        <div className="rounded-full border-2 p-1 dark:border-slate-800">
          <CiMicrochip size={20} />
        </div>
        <div className="">
          <p className="text-xs font-medium text-slate-500">{props.cpuName}</p>
          <p className="text-sm font-bold text-slate-700 dark:text-white">
            {props.gpuName}
          </p>
        </div>
      </div>
      <div className="my-5 flex flex-wrap justify-left gap-2">
        <Badge
          variant="secondary"
          className="gap-2 text-[11px] transition-all duration-300 hover:bg-blue-500 hover:text-white hover:dark:bg-white hover:dark:text-slate-900"
        >
          <p className=" uppercase">gpu</p>
          <p>
            {props.gpuUsage.used}GB / {props.gpuUsage.total}GB
          </p>
        </Badge>
        <Badge
          variant="secondary"
          className="gap-2 text-[11px] transition-all duration-300 hover:bg-blue-500 hover:text-white hover:dark:bg-white hover:dark:text-slate-900"
        >
          <p className=" uppercase">cpu</p>
          <p>
            {props.cpuUsage.used}GB / {props.cpuUsage.total}GB
          </p>
        </Badge>
        <Badge
          variant="secondary"
          className="gap-2 text-[11px] transition-all duration-300 hover:bg-blue-500 hover:text-white hover:dark:bg-white hover:dark:text-slate-900"
        >
          <TbCloudUpload /> {props.uploadSpeed}Mbps / <TbCloudDownload />{" "}
          {props.downloadSpeed}Mbps
        </Badge>
      </div>
      <div className="my-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="flex  w-full flex-col items-start justify-start px-3">
              <p className="mb-2 text-xs font-bold uppercase">used</p>
              <Progress value={props.overallUsedPercentage} className="h-2 w-[100%] " />
            </TooltipTrigger>
            <TooltipContent>
              <p>{props.overallUsedPercentage}%</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex items-center justify-end gap-4">
        <p className="font-semibold">${props.price} / Hour</p>
        <Button className="dark:text-white">Rent now</Button>
      </div>
    </Card>
  );
};

export default CardGpu;
