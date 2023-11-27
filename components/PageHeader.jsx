import React from "react";
import Button from "./ShiningButton";

const PageHeader = ({ title, subTitle, button, color }) => {
  const bg_color = color ? "bg-radial-gradient-pricing" : "bg-radial-gradient";
  return (
    <section className="flex-center px-5">
      <div
        className={`${bg_color} h-[75vh] max-sm:h-auto max-sm:pt-36 max-sm:pb-14  w-full flex-center`}
      >
        <div className="block">
          <h1 className="text-slate-100 text-5xl max-md:text-4xl font-extrabold text-center uppercase">
            {title}
          </h1>
          <p className="text-white text-sm pt-6 pb-8 text-center">{subTitle}</p>
          {button && (
            <Button link="/auth/signin" text={"Get Started"} color="#0c0826" />
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
