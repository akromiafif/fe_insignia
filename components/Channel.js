import React, { useState } from "react";
import { RxSlash } from "react-icons/rx";
import { FiSearch, FiUpload } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { BiCommentDetail } from "react-icons/bi";

const Channel = () => {
  const [isHover, setIsHover] = useState(false);
  const [selected, setSelected] = useState(-1);

  const channels = [
    "Google",
    "Dribble",
    "Microsoft",
    "Behance",
    "Weather Channel",
    "Gurus",
    "iMedia",
    "Creativeye",
    "Khan Studios",
    "Yahoo",
  ];
  return (
    <div className="w-4/12 flex flex-col space-y-4">
      <div className="flex flex-row justify-between items-end">
        <p className="text-secondary text-3xl">Channels</p>
        <p className="text-secondary">Browse all channels</p>
      </div>
      <div className="border-2 border-x-0 border-t-0 bg-secondary"></div>
      <div className="grid grid-cols-2 gap-4">
        {channels.map((item, index) => {
          return (
            <div
              className="h-44 w-full border-2 border-secondary bg-secondary p-4 flex justify-end flex-col relative cursor-pointer"
              onMouseOver={() => {
                setIsHover(true);
                setSelected(index);
              }}
              onMouseLeave={() => setIsHover(false)}
            >
              {isHover && index == selected && (
                <div
                  style={{ "clip-path": "polygon(0 0, 100% 100%, 100% 0)" }}
                  className="absolute right-0 top-0 h-8 w-8 bg-primary z-10"
                >
                  <IoMdClose
                    color="#f4e3cf"
                    className="right-0 top-[3px] absolute"
                  />
                </div>
              )}
              <p className="text-primary text-lg">{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Channel;
