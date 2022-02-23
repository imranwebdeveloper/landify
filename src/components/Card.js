import React from "react";
export const Card = ({ heading, img }) => {
  return (
    <article className="p-4 text-center ">
      <img src={img} alt="" className="w-8 mx-auto py-2" />
      <h2 className="text-xl font-bold py-2">{heading}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
        tristique ipsum.
      </p>
    </article>
  );
};
