import React from "react";

const Type = {
  VIDEO: "vidoe",
  DOCUMENT: "document",
  PEOPLE: "people",
};

const VideoSmall = ({ name, views, type }) => {
  return (
    <div
      className={`w-full h-[15rem] bg-secondary flex flex-col p-4 justify-end`}
    >
      <div
        className={`flex ${
          type === Type.DOCUMENT ? "flex-col" : "flex-row items-center"
        } justify-between`}
      >
        <p className="text-primary leading-3">{name}</p>
        {type != Type.PEOPLE && <p className="text-primary">{views} Views</p>}
      </div>
    </div>
  );
};

export default VideoSmall;
