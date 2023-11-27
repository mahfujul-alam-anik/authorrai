import Button from "@/components/ShiningButton";
import React from "react";
import styles from "@/components/css/pricing.module.css";
import { BiArchive } from "react-icons/bi";
import PageHeader from "@/components/PageHeader";

const page = () => {
  return (
    <main className="gradient-color-animation-pricing  w-full">
      <PageHeader
        title={"best price"}
        subTitle={"Start your AI journey by selecting our reasonable packages."}
        button={false}
        color={true}
      />
      <section className="m-auto pb-36 max-md:pb-24 max-w-7xl">
        <div className="flex justify-center gap-12 max-md:flex-col items-center">
          <div
            className={` ${styles["pricing-table"]} h-96 w-72 rounded-md backdrop-blur-lg backdrop-brightness-150 backdrop-contrast-125`}
          >
            <div className="block">
              <div className="bg-slate-950 rounded-es-full rounded-ee-full w-full py-9  shadow-lg">
                <h2 className="text-slate-100 font-semibold text-3xl text-center pb-5 capitalize">
                  Free Trial
                </h2>
                <div className="flex-center text-fuchsia-700 text-5xl ">
                  <BiArchive />
                </div>
                <div className="px-4"></div>
                <div className="h-24 w-full flex-center absolute bottom-0 left-0">
                  <Button
                    link="/auth/signin?package=free-trial"
                    text={"Checkout"}
                    color="#020617"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={` ${styles["pricing-table"]} h-96 w-72 rounded-md backdrop-blur-lg backdrop-brightness-150 backdrop-contrast-125`}
          >
            <div className="block">
              <div className="bg-slate-950 rounded-es-full rounded-ee-full w-full py-9  shadow-lg">
                <h2 className="text-slate-100 font-semibold text-3xl text-center pb-5 capitalize">
                  premium
                </h2>
                <div className="flex-center text-fuchsia-700 text-5xl ">
                  <BiArchive />
                </div>
                <div className="px-4"></div>
                <div className="h-24 w-full flex-center absolute bottom-0 left-0">
                  <Button
                    link="/auth/signin?package=free-trial"
                    text={"Checkout"}
                    color="#020617"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={` ${styles["pricing-table"]} h-96 w-72 rounded-md backdrop-blur-lg backdrop-brightness-150 backdrop-contrast-125`}
          >
            <div className="block">
              <div className="bg-slate-950 rounded-es-full rounded-ee-full w-full py-9 shadow-lg">
                <h2 className="text-slate-100 font-semibold text-3xl text-center pb-5 capitalize">
                  professional
                </h2>
                <div className="flex-center text-fuchsia-700 text-5xl ">
                  <BiArchive />
                </div>
                <div className="px-4"></div>
                <div className="h-24 w-full flex-center absolute bottom-0 left-0">
                  <Button
                    link="/auth/signin?package=free-trial"
                    text={"Checkout"}
                    color="#020617"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
