import React from "react";
import ab from "../assert/img/airbnb.png";
import hs from "../assert/img/hubSopt.png";
import gl from "../assert/img/google.png";
import fe from "../assert/img/fe.png";
import ms from "../assert/img/ms.png";
import wm from "../assert/img/wm.png";

const ClientSection = () => {
  return (
    <section className="mt-12 border ">
      <div className="layout  py-4">
        <div className="flex flex-wrap justify-center gap-4 p-6">
          <div className="px-6 py-2">
            <img src={ab} alt="Airbnb" className="h-7 w-20" />
          </div>
          <div className="px-6 py-2">
            <img src={hs} alt="HubSpot" className="h-7 w-20" />
          </div>
          <div className="px-6 py-2">
            <img src={gl} alt="Google" className="h-7 w-20" />
          </div>
          <div className=" px-6 py-2">
            <img src={ms} alt="Microsoft" className="h-7 w-20" />
          </div>
          <div className=" px-6 py-2">
            <img src={wm} alt="Airbnb" className="h-7 w-20" />
          </div>
          <div className=" px-6 py-2">
            <img src={fe} alt="Airbnb" className="h-7 w-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
