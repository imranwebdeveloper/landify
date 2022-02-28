import React from "react";
import ibc from "../assert/img/ibc.png";
import ifx from "../assert/img/ifx.png";
import iml from "../assert/img/iml.png";
import irw from "../assert/img/irw.png";

const AchievmentSection = () => {
  return (
    <section className="">
      <div className="layout">
        <div className="lg:center py-16 ">
          <div className="flex-1">
            <h1 className="h1 lg:w-80">Our 18 years of achievements</h1>
            <p>With our super powers we have reached this</p>
          </div>
          <div className="flex-1 md:grid md:grid-cols-2 md:grid-rows-2 ">
            <article className=" flex items-center gap-3  py-4">
              <div className="h-8 w-8">
                <img src={ibc} alt="" />
              </div>
              <div>
                <h2 className="text-xl font-bold ">10,000+</h2>
                <p>Downloads per day</p>
              </div>
            </article>
            <article className=" flex items-center gap-3  py-4">
              <div className="h-8 w-8">
                <img src={ifx} alt="" />
              </div>
              <div>
                <h2 className="text-xl font-bold ">2 Million</h2>
                <p>Users</p>
              </div>
            </article>
            <article className=" flex items-center gap-3  py-4">
              <div className="h-8 w-8">
                <img src={iml} alt="" />
              </div>
              <div>
                <h2 className="text-xl font-bold ">5000+</h2>
                <p>clients</p>
              </div>
            </article>
            <article className=" flex items-center gap-3  py-4">
              <div className="h-8 w-8">
                <img src={irw} alt="" />
              </div>
              <div>
                <h2 className="text-xl font-bold ">10,000+</h2>
                <p>Downloads per day</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievmentSection;
