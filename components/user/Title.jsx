import React from "react";

const Title = ({ text }) => {
  return (
    <div className="flex items-center gap-4 z-0 ">
      <h2 className="text-slate-200 text-2xl font-semibold">{text}</h2>
      <div className="h-[2px] w-8 animate-scale bg-slate-300"></div>
    </div>
  );
};

export default Title;
