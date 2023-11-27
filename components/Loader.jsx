import React from "react";
import AnimationGIF from "./AnimationGIF";

const Loader = () => {
  return (
    <div className="bg-gradient-video h-screen w-full">
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-6/12 max-md:w-8/12">
          <AnimationGIF />
        </div>
      </div>
    </div>
  );
};

export default Loader;
