"use client";

import React, { useCallback, useState } from "react";
import Link from "next/link";
import { BiExitFullscreen, BiFullscreen } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { PiBooksThin } from "react-icons/pi";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  // console.log(session);

  // redirect if user is not logged in
  if (status === "unauthenticated") {
    router.push("/auth/signin");
  }

  // handle fullscreen and exit fullscreen mode
  const handleFullScreen = useCallback(() => {
    if (!isFullScreen) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  }, [isFullScreen]);

  const handleSignOut = () => {
    signOut();
    router.push("/auth/signin");
  };

  return (
    <header className="h-16 w-full  sticky top-0 left-0 right-0 shadow-lg pr-12 max-sm:pr-8 bg-slate-900 z-10">
      <div className="flex items-center justify-between h-full gap-5 md:pl-12">
        <Image
          src={"/images/authorrai-logo.png"}
          alt="authorrai"
          width={75}
          height={30}
        />
        <div className="flex items-center justify-end gap-7 max-sm:gap-5 text-violet-700 h-full">
          <div>
            <button
              className="text-2xl p-1 hover:animate-pulse"
              onClick={handleFullScreen}
            >
              {isFullScreen ? (
                <BiExitFullscreen title="Exit Full Screen" />
              ) : (
                <BiFullscreen title="Enter Full Screen" />
              )}
            </button>
          </div>
          <div className="flex-center text-sm gap-1 capitalize text-slate-400 max-sm:hidden">
            <span className="text-violet-600 text-base">
              <PiBooksThin />
            </span>
            <span>34</span>
            <span>/</span>
            <span>50</span>
            <span className="font-mono pl-1">books left</span>
          </div>
          <div>
            <Link href={"/user/account"} className="flex-center gap-2">
              {/* if user has image, show the image. else show first character of email address */}
              {session?.user.image ? (
                <Image
                  width={32}
                  height={32}
                  alt="user image"
                  src={session?.user.image}
                  className="rounded-full"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-slate-800 text-violet-600 font-bold shadow-lg flex-center uppercase">
                  <span>{session?.user.email.charAt(0)}</span>
                </div>
              )}
              <p className="text-sm max-md:w-28 font-medium text-slate-400 hover:text-slate-300 max-sm:hidden overflow-hidden">
                {session?.user.email}
              </p>
            </Link>
          </div>
          <div>
            <button
              className="text-2xl p-1 hover:animate-pulse"
              title="Logout"
              onClick={handleSignOut}
            >
              <FiLogOut />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
