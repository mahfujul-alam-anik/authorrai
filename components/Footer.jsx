import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { PiLinkedinLogo } from "react-icons/pi";
import { RiFacebookBoxLine, RiTwitterXFill } from "react-icons/ri";
import { navItems } from "@/constants/nav-items";

const Footer = () => {
  return (
    <section className="bg-footer px-20 max-md:px-14 max-sm:px-10 pt-32 max-md:pt-20 max-sm:pt-16 pb-16">
      <div className="flex justify-between max-sm:flex-col border-b-2 border-blue-950 pb-12 mb-12 max-md:gap-10 max-w-7xl m-auto">
        <div className="block max-w-sm">
          {/* <Image src={ } width={ } height={ } alt="" /> */}
          {/* <h1 className="text-2xl font-bold text-slate-900">AthorrAI</h1> */}
          <Link href={"/"}>
            <Image
              src={"/images/authorrai-logo.png"}
              // width={isScrollDown ? 100 : 150}
              width={140}
              height={60}
              alt="Authorrai"
            />
          </Link>
          <p className="text-slate-300 font-normal pt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            quisquam debitis vero. Sapiente, minus obcaecati soluta dolorum
            illum maiores. Pariatur quisquam sapiente non dicta nihil nemo
            voluptatum odit dolorum ut.
          </p>
        </div>
        <div className="block">
          <h1 className="text-slate-200 text-lg capitalize font-semibold pb-5">
            useful links
          </h1>
          <ul className="flex flex-col gap-3 capitalize">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link className="text-slate-300 text-base" href={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                className="text-slate-300 text-base"
                href={"terms-conditions"}
              >
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className="block">
          <h1 className="text-slate-200 text-lg capitalize font-semibold pb-5">
            join us
          </h1>
          <div className="flex flex-row items-center gap-6 text-violet-800 font-bold text-3xl animate-pulse">
            <Link href={"#"}>
              <AiOutlineInstagram />
            </Link>
            <Link href={"#"}>
              <RiTwitterXFill />
            </Link>
            <Link href={"#"}>
              <RiFacebookBoxLine />
            </Link>
            <Link href={"#"}>
              <PiLinkedinLogo />
            </Link>
          </div>
          <div className="block pt-12">
            <h1 className="text-slate-200 text-lg capitalize font-semibold pb-5">
              subscribe for newsletter
            </h1>
            <form action="" method="post">
              <div className="flex ring-1">
                <input
                  type="text"
                  placeholder={"Enter your email"}
                  className="px-3 py-2 border-2 outline-none max-md:w-40 max-sm:w-full"
                />
                <input
                  type="submit"
                  value={"Submit"}
                  className="bg-cyan-700 px-3 text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="text-slate-300 px-4 text-center capitalize text-sm">
        <p className="">
          all right reserved and copyright by
          <Link
            href={"/"}
            className=" italic text-blue-500 border-blue-900 pl-1"
          >
            authorrai.com
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Footer;
