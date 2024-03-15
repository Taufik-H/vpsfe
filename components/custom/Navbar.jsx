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
import { Dropdown } from "./Dropdown";
import { SquareGanttChart } from "lucide-react";

const Navbar = () => {
  const [userData, setUserData] = useRecoilState(userLoginState);
  const currentPath = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(userData.name);
  if (currentPath === "/login" || currentPath === "/register") {
    return null;
  }
  useEffect(() => {
    const sessionCookie = Cookies.get("token");
    const userLoggedin = Cookies.get("__session");

    if (sessionCookie && userLoggedin) {
      const payload = jwtExtract(sessionCookie, SECRET_KEY);
      setIsLoggedIn(true);
      setUserData(payload);
    }
  }, []);
  const handleLogout = () => {
    Cookies.remove("token");
    window.location.href = "/login";
  };
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
                <SheetTitle>
                  <div className="">
                    <p>{userData.name}</p>
                    <p>{userData.email}</p>
                  </div>
                </SheetTitle>
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
                <div className="mt-5">
                  {userData.roleId === "admin" ? (
                    <Link href={"/admin/order"} className="flex items-center">
                      All user orders
                    </Link>
                  ) : (
                    <Link href={"/user/order"} className="flex items-center">
                      Orders
                    </Link>
                  )}
                  <Button className="mt-5 w-full" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
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
          <div className="hidden lg:block">
            <Dropdown
              name={userData.name}
              email={userData.email}
              role={userData.roleId}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
