"use client";

import React, { useState } from "react";
import Link from "next/link";
import { userSidebarItems } from "@/constants/nav-items";
import { FiSidebar } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <aside
      className={`h-screen text-slate-200 sticky top-0 left-0 transition-all duration-500  bg-slate-900 ${
        isOpenSidebar ? "w-52 max-sm:w-44" : "w-20"
      }`}
    >
      {/* sidebar toggler  */}
      <div className="h-16 pr-[22px] max-md:justify-center max-md:pr-0 w-full flex items-center justify-end">
        <button
          className="p-1 text-2xl text-violet-800 hover:animate-pulse"
          onClick={toggleSidebar}
          title="Toggle Sidebar"
        >
          {isOpenSidebar ? <AiOutlineClose /> : <FiSidebar />}
        </button>
      </div>

      {/* sidebar items  */}
      <div className="block">
        <ul>
          {userSidebarItems.map((item, index) => {
            const isActive =
              pathname.includes(item.path) || pathname === item.path;
            return (
              <li key={index} title={isOpenSidebar ? "" : item.name}>
                <Link
                  href={item.path}
                  className={`flex gap-3 max-md:pr-2 max-sm:gap-[6px] items-center hover:bg-slate-800 hover:animate-pulse hover:border-l-[3px] border-violet-800 transition-all duration-300 capitalize  my-3 first:mt-0 ${
                    isOpenSidebar
                      ? "pl-5 py-3 max-md:pl-4 max-sm:pl-2"
                      : "w-full justify-center py-3"
                  } ${isActive && "bg-slate-800 border-l-[3px]"}`}
                >
                  <span
                    className={` text-violet-800 text-2xl max-md:text-2xl ${
                      isActive && "animate-pulse"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={`text-sm max-md:text-xs ${
                      !isOpenSidebar && "hidden"
                    } ${isActive && "animate-pulse"}`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
