import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import hs from "../assert/img/hubSopt.png";
import ab from "../assert/img/airbnb.png";
import st from "../assert/img/stripi.png";

const ReviewsSection = () => {
  return (
    <section className="min-h-screen bg-[#D5FAFC]">
      <div className="layout py-20 lg:flex gap-4">
        <div className="flex-1 flex flex-col mb-4">
          <div className="mb-12 lg:w-96 lg:self-end ">
            <h1 className="h1">Real Stories from Real Customers</h1>
            <p>Get inspired by these stories.</p>
          </div>
          <div className=" lg:w-96 p-6 bg-white shadow rounded-lg self-end  ">
            <div className=" py-2 mb-4">
              <img src={hs} alt="" className="w-28 h-8 " />
            </div>
            <blockquote className="flex gap-3 ">
              <span className="text-[#1DB5BE] text-lg ">
                <ImQuotesLeft className=" " />
              </span>
              <p>
                To quickly start my startup landing page design, I was looking
                for a landing page UI Kit. Landify is one of the best landing
                page UI kit I have come across. It’s so flexible, well organised
                and easily editable.
              </p>
            </blockquote>
            <div className="flex flex-col pl-8 mt-4">
              <cite className="font-bold">Floyd Miles</cite>
              <small className="text-slate-600">Vice President, GoPro</small>
            </div>
          </div>
        </div>
        <div className="flex-1 ">
          <div className=" lg:w-3/4 p-6 bg-white shadow rounded-lg mb-4 ">
            <div className=" py-2 mb-4">
              <img src={ab} alt="" className="w-28 h-8 " />
            </div>
            <blockquote className="flex gap-3 ">
              <span className="text-[#1DB5BE] text-lg ">
                <ImQuotesLeft className=" " />
              </span>
              <p>
                I used landify and created a landing page for my startup within
                a week. The Landify UI Kit is simple and highly intuitive, so
                anyone can use it.
              </p>
            </blockquote>
            <div className="flex flex-col pl-8 mt-4">
              <cite className="font-bold">Jane Cooper</cite>
              <small className="text-slate-600">CEO, Airbnb</small>
            </div>
          </div>
          <div className=" lg:w-80 p-6 bg-white shadow rounded-lg ">
            <div className=" py-2 mb-4">
              <img src={st} alt="" className="w-28 h-8 " />
            </div>
            <blockquote className="flex gap-3 ">
              <span className="text-[#1DB5BE] text-lg ">
                <ImQuotesLeft className=" " />
              </span>
              <p>
                To quickly start my startup landing page design, I was looking
                for a landing page UI Kit. Landify is one of the best landing
                page UI kit I have come across. It’s so flexible, well organised
                and easily editable.
              </p>
            </blockquote>
            <div className="flex flex-col pl-8 mt-4">
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
