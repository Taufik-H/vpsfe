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
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";

const Navbar = () => {
  const currentPath = usePathname();

  // disable when the current path is login or register
  if (currentPath === "/login" || currentPath === "/register") {
    return null;
  }

  return (
    <div className="p-2 px-10">
      <nav className=" bg-blur-md  mt-5 flex h-16 w-full items-center justify-between rounded-xl border-r border-t border-slate-600 bg-gradient-to-tr from-slate-100/20  to-slate-100/10 px-10  ">
        <Link href={"/"}>
          <Image
            src={"/nav.png"}
            priority
            alt="logo"
            width={200}
            height={200}
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
    </div>
  );
};

export default Navbar;
