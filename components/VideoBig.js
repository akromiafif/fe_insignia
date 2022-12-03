import React from "react";

const VideoBig = ({ title, name, views }) => {
  return (
    <div className="w-full h-[31rem] bg-secondary flex flex-col  px-4 py-4 justify-end">
      <p className="text-primary text-2xl font-bold">{title}</p>
      <div className="flex flex-row justify-between">
        <p className="text-primary text-lg leading-3">{name}</p>
        <p className="text-primary text-lg leading-3">{views} Views</p>
      </div>
    </div>
  );
};

export default VideoBig;
