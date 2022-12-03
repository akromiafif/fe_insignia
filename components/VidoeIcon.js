import React from "react";
import { BsCloudUpload } from "react-icons/bs";

const VidoeIcon = ({ icon, title, subtitle }) => {
  return (
    <div className="w-full h-[15rem] border-2 border-secondary space-x-4 flex flex-row items-center justify-center p-4">
      {icon}
      <div className="flex flex-col justify-between">
        <p className="text-secondary leading-3 text-md">{title}</p>
        <p className="text-secondary text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default VidoeIcon;
