import React from "react";
import { RxSlash } from "react-icons/rx";

const BreadCrumbs = () => {
  const category = [
    "Videos",
    "People",
    "Documents",
    "Events",
    "Communities",
    "Favorites",
    "Channels",
  ];

  return (
    <div className="flex flex-row items-center border-secondary border-2 border-x-0 py-3 space-x-4">
      {category.map((item, index) => {
        return (
          <>
            <p className="text-secondary text-2xl">{item}</p>
            {index != category.length - 1 && (
              <RxSlash color="#f4e3cf" className="h-6 w-6" />
            )}
          </>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
