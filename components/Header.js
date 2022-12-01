import React from "react";
import { FiSearch, FiUpload } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex w-full flex-row items-center justify-between">
      <p className="text-5xl  text-secondary">
        Social<span className="text-[#c5817f]">Network</span>
      </p>

      <div className="flex flex-row justify-between space-x-5">
        <div className="relative">
          <input
            className="bg-secondary text-primary placeholder:text-primary w-[500px] h-[40px] px-5 border-none"
            placeholder="Find..."
          />
          <FiSearch
            className="absolute right-3 top-[10px] w-5 h-5"
            color="#953e45"
          />
        </div>
        <div className="bg-secondary space-x-2 h-[40px] flex flex-row items-center px-5 py-2">
          <FiUpload color="#953e45" />
          <p className="text-primary ">Upload</p>
        </div>
        <div className="flex flex-row space-x-2 relative">
          <div className="bg-secondary h-[40px] px-5 py-2 flex items-center">
            <BsFillPersonFill color="#953e45" />
          </div>
          <p className="text-secondary leading-[6px]">
            <span className="font-bold text-xl block">Waseem</span>
            <span>Arshad</span>
          </p>
          <div className="absolute flex flex-row items-center -right-8 -top-1 rounded-full p-1 bg-secondary">
            <AiOutlinePlus color="#953e45" className="w-3 h-3" />
            <p className="text-primary text-xs">3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
