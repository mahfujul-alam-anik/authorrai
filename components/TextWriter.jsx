"use client";

import React, { useEffect, useState } from "react";

const TextWriter = ({ text, delay }) => {
  const [texts, setTexts] = useState("");
  const delayTime = delay ? delay : 50;

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setTexts(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(currentIndex);
      }
    }, delayTime);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="text-slate-100">
      <p>{texts}</p>
    </div>
  );
};

export default TextWriter;
