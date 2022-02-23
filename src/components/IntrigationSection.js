import React from "react";
import intri from "../assert/img/intrigation.png";

export const IntrigationSection = () => {
  return (
    <section className="py-10">
      <div className="layout md:flex md:center">
        <div className="flex-1">
          <h1 className="h1 md:w-80">Easy integrations with 170+ Tools</h1>
          <p className="md:w-80">
            Connect Landify with your favourite tools that you use daily and
            keep things on track.
          </p>
        </div>
        <div className="flex-1 mt-10 md:mt-0 ">
          <img src={intri} alt="" className="" />
        </div>
      </div>
    </section>
  );
};
