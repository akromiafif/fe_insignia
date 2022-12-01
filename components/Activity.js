import React from "react";
import { RxSlash } from "react-icons/rx";
import { FiSearch, FiUpload } from "react-icons/fi";
import { BiCommentDetail } from "react-icons/bi";

const Activity = () => {
  const activites = [
    {
      name: "John Stainor",
      title:
        "Elit est aute occaecat aliqua non velit amet fugiat ad aliqua ullamco.",
      time: "2 seconds ago",
      status: "added a new video",
      icon: <FiSearch color="#f4e3cf" />,
    },
    {
      name: "Afif Akromi",
      title: "Elit est aute occaecat aliqua ",
      time: "1 hour ago",
      status: "shared a new document",
      icon: <FiUpload color="#f4e3cf" />,
    },
    {
      name: "Uya Kuya",
      title: "Elit est aute occaecat aliqua non velit amet fugiat ad.",
      time: "25 minutes ago",
      status: "added a new video",
      icon: <BiCommentDetail color="#f4e3cf" />,
    },
    {
      name: "Afif Akromi",
      title: "Elit est aute occaecat aliqua ",
      time: "1 hour ago",
      status: "shared a new document",
      icon: <FiUpload color="#f4e3cf" />,
    },
  ];
  return (
    <div className="w-4/12 flex flex-col space-y-6">
      <div className="flex flex-row justify-between items-end">
        <p className="text-secondary text-3xl">Activity</p>
        <div className="flex flex-row">
          <p className="text-secondary">View timeline</p>
          <RxSlash color="#f4e3cf" className="h-6 w-6" />
          <p className="text-secondary">Filter activites</p>
        </div>
      </div>
      <div className="border-2 border-x-0 border-t-0 bg-secondary"></div>
      <div className="flex flex-col space-y-2 cursor-pointer ">
        {activites.map((item) => {
          return (
            <div className="flex flex-row items-center space-x-4 hover:border-2 hover:border-red-100">
              <div className="bg-secondary w-20 h-full"></div>
              <div className="flex flex-col w-3/4">
                <p>
                  <span className="text-secondary text-lg">{item.name}</span>
                  <span className="text-[#c5817f]"> {item.status}</span>
                </p>
                <p className="text-secondary leading-[18px]">{item.title}</p>
                <div className="flex flex-row space-x-2 items-center">
                  {item.icon}
                  <p className="text-secondary">{item.time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-2 border-x-0 border-t-0 bg-secondary"></div>
    </div>
  );
};

export default Activity;
