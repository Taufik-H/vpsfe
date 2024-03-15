"use client";

import * as React from "react";
import { DoorOpen, MoreHorizontal, SquareGanttChart } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "../ui/badge";
import Link from "next/link";

export function Dropdown(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex  flex-col items-start justify-between rounded-md border  sm:flex-row sm:items-center">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuLabel>
            <div className="flex items-center justify-between justify-items-center">
              <div className="">
                <p className="text-[12px] font-semibold">{props.name}</p>
                <p className="text-[9px] text-slate-800">{props.email}</p>
              </div>
              <Badge className="text-[9px] text-slate-800">{props.role}</Badge>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {props.role === "admin" ? (
              <DropdownMenuItem>
                <Link href={"/admin/order"} className="flex items-center gap-3">
                  <SquareGanttChart className="mr-2 h-4 w-4" />
                  All user orders
                </Link>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem>
                <Link href={"user/order"} className="flex items-center gap-3">
                  <SquareGanttChart className="mr-2 h-4 w-4" />
                  my orders
                </Link>
              </DropdownMenuItem>
            )}

            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <DoorOpen className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
