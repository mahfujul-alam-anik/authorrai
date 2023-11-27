"use client";

import React from "react";
import SignInForm from "@/components/SignInForm";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const SignInPage = () => {
  const router = useRouter();
  const { status } = useSession();
  if (status === "authenticated") {
    router.push("/user/dashboard");
  }

  return (
    <div>
      <div className="bg-vivid-blur h-screen w-full flex items-center justify-center">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
