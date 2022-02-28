import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import hs from "../assert/img/hubSopt.png";
import ab from "../assert/img/airbnb.png";
import st from "../assert/img/stripi.png";

const ReviewsSection = () => {
  return (
    <section className="min-h-screen bg-[#D5FAFC]">
      <div className="layout gap-4 py-20 lg:flex">
        <div className="mb-4 flex flex-1 flex-col">
          <div className="mb-12 lg:w-96 lg:self-end ">
            <h1 className="h1">Real Stories from Real Customers</h1>
            <p>Get inspired by these stories.</p>
          </div>
          <div className=" self-end rounded-lg bg-white p-6 shadow lg:w-96  ">
            <div className=" mb-4 py-2">
              <img src={hs} alt="" className="h-8 w-28 " />
            </div>
            <blockquote className="flex gap-3 ">
              <span className="text-lg text-[#1DB5BE] ">
                <ImQuotesLeft className=" " />
              </span>
              <p>
                To quickly start my startup landing page design, I was looking
                for a landing page UI Kit. Landify is one of the best landing
                page UI kit I have come across. It’s so flexible, well organised
                and easily editable.
              </p>
            </blockquote>
            <div className="mt-4 flex flex-col pl-8">
              <cite className="font-bold">Floyd Miles</cite>
              <small className="text-slate-600">Vice President, GoPro</small>
            </div>
          </div>
        </div>
        <div className="flex-1 ">
          <div className=" mb-4 rounded-lg bg-white p-6 shadow lg:w-3/4 ">
            <div className=" mb-4 py-2">
              <img src={ab} alt="" className="h-8 w-28 " />
            </div>
            <blockquote className="flex gap-3 ">
              <span className="text-lg text-[#1DB5BE] ">
                <ImQuotesLeft className=" " />
              </span>
              <p>
                I used landify and created a landing page for my startup within
                a week. The Landify UI Kit is simple and highly intuitive, so
                anyone can use it.
              </p>
            </blockquote>
            <div className="mt-4 flex flex-col pl-8">
              <cite className="font-bold">Jane Cooper</cite>
              <small className="text-slate-600">CEO, Airbnb</small>
            </div>
          </div>
          <div className=" rounded-lg bg-white p-6 shadow lg:w-80 ">
            <div className=" mb-4 py-2">
              <img src={st} alt="" className="h-8 w-28 " />
            </div>
            <blockquote className="flex gap-3 ">
              <span className="text-lg text-[#1DB5BE] ">
                <ImQuotesLeft className=" " />
              </span>
              <p>
                To quickly start my startup landing page design, I was looking
                for a landing page UI Kit. Landify is one of the best landing
                page UI kit I have come across. It’s so flexible, well organised
                and easily editable.
              </p>
            </blockquote>
            <div className="mt-4 flex flex-col pl-8">
              <cite className="font-bold">Kristin Watson</cite>
              <small className="text-slate-600">Co-Founder, Strapi</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
