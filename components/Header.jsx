"use client";

import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/constants/nav-items";
import AccountButton from "./AccountButton";
import styles from "./css/Header.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isScrollDown, setIsScrollDown] = useState(false);

  // track scrolling
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fixedHeader = isScrollDown
    ? "fixed backdrop-blur-md py-3 max-md:relative"
    : "absolute py-4";

  return (
    <header
      className={`  px-16 max-md:px-5 top-0 left-0 right-0 z-10   ${fixedHeader} `}
    >
      <div className="flex justify-between items-center w-full max-md:justify-center max-md:pt-5">
        <Link
          href={"/"}
          className="flex items-center justify-center text-center pt-1"
        >
          <Image
            src={"/images/authorrai-logo.png"}
            // width={isScrollDown ? 100 : 150}
            width={100}
            height={60}
            alt="Authorrai"
          />
          <h1 className="text-2xl pl-3 font-thin text-slate-100">authorrai</h1>
        </Link>
        <div
          className={`flex items-center justify-between gap-2 max-sm:hidden`}
        >
          {navItems.map((item) => {
            const isActive =
              (pathname.includes(item.path) && item.path.length > 1) ||
              pathname === item.path;

            return (
              <Link
                className={`capitalize px-1 mx-2  text-white hover:text-slate-300 ${
                  styles["header-link"]
                } ${isActive && styles["active-link"]} ${
                  isScrollDown && "text-gray-800"
                }`}
                key={item.id}
                href={item.path}
              >
                <p>{item.name}</p>
              </Link>
            );
          })}
          {pathname !== "/auth/signin" && <AccountButton />}
        </div>
      </div>
    </header>
  );
};

export default Header;
