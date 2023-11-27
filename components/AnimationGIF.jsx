"use client";

import Lottie from "lottie-react";
import automateBookGenerator from "../public/gifs/animation_gif.json";

import React from "react";

const AnimationGIF = () => {
  return <Lottie animationData={automateBookGenerator} />;
};

export default AnimationGIF;
