"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { mobileNavItems } from "@/constants/nav-items";
import { usePathname, useRouter } from "next/navigation";

const MobileNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isScrollingDown, setIsScrollingDown] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    setIsScrollingDown(scrollTop > (window.lastScrollTop || 0));
    window.lastScrollTop = scrollTop;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 rounded-tl-3xl rounded-tr-3xl transition-all duration-300 hidden max-sm:block ${
        isScrollingDown && "translate-y-full"
      } `}
    >
      <div className="flex items-center justify-evenly backdrop-blur-lg backdrop-brightness-150 rounded-tl-3xl rounded-tr-3xl py-4 shadow-xl">
        {mobileNavItems.map((item) => {
          const isActive =
            (pathname.includes(item.path) && item.path.length > 1) ||
            pathname === item.path;

          return (
            <Link
              href={item.path}
              key={item.id}
              className={`px-3 py-3 rounded-md hover:bg-slate-800 transition-all duration-300  backdrop-blur-sm ${
                isActive ? "bg-slate-800" : ""
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="text-gray-300 font-bold text-md">
                  {item.icon}
                </div>
              </div>
              <p className="text-xs text-gray-300 capitalize pt-1 font-md">
                {item.name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavbar;
