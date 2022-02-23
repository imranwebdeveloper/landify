import React from "react";
import ab from "../assert/img/airbnb.png";
import hs from "../assert/img/hubSopt.png";
import gl from "../assert/img/google.png";
import fe from "../assert/img/fe.png";
import ms from "../assert/img/ms.png";
import wm from "../assert/img/wm.png";

const ClientSection = () => {
  return (
    <section className="border mt-12 ">
      <div className="layout  py-4">
        <div className="p-6 flex flex-wrap justify-center gap-4">
          <div className="px-6 py-2">
            <img src={ab} alt="Airbnb" className="w-20 h-7" />
          </div>
          <div className="px-6 py-2">
            <img src={hs} alt="HubSpot" className="w-20 h-7" />
          </div>
          <div className="px-6 py-2">
            <img src={gl} alt="Google" className="w-20 h-7" />
          </div>
          <div className=" px-6 py-2">
            <img src={ms} alt="Microsoft" className="w-20 h-7" />
          </div>
          <div className=" px-6 py-2">
            <img src={wm} alt="Airbnb" className="w-20 h-7" />
          </div>
          <div className=" px-6 py-2">
            <img src={fe} alt="Airbnb" className="w-20 h-7" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
