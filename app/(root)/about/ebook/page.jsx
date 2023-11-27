import React from "react";
import Button from "@/components/ShiningButton";
import TextWriter from "@/components/TextWriter";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

const page = () => {
  return (
    <main className=" bg-slate-950 w-full">
      <article>
        <PageHeader
          title={"authorrai ebook"}
          subTitle={
            "Your One-Stop Destination for Becoming the Author You've Always Dreamed to Be!"
          }
          button={true}
        />
        <section className="flex justify-center max-sm:flex-col  max-w-7xl gap-10 max-md:gap6 px-32 max-md:px-16 max-sm:px-8 pb-32 max-md:pb-16">
          <div className="about-box-shadow sm:w-6/12 rounded-md p-7 tracking-wider leading-7">
            <TextWriter
              text={
                "At AuthorrAi, we understand the journey of becoming a successful author can be challenging. That's why we're here to provide you with an innovative solution. Our AI content generator is designed to assist aspiring authors like you in bringing your creative ideas to life across various genres, from thrilling science fiction best-selling novels to heartwarming romance and captivating children's books."
              }
            />
          </div>
          <div className="about-box-shadow sm:w-6/12 rounded-md p-7 tracking-wider leading-7">
            <TextWriter
              text={
                "Unlike other platforms, Authorr Ai goes beyond just content generation. We offer two comprehensive plans tailored to meet your needs: Standard and Pro. Our Standard Plan lets you take your eBook to new heights by allowing you to effortlessly convert it into multiple languages. Expand your reach and connect with a global audience like never before"
              }
            />
          </div>
        </section>
        <section className="flex max-md:flex-col justify-between mt-8">
          <div className="max-sm:w-full w-6/12">
            <Image
              src={"/images/ebook-image.jpg"}
              alt="ebook book at authorrai"
              width={1000}
              height={1000}
            />
          </div>
          <div className="p-10 max-sm:w-full w-6/12 flex-center">
            <div className="">
              <h2 className="text-slate-200 text-left font-semibold text-2xl">
                Unlock the Power of Audiobooks with AuthorrAi&apos;s Pro Plan!
              </h2>
              <p className="text-slate-300 pt-5 tracking-wider leading-7">
                With our Pro Plan, we take your completed eBooks and transform
                them into mesmerizing audiobooks. This exciting feature
                eliminates the need for expensive voiceover actors or costly
                recording studio time for mixing and mastering the final
                product. By making your eBook an audiobook, you can enhance your
                reader&apos;s experience and create an additional stream of
                income.
              </p>
            </div>
          </div>
        </section>
        <section className="flex  max-md: max-md:flex-col-reverse justify-between">
          <div className="p-10 max-sm:w-full w-6/12 flex-center">
            <div className="">
              <h2 className="text-slate-200 text-left font-semibold text-2xl">
                Save Time and Tons of Money with Authorr Ai!{" "}
              </h2>
              <p className="text-slate-300 pt-5 tracking-wider leading-7">
                We understand the value of your time and resources. Our
                pre-prompt AI assists you throughout the writing process,
                allowing for a smoother and more efficient experience. Writing
                across various genres becomes a breeze. And with the added
                benefits of our Standard Plan, enabling multi-language
                conversions, and our Pro Plan&apos;s audiobook capabilities,
                your stories will come to life in more ways than one.
              </p>
            </div>
          </div>
          <div className="max-sm:w-full w-6/12">
            <Image
              src={"/images/save-money.jpg"}
              alt="online book generator"
              width={1000}
              height={1000}
            />
          </div>
        </section>
        <section className="flex-center pb-28 pt-16 gap-8 px-6 max-md:pt-10">
          <p className="text-slate-100">
            Now it&apos;s Your Turn to Fulfill Your Authorial Dreams!
          </p>
          <Button link="/auth/signin" text={"Get Started"} color="#0c0830" />
        </section>
      </article>
    </main>
  );
};

export default page;
