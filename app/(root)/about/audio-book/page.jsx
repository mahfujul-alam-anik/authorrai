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
          title={"authorrai audiobook"}
          subTitle={
            "Soar Above the Contenders with our Pro Audio Enhancements for Your Audiobooks!"
          }
          button={true}
        />
        <section className="flex justify-center max-sm:flex-col  max-w-7xl gap-10 max-md:gap6 px-32 max-md:px-16 max-sm:px-8 pb-32 max-md:pb-16">
          <div className="about-box-shadow sm:w-6/12 rounded-md p-7 tracking-wider leading-7">
            <TextWriter
              text={
                "At Authorr ai, we understand that standing out from the competition is crucial for every author. That's why we offer a premium service to our esteemed authors who aim to captivate their listeners and create a truly immersive experience. Our highly trained pro audio engineers are prepared to take your already great audiobook and make it magnificent. Elevate Your Audiobook with Sound Effects give your listeners a Realistic Experiences!"
              }
            />
          </div>
          <div className="about-box-shadow sm:w-6/12 rounded-md p-7 tracking-wider leading-7">
            <TextWriter
              text={
                "Our dedicated team of pro audio engineers will skillfully insert sound effects to pertinent scenes, elevating your audiobook to new heights. By creating a realistic experience through the artful use of sound effects, we keep your listeners engaged and craving more. Imagine the impact of a thunderous storm or the suspenseful creaking of a door - these details add depth to your story, making it truly unforgettable."
              }
            />
          </div>
        </section>
        <section className="flex max-md:flex-col justify-between mt-8">
          <div className="max-sm:w-full w-6/12">
            <Image
              src={"/images/audience-listening.jpg"}
              alt="audience listening authorrai audio book"
              width={1000}
              height={1000}
            />
          </div>
          <div className="p-10 max-sm:w-full w-6/12 flex-center">
            <div className="">
              <h2 className="text-slate-200 text-left font-semibold text-2xl">
                Capture Your Audience&apos;s Attention from the Very Start!
              </h2>
              <p className="text-slate-300 pt-5 tracking-wider leading-7">
                At Authorr ai, we understand the importance of making a strong
                first impression. That&apos;s why our pro audio engineers will
                add captivating music as an intro to immediately capture your
                audience&apos;s attention. This carefully selected music sets
                the tone for your story and establishes an emotional connection
                with your listeners right from the first moments.
              </p>
            </div>
          </div>
        </section>
        <section className="flex max-md:flex-col-reverse justify-between">
          <div className="p-10 max-sm:w-full w-6/12 flex-center">
            <div className="">
              <h2 className="text-slate-200 text-left font-semibold text-2xl">
                End Your Story with the Perfect Tone!
              </h2>
              <p className="text-slate-300 pt-5 tracking-wider leading-7">
                Just as the beginning is crucial, so is the ending of your
                story. Our pro audio engineers will add an outro music piece,
                carefully chosen to end your audiobook with the perfect tone and
                leave a lasting impact on your listeners. This final touch
                ensures that your story stays with them, resonating long after
                they&apos;ve finished listening.
              </p>
            </div>
          </div>
          <div className="max-sm:w-full w-6/12">
            <Image
              src={"/images/vinyl-player-vinyl-record.jpg"}
              alt="audio book at authorrai"
              width={1000}
              height={1000}
            />
          </div>
        </section>
        <section className="flex max-md:flex-col justify-between">
          <div className="max-sm:w-full w-6/12">
            <Image
              src={"/images/audio-book.jpg"}
              alt="audio book at authorrai"
              width={1000}
              height={1000}
            />
          </div>
          <div className="p-10 max-sm:w-full w-6/12 flex-center">
            <div className="">
              <h2 className="text-slate-200 text-left font-semibold text-2xl">
                Don&apos;t Just Take Our Word for It - Listen to Our Examples!
              </h2>
              <p className="text-slate-300 pt-5 tracking-wider leading-7">
                We invite you to check out some of our showcased examples to
                witness the endless possibilities of what your audiobooks can
                achieve. Immerse yourself in the dynamic world we can create for
                your stories and envision the exceptional experience you can
                offer to your listeners.
              </p>
            </div>
          </div>
        </section>
        <section className="flex-center pb-28 pt-16 gap-8 px-6 max-md:pt-10">
          <p className="text-slate-100">Ready to Soar Above the Contenders?</p>
          <Button link="/auth/signin" text={"Start Now"} color="#0c0830" />
        </section>
      </article>
    </main>
  );
};

export default page;
