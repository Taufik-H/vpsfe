"use client";
import { NAVBAR } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "./ModeToggle";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";

const Navbar = () => {
  const currentPath = usePathname();
  return (
    <div>
      <nav className=" flex h-16 w-full items-center justify-between px-10 py-10  ">
        <Link href={"/"}>
          <Image
            src={"/logo.webp"}
            priority
            alt="logo"
            width={55}
            height={55}
          />
        </Link>
        <ul className="hidden gap-5 lg:flex ">
          {NAVBAR.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={`${link.href === currentPath ? `text-blue-500` : ""} text-lg capitalize transition-all duration-200 hover:text-blue-500`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex  items-center gap-4">
          <ModeToggle />
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <RxHamburgerMenu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <DropdownMenuSeparator className="mt-3" />

                {NAVBAR.map((link) => (
                  <div
                    className="flex w-full flex-col justify-start gap-5 text-left text-lg capitalize transition-all duration-200 hover:text-blue-500"
                    key={link.id}
                  >
                    <Link
                      href={link.href}
                      className={`mt-5 divide-y-2 ${link.href === currentPath ? `text-blue-500` : ""} text-lg capitalize transition-all duration-200 hover:text-blue-500`}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
                <Link href={"/login"}>
                  <Button className="mt-5 rounded-lg">Login</Button>
                </Link>
              </SheetContent>
            </Sheet>
          </div>
          <Link href={"/login"} className="hidden lg:block">
            <Button className="rounded-lg">Login</Button>
          </Link>
        </div>
      </nav>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent from-10% via-slate-300 via-50% to-transparent to-90% dark:via-slate-700"></div>
    </div>
  );
};

export default Navbar;
