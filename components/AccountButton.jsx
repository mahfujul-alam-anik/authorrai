"use client";

import React, { useState } from "react";
import SignInForm from "./SignInForm";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const AccountButton = () => {
  const [showForm, setShowForm] = useState(false);
  const { data: session, status } = useSession();

  // if user exits, show dashboard button else show account button
  if (!session) {
    return (
      <div className="flex flex-col items-center pl-2">
        <div
          className="bg-gradient-to-r from-indigo-800 to-slate-800  px-4 py-2 rounded-md text-white capitalize font-medium text-sm cursor-pointer"
          onClick={setShowForm.bind(this, true)}
        >
          <p>account</p>
        </div>

        {/* modal  */}
        <div
          className={`absolute top-0 left-0 right-0 bottom-0 w-full h-screen bg-signIn transition-all duration-400 ${
            showForm
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setShowForm(false)}
        >
          <div className="flex justify-center items-center h-screen w-full">
            <div title="Click outside to close the form.">
              <SignInForm />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-r from-indigo-800 to-slate-800 px-4 py-2 rounded-md text-white capitalize font-medium text-sm cursor-pointer">
          <Link href={"/user/dashboard"}>dashboard</Link>
        </div>
      </div>
    );
  }
};

export default AccountButton;
