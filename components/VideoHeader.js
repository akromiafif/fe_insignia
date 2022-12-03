import React from "react";

const VideoHeader = ({ type, title }) => {
  return (
    <div className="flex flex-row items-end justify-between">
      <p className="text-secondary text-3xl font-bold">{type}</p>
      <p className="text-secondary">{title}</p>
    </div>
  );
};

export default VideoHeader;
