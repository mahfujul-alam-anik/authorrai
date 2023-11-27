"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ = ({ faqs }) => {
  const [itemSelection, setItemSelection] = useState(null);

  const toggleAccordion = (i) => {
    if (itemSelection === i) {
      return setItemSelection(null);
    }
    setItemSelection(i);
  };

  return (
    <div className="backdrop-blur-md max-w-3xl">
      <article>
        {faqs.map((item, index) => (
          <div className="rounded-sm" key={index}>
            <div
              className={`bg-transparent-700 p-5 flex items-center justify-between  gap-2 cursor-pointer max-md:p-3 ${
                itemSelection == index ? "" : "border-b-2 border-slate-900"
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <h1 className="text-slate-100 text-lg  max-md:text-lg max-sm:text-base">
                {item.question}
              </h1>
              <div className="text-3xl max-md:text-2l text-white font-bold ">
                {itemSelection == index ? <FiMinus /> : <FiPlus />}
              </div>
            </div>
            <div
              className={`bg-transparent-400 transition-max-height ease-in-out duration-300 `}
              style={{
                maxHeight: itemSelection == index ? "1000px" : "0",
                overflow: itemSelection == index ? "visible" : "hidden",
              }}
            >
              <p className="text-slate-200 text-sm p-5  max-md:p-3 transition-max-height ease-in-out duration-300  max-sm:text-sm">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </article>
    </div>
  );
};

export default FAQ;
