import React from "react";
import { Card } from "./Card";
import ibc from "../assert/img/ibc.png";
import ifx from "../assert/img/ifx.png";
import iml from "../assert/img/iml.png";
import irw from "../assert/img/irw.png";
import iuf from "../assert/img/iuf.png";
import iwo from "../assert/img/iwo.png";

const FeatureSection = () => {
  return (
    <section className="py-16">
      <article className="layout">
        <div className=" text-center">
          <h1 className="h1">Tailor-made Features</h1>
          <p className=" mx-auto max-w-screen-md">
            Lorem ipsum is common placeholder text used to demonstrate the
            graphic elements of a document or visual presentation.
          </p>
        </div>
        <div className="custom-grid mt-12 gap-4 md:gap-10">
          <Card heading="Robust Workflow" img={irw} />
          <Card heading="Flexibility" img={ifx} />
          <Card heading="User Friendly" img={iuf} />
          <Card heading="Multiple Layouts" img={iml} />
          <Card heading="Better Components" img={ibc} />
          <Card heading="Well Organised" img={iwo} />
        </div>
      </article>
    </section>
  );
};

export default FeatureSection;
