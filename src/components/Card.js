import React from "react";
export const Card = ({ heading, img }) => {
  return (
    <article className="p-4 text-center ">
      <img src={img} alt="" className="mx-auto w-8 py-2" />
      <h2 className="py-2 text-xl font-bold">{heading}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
        tristique ipsum.
      </p>
    </article>
  );
};
