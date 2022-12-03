import React from "react";

const Videos = () => {
  return (
    <div className="w-8/12 flex flex-row space-x-4">
      <div className="flex flex-col w-8/12 space-y-2 space-y-4">
        <div className="flex flex-row items-end justify-between">
          <p className="text-secondary text-3xl font-bold">Videos</p>
          <p className="text-secondary">Browse all videos</p>
        </div>
        <div className="w-full h-80 bg-secondary flex flex-col  px-4 py-4 justify-end">
          <p className="text-primary text-xl font-bold">
            How to improve your skills
          </p>
          <div className="flex flex-row justify-between">
            <p className="text-primary text-lg leading-3">John Stainor</p>
            <p className="text-primary text-lg leading-3">5435765 Views</p>
          </div>
        </div>
        <div className="flex flex-row space-x-4">
          <div className="w-1/2 h-60 bg-secondary flex flex-col px-4 py-4 justify-end">
            <div className="flex flex-row justify-between">
              <p className="text-primary leading-3">Hasheem Ali</p>
              <p className="text-primary leading-3">3451 Views</p>
            </div>
          </div>
          <div className="w-1/2 h-60 bg-secondary flex flex-col px-4 py-4 justify-end">
            <div className="flex flex-row justify-between">
              <p className="text-primary leading-3">Lutfi Wira</p>
              <p className="text-primary leading-3">4567 Views</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-secondary w-4/12"></div>
    </div>
  );
};

export default Videos;
