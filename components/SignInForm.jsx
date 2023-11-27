"use client";

import React, { useState } from "react";
import styles from "./css/SignInForm.module.css";
import Link from "next/link";
import { FiLoader } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [error, setError] = useState("");
  const [focused, setFocused] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setFocused(e.target.value.length > 1);
  };

  const handleGoogleLogin = () => {
    signIn("google");
    setGoogleLoading(true);
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    setEmailLoading(true);

    try {
      // validate email
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address.");
        setEmailLoading(false);
        return;
      } else {
        signIn("email", { callbackUrl: "/user/dashboard", email: email });
      }
    } catch (e) {
      setError("An error occurred while signing up! Please try again.");
      console.error("An error occurred while signing up", e);
    }
  };

  return (
    <div
      className={`${styles["form-box-wrapper"]} rounded-md bg-slate-900 w-[335px]`}
      onClick={(e) => e.stopPropagation()}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className="p-10">
        <h2 className="text-slate-50 font-thin text-2xl text-center">
          authorrai
        </h2>

        {/* authentication using google  */}
        <div className="pt-7">
          <button
            className="flex items-center justify-center gap-2 bg-google-btn py-3 shadow-lg w-full rounded-md"
            onClick={handleGoogleLogin}
          >
            <FcGoogle className="text-lg" />
            <p className="text-slate-100 capitalize font-medium text-sm">
              {googleLoading ? (
                <FiLoader className="text-center animate-spin" />
              ) : (
                "continue with google"
              )}
            </p>
          </button>
          <p className="text-slate-400 font-medium text-center text-sm pt-8 ">
            Or continue with Email
          </p>
        </div>

        {/* authentication using email  */}
        <form method="POST">
          <div className="my-4 relative pt-3">
            <input
              id={"email"}
              value={email}
              type="text"
              onChange={handleChange}
              className={styles["inputField"]}
              focused={focused.toString()}
            />
            <label htmlFor={"email"} className={styles["inputLabel"]}>
              Enter Email Address
            </label>
          </div>
          <div className={styles["error-message"]}>{error}</div>
          <button
            className={`${styles["submit-btn"]} rounded-md ${
              emailLoading && styles["submit-btn-disabled"]
            }`}
            onClick={handleEmailLogin}
            type="submit"
            disabled={emailLoading}
          >
            {emailLoading ? (
              <FiLoader className="text-center animate-spin" />
            ) : (
              "Continue"
            )}
          </button>

          <Link
            href="terms-conditions"
            className="text-cyan-500 font-normal text-xs text-center mt-7 block"
            target="_blank"
          >
            Terms & Conditions
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
