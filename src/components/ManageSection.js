import React from "react";
import img1 from "../assert/img/AppleStore.png";
import img2 from "../assert/img/StoreApple.png";
import phone1 from "../assert/img/Phone1.png";
import phone2 from "../assert/img/Phone2.png";

const ManageSection = () => {
  return (
    <section className="bg-[#1DB5BE]">
      <div className="layout ">
        <div className="lg:flex">
          <div className="flex-1 py-12 lg:py-28  ">
            <h1 className="h1">Manage all projects from your mobile</h1>
            <p>
              Download the app to manage your projects, keep track of the
              progress and complete tasks without procastinating. Stay on track
              and complete on time!
            </p>
            <div className="mt-12">
              <p className="mb-2">Get the App</p>
              <div className="flex gap-2">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
          <div className="flex-1 md:flex justify-center  ">
            <img src={phone1} alt="" className="md:h-96 mx-auto" />
            <img src={phone2} alt="" className="md:h-96 self-end mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageSection;
