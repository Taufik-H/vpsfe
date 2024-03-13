"use client";
import { NAVBAR } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const currentPath = usePathname();
  return (
    <div>
      <nav className="flex h-16 w-full items-center justify-between px-10 py-10  ">
        <Link href={"/"}>
          <Image src={"/logo.webp"} priority alt="logo" width={55} height={55} />
        </Link>
        <ul className="flex gap-5">
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
        <div className="flex  gap-4">
          <ModeToggle />
          <Link href={"/login"}>
            <Button className="rounded-lg">Login</Button>
          </Link>
        </div>
      </nav>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent from-10% via-slate-300 via-50% to-transparent to-90% dark:via-slate-700"></div>
    </div>
  );
};

export default Navbar;
