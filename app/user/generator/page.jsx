"use client";

import React, { useCallback, useState } from "react";
import Title from "@/components/user/Title";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";
import { genre_list } from "@/constants/genre-list";
import axios from "axios";

const Generator = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [chapters, setChapters] = useState([]);
  const [aboutBook, setAboutBook] = useState("");
  const [letAIChose, setLetAIChose] = useState(false);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handleAddingChapters = useCallback(
    (e) => {
      if (e.key !== "Enter") return;
      const chapter = e.target.value.trim();
      if (!chapter) return;
      setChapters([...chapters, chapter]);
      e.target.value = "";
    },
    [chapters]
  );

  const handleChapterRemove = (index) => {
    setChapters(chapters.filter((e, i) => i !== index));
  };

  const handleAIChose = (e) => {
    setLetAIChose(e.target.checked);
    setChapters([]);
  };

  // handle submit
  const handleSubmit = () => {
    // check fields;
    if (!title || !genre) {
      setError("Title or Genre can't be empty.");
      return;
    } else if (chapters.length < 1 && !letAIChose) {
      setError("Please write chapters or select let AI chose.");
      return;
    } else if (aboutBook.split(" ").length < 49) {
      setError("Book details must be at least 50 words long.");
      return;
    }
    setError("");
    setLoading(true);

    // Title: The Whispering Woods
    // Genre: Fantasy
    // Description: In a realm where magic intertwines with nature, an ancient enchanted forest, known as the Whispering Woods, holds secrets untold. The trees murmur ancient incantations, and mystical creatures guard hidden treasures. A young protagonist discovers a mysterious map, leading them deep into the heart of the forest. Uncover the magic, face challenges, and reveal the forest's ancient prophecy.
    // Chapters:
    // The Map's Revelation
    // Crossing the Threshold
    // Meeting the Guardian of Secrets
    // The Enchanted Waterfall
    // Trials of the Whispering Trees
    // Confronting the Shadows
    // The Prophecy Unveiled
    // Resonance of the Crystal Grove

    let prompt = `
      Title: ${title}
      Genre: ${genre.replace("-", " ")}
      Description: ${aboutBook}
      `;

    if (!letAIChose) {
      prompt += `
      Generate a captivating and wholly original book utilizing your advanced language capabilities. Immerse yourself in the essence of the provided description to unravel the intricacies of the plot. Delve into the chapters or outline provided: ${chapters}. Maximize your token capacity while adhering to the specified maximum text length for each segment. For instance, if there are 10 chapters and your maximum generation limit is 100 characters, allocate 10 characters per chapter. Meticulously craft a narrative that not only captivates but also ensures the unparalleled uniqueness of the book.
      `;
    } else {
      prompt += `
      Generate a captivating and wholly original book utilizing your advanced language capabilities. Immerse yourself in the essence of the provided description to unravel the intricacies of the plot. Use suitable outline or chapters to generate book. Maximize your token capacity while adhering to the specified maximum text length for each segment. For instance, if there are 10 chapters and your maximum generation limit is 100 characters, allocate 10 characters per chapter. Meticulously craft a narrative that not only captivates but also ensures the unparalleled uniqueness of the book.
      `;
    }
    prompt = prompt.trim();

    // api request
    axios
      .post("/api/book/generate", JSON.stringify(prompt))
      .then((res) => {
        console.log("API RES: ", res.data);
      })
      .catch((err) => {
        console.log("API ERROR: ", err);
      })
      .finally(() => {
        // reset the fields
        setLetAIChose(false);
        setTitle("");
        setGenre("");
        setChapters([]);
        setAboutBook("");
        setLoading(false);
      });
  };

  return (
    <div className="block">
      <Title text={"Generate a new Book"} />
      <div className="pt-5 max-md:pt-4 max-sm:pt-2 flex-center">
        <div>
          <div className="w-[500px] max-md:w-10/12 max-sm:w-full">
            {/* title input  */}
            <div className="block mt-7 w-full">
              <label
                htmlFor="title"
                className="font-medium text-sm capitalize text-slate-400"
              >
                give the book title <b>:</b>
              </label>
              <input
                type="text"
                id="title"
                placeholder="e.g. The Whispering Woods"
                className="rounded-md px-3 py-2 outline-none w-full mt-2 placeholder:text-xs bg-slate-700 border-2 border-slate-800 shadow-lg focus:border-slate-600 text-slate-200"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            {/* genre input  */}
            <div className="block mt-7 w-full">
              <label
                htmlFor="genre"
                className="font-medium text-sm capitalize text-slate-400"
              >
                select a genre <b>:</b>
              </label>
              <select
                id="genre"
                className="rounded-md px-3 py-2 outline-none w-full mt-2 bg-slate-700 border-2 border-slate-800 shadow-lg focus:border-slate-600 text-slate-200 pr-5 capitalize"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              >
                <option value="" className="text-slate-300 ">
                  ...
                </option>
                {genre_list.map(({ value, title }, index) => (
                  <option key={index} value={value}>
                    {title}
                  </option>
                ))}
              </select>
            </div>
            {/* chapters name  */}
            <div className="block mt-7 w-full relative">
              <label
                htmlFor="chapters"
                className="font-medium text-sm capitalize text-slate-400"
              >
                define chapters name or let the AI chose <b>:</b>
              </label>
              <div
                className={`flex rounded-md px-3 py-2 outline-none w-full mt-2 bg-slate-700 border-2 border-slate-800 shadow-lg focus:border-slate-600 text-slate-200 flex-wrap gap-2 hover:border-slate-600 ${
                  letAIChose &&
                  "opacity-70 cursor-not-allowed hover:border-slate-800"
                }`}
                title={`${
                  letAIChose
                    ? "You have selected 'Let the AI chose' option."
                    : "After write, press 'Enter' key to define a chapter."
                } `}
              >
                {chapters.map((chapter, index) => (
                  <div
                    key={index}
                    className="flex-center bg-slate-500 text-slate-200 rounded-3xl text-xs px-3 py-1 gap-2"
                  >
                    <p>{chapter}</p>
                    <span
                      className=" cursor-pointer text-base"
                      title="Click to remove"
                      onClick={() => handleChapterRemove(index)}
                    >
                      <AiOutlineCloseCircle />
                    </span>
                  </div>
                ))}
                <div className="flex-grow">
                  <input
                    id="chapters"
                    type="text"
                    className={`px-3 outline-none w-full bg-transparent placeholder:text-xs ${
                      letAIChose && "cursor-not-allowed"
                    }`}
                    placeholder="e.g. Meeting the Guardian of Secrets"
                    onKeyDown={handleAddingChapters}
                    disabled={letAIChose}
                  />
                </div>
              </div>
              <div className="absolute bottom-[11px] right-1 cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="absolute flex items-center left-4 max-sm:left-[9px] max-sm:top-[3px] h-full"
                    id="aiChoseChapters"
                    value={letAIChose}
                    onChange={handleAIChose}
                  />
                  <label htmlFor="aiChoseChapters">
                    <span className="bg-slate-600 py-2 pl-9 pr-3 text-xs rounded-md text-slate-200 border-2 border-slate-700 cursor-pointer max-sm:text-[9px] max-sm:pr-2 max-sm:pl-6">
                      Let the AI chose
                    </span>
                  </label>
                </div>
              </div>
            </div>
            {/* details input  */}
            <div className="block mt-7 w-full">
              <label
                htmlFor="details"
                className="font-medium text-sm capitalize text-slate-400"
              >
                describe a bit about book <b>:</b>
              </label>
              <textarea
                id="details"
                placeholder="e.g. In a realm where magic intertwines with nature, an ancient enchanted forest, known as the Whispering Woods, holds secrets untold. The trees murmur ancient incantations, and mystical creatures guard hidden treasures. A young protagonist discovers a mysterious map, leading them deep into the heart of the forest. Uncover the magic, face challenges, and reveal the forest's ancient prophecy."
                className="rounded-md px-3 py-2 outline-none w-full mt-2 bg-slate-700 border-2 placeholder:text-xs border-slate-800 shadow-lg focus:border-slate-600 text-slate-200"
                rows={4}
                value={aboutBook}
                onChange={(e) => setAboutBook(e.target.value)}
              ></textarea>
            </div>
            {/* error messages */}
            {
              <div className=" text-red-700 text-center text-sm mt-5">
                <p>{error}</p>
              </div>
            }

            {/* generate button */}
            <div className="flex justify-end items-center mt-5">
              <button
                type="submit"
                className={`uppercase text-xs p-3 bg-slate-900 w-32 text-center rounded-md text-slate-100 shadow-lg ${
                  loading
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:animate-pulse"
                } flex-center`}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <BiLoaderCircle className="animate-spin text-base text-center" />
                ) : (
                  "generate"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
