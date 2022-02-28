import React from "react";
import { BiPlayCircle } from "react-icons/bi";
import mobile from "../assert/img/Mobile.png";

function HeroSection() {
  return (
    <section className="layout ">
      <div className="hero py-8 xl:flex">
        <div className="mb-16 flex-1 xl:mb-0">
          <article className="py-12 text-[#111827] md:py-24 ">
            <h1 className="mb-6 text-4xl font-bold text-[#111827] md:text-6xl">
              The Easiest way to Manage Projects
            </h1>
            <p className="text-xl">
              From the small stuff to the big picture, organizes the work so
              teams know what to do, why it matters, and how to get it done.
            </p>
          </article>
          <div className="flex justify-center gap-2 md:justify-start ">
            <button className=" btn bg-[#7C3AED] text-white">Get Start</button>
            <button className=" btn center gap-1 border-2 border-[#7C3AED] text-[#7C3AED] ">
              <BiPlayCircle className="text-2xl" />
              Watch Video
            </button>
          </div>
          <div className=" angle bg-[#C4B5FD] md:right-0  md:top-96 "></div>
          <div className="angle bg-[#EDE9FE] md:left-96 md:bottom-40 "></div>
        </div>
        <div className="flex flex-1 justify-center ">
          <img src={mobile} alt="" className="h-full" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
