import React, { lazy, Suspense } from "react";
import LinearCurveLine from "@/components/LinearCurveLine";
import TestimonialBooks from "@/components/TestimonialBooks";
import Image from "next/image";
import { RxDoubleArrowDown } from "react-icons/rx";
import ShiningButton from "@/components/ShiningButton";
import FAQ from "@/components/FAQ";
import { faqs } from "@/constants/faqs";
import TextWriter from "@/components/TextWriter";
const AnimationGIF = lazy(() => import("@/components/AnimationGIF"));

const HomePage = () => {
  return (
    <>
      <main className="">
        <div className="blue-type-gradient pb-16 max-sm:pb-8">
          <div className="hero-image relative top-0 left-0 right-0 z-0 w-full max-sm:pt-36">
            <div className="flex items-center w-full h-full justify-center max-w-7xl m-auto gap-6 lg:px-7 max-md:gap-4 max-sm:flex-col-reverse max-md:px-5">
              <div className=" w-6/12 max-sm:w-full px-5">
                <Suspense
                  fallback={<p className=" text-lg text-white">Loading...</p>}
                >
                  <AnimationGIF />
                </Suspense>
              </div>
              <div className="w-6/12 max-sm:w-full">
                <div className="text-center text-6xl font-bold leading-none tracking-tight text-white max-sm:text-4xl max-md:text-4xl">
                  <TextWriter
                    text={"Generate your own book by giving a single prompt."}
                    delay={100}
                  />
                </div>
                <div className="flex items-center justify-center mt-10">
                  <ShiningButton
                    link={"/user/generator"}
                    text={"Generate Now"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <TestimonialBooks />
            <LinearCurveLine />
          </div>
        </div>

        {/* how to section start  */}
        <section className="pt-4 w-full gradient-color-animation relative">
          <div className="absolute top-[-100px] bg-combinational left-0 right-0 w-full text-center h-52"></div>
          <div className="pt-10 max-md:pt-1 pb-2 relative max-md:mx-14 max-sm:mx-6">
            <div className=" mb-48 max-md:mb-32 w-[500px] max-md:w-full backdrop-blur-md rounded-lg shadow-glassy m-auto backdrop-brightness-125 gradient-line-bottom absulote">
              <div className="p-8">
                <Image
                  src={"/images/single-book.jpg"}
                  alt="ai book generator"
                  width={200}
                  height={200}
                  className=" max-sm:w-28 rounded-full m-auto animate-pulse"
                />
                <h4 className="text-center text-2xl max-sm:text-lg text-slate-100 pt-4">
                  Select a Genre, describe a bit and give the Title.
                </h4>
              </div>
              <div className="absolute bottom-[-111px] arrow-icon animate-bounce">
                <RxDoubleArrowDown className="text-white text-2xl" />
              </div>
            </div>
            <div className=" mb-48 max-md:mb-32 w-[500px] max-md:w-full backdrop-blur-md rounded-lg shadow-glassy m-auto backdrop-brightness-125 gradient-line-bottom gradient-line-top absulote">
              <div className="p-8">
                <Image
                  src={"/images/multiple-book.jpg"}
                  alt="ai book generator"
                  width={200}
                  height={200}
                  className=" max-sm:w-28 rounded-full m-auto animate-pulse"
                />
                <h4 className="text-center text-2xl max-sm:text-lg text-slate-100 pt-4">
                  Enter the chapters name or let the AI choose the chapters
                  name.
                </h4>
              </div>
              <div className="absolute bottom-[-111px] arrow-icon animate-bounce">
                <RxDoubleArrowDown className="text-white text-2xl" />
              </div>
            </div>
            <div className=" mb-48 max-md:mb-32 w-[500px] max-md:w-full backdrop-blur-md rounded-lg shadow-glassy m-auto backdrop-brightness-125 gradient-line-top gradient-line-bottom absulote">
              <div className="p-8">
                <Image
                  src={"/images/download-button.jpg"}
                  alt="ai book generator"
                  width={200}
                  height={200}
                  className=" max-sm:w-28 rounded-full m-auto rotate-180 animate-pulse"
                />
                <h4 className="text-center text-2xl max-sm:text-lg text-slate-100 pt-4">
                  Hurrah! Here you go. The book is completely ready to download
                  as PDF, DOCX or-
                </h4>
              </div>
              <div className="absolute bottom-[-111px] arrow-icon animate-bounce">
                <RxDoubleArrowDown className="text-white text-2xl" />
              </div>
            </div>
            <div className=" mb-16 w-[500px] max-md:w-full backdrop-blur-md rounded-lg shadow-glassy m-auto backdrop-brightness-125 gradient-line-top absulote">
              <div className="p-8">
                <Image
                  src={"/images/audio-player.jpg"}
                  alt="ai book generator"
                  width={200}
                  height={200}
                  className=" max-sm:w-28 rounded-full m-auto animate-pulse"
                />
                <h4 className="text-center text-2xl max-sm:text-lg text-slate-100 pt-4">
                  You can also convert your book to Audio book and download it.
                </h4>
              </div>
            </div>
          </div>
        </section>
        {/* how to section end  */}

        {/* describe section start  */}
        <section className="relative  bg-gradient-video w-full">
          <div className="absolute top-[-100px] bg-combinational_two left-0 right-0 w-full text-center h-48"></div>
          <div className="flex justify-center items-center mx-7 pt-28 max-md:pt-10 pb-28 max-md:pb-28 max-sm:pb-12">
            <div className=" w-[1000px] max-md:w-[650px] max-sm:w-full rounded-3xl">
              <video
                src="/videos/test.mp4"
                muted
                autoPlay
                loop
                className="w-full h-auto rounded-3xl neon-shadow"
              />
            </div>
          </div>
          <div className="flex justify-center items-center max-w-6xl m-auto px-9 max-md:px-5 pb-28 max-md:pb-20 max-sm:pb-16 max-sm:pt-16 overflow-hidden">
            <div className="w-1/5 text-right max-sm:hidden">
              <Image
                src={"/images/pdf-icon.png"}
                alt={"ai book generator"}
                width={150}
                height={150}
                className="rounded-full float-right animate-ping"
              />
            </div>
            <div className="w-4/5 flex flex-col items-center justify-between gap-7 px-7 max-sm:w-full">
              <Image
                src={"/images/dollar-sign.jpg"}
                alt={"ai book generator"}
                width={150}
                height={150}
                className="rounded-full m-auto animate-spin"
              />
              <article>
                <h4 className="text-xl text-white text-center">
                  {`Make your place in USD 18.10 Billion worldwide online book
                price. And it's increasing in a truly impressive way. Why are
                you waiting for? Make a move by making Ebook and audio book
                using our High Converting AI Book Generator.`}
                </h4>
              </article>
              <div className="block pt-4">
                {/* <Link
                  href="#"
                  className="px-4 py-2 uppercase bg-blue-800 text-xs block rounded-md text-white ring-4 animate-bounce hover:animate-none"
                >
                  try free trial
                </Link> */}
                <div className="px-4 py-2 uppercase animate-bounce hover:animate-none">
                  <ShiningButton
                    link={"/auth/signin"}
                    text={"try free trial"}
                  />
                </div>
              </div>
            </div>
            <div className="w-1/5 max-sm:hidden">
              <Image
                src={"/images/audio-speaker.jpg"}
                alt={"ai book generator"}
                width={150}
                height={150}
                className="rounded-full float-left animate-ping"
              />
            </div>
          </div>
        </section>
        {/* describe section end  */}

        {/* faq section start */}
        <section className="bg-gray-700">
          <div className="bg-faq">
            <div className="py-28 max-md:py-24 max-sm:py-16 pl-20 max-md:pl-12 max-md:px-12 max-sm:px-8">
              <FAQ faqs={faqs} />
            </div>
          </div>
        </section>
        {/* faq section end  */}
      </main>
    </>
  );
};

export default HomePage;
