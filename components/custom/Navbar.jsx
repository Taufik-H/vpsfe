"use client";
import { NAVBAR } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
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
import Cookies from "js-cookie";
import { useLogin } from "../auth/hooks/useLogin";
import { SECRET_KEY } from "@/utils/ApiUrl";
import { jwtExtract } from "@/utils/jwtExtract";
import { useRecoilState } from "recoil";
import { userLoginState } from "@/recoil/userLogin";

const Navbar = () => {
  const [userData, setUserData] = useRecoilState(userLoginState);
  const currentPath = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (currentPath === "/login" || currentPath === "/register") {
    return null;
  }
  useEffect(() => {
    const sessionCookie = Cookies.get("token");
    console.log({ sessionCookie });
    if (sessionCookie) {
      const payload = jwtExtract(sessionCookie, SECRET_KEY);

      setUserData(payload);
    }
  }, []);
  return (
    <nav className=" bg-blur-md mt-5 flex h-16 w-full items-center justify-between rounded-xl bg-gradient-to-tr px-10 py-10 dark:border-r dark:border-t dark:border-slate-600  dark:from-slate-100/20 dark:to-slate-100/10  ">
      <Link href={"/"}>
        <Image src={"/nav.png"} priority alt="logo" width={200} height={200} />
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
              {/* Tampilkan tombol Logout jika pengguna sudah login */}
              {isLoggedIn ? (
                <Button className="mt-5 rounded-lg">Logout</Button>
              ) : (
                <Link href={"/login"}>
                  <Button className="mt-5 rounded-lg">Login</Button>
                </Link>
              )}
            </SheetContent>
          </Sheet>
        </div>
        {/* Sembunyikan tombol Login jika pengguna sudah login */}
        {!isLoggedIn ? (
          <Link href={"/login"} className="hidden lg:block">
            <Button className="rounded-lg">Login</Button>
          </Link>
        ) : (
          <Button className="hidden rounded-lg lg:block">Logout</Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
