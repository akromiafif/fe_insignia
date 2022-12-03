import React from "react";
import { RxSlash } from "react-icons/rx";

const BreadCrumbs = ({ data, type = "header" }) => {
  return (
    <div
      className={`flex flex-row items-center border-secondary ${
        type != "footer" ? "border-2 border-x-0 py-3 space-x-4" : "space-x-2"
      } `}
    >
      {data?.map((item, index) => {
        return (
          <>
            <p
              className={`text-secondary ${
                type != "footer" ? "text-2xl" : "text-md"
              }`}
            >
              {item}
            </p>
            {index != data.length - 1 && (
              <RxSlash
                color="#f4e3cf"
                className={`${type != "footer" ? "w-6 h-6" : "w-4 h-4"}`}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
