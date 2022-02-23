import React from "react";
import { BiPlayCircle } from "react-icons/bi";
import mobile from "../assert/img/Mobile.png";

function HeroSection() {
  return (
    <section className="layout relative">
      <div className="hero xl:flex py-8">
        <div className="flex-1 mb-16 xl:mb-0">
          <article className="text-[#111827] md:py-24 py-12 ">
            <h1 className="md:text-6xl text-4xl text-[#111827] font-bold mb-6">
              The Easiest way to Manage Projects
            </h1>
            <p className="text-xl">
              From the small stuff to the big picture, organizes the work so
              teams know what to do, why it matters, and how to get it done.
            </p>
          </article>
          <div className="flex gap-2 justify-center md:justify-start ">
            <button className=" btn text-white bg-[#7C3AED]">Get Start</button>
            <button className=" btn center text-[#7C3AED] border-2 border-[#7C3AED] gap-1 ">
              <BiPlayCircle className="text-2xl" />
              Watch Video
            </button>
          </div>
          <div className=" angle md:right-0 md:top-96  bg-[#C4B5FD] "></div>
          <div className="angle md:left-96 md:bottom-40 bg-[#EDE9FE] "></div>
        </div>
        <div className="flex-1 flex justify-center ">
          <img src={mobile} alt="" className="h-full" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
