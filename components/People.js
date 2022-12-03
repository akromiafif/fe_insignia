import React from "react";
import { TbCircleDot } from "react-icons/tb";
import VideoBig from "./VideoBig";
import VideoHeader from "./VideoHeader";
import VideoSmall from "./VideoSmall";
import VidoeIcon from "./VidoeIcon";

const Type = {
  VIDEO: "vidoe",
  DOCUMENT: "document",
  PEOPLE: "people",
};

const People = () => {
  return (
    <div className="w-8/12 flex flex-row space-x-4 ">
      <div className="flex flex-col w-8/12 space-y-4">
        <VideoHeader type="People" title="View all" />
        <VideoBig
          title="Waseem Arshad"
          name="User Interface Designer"
          views="2354"
        />
        <div className="flex flex-row space-x-4">
          <VideoSmall name="Hasheem Ali" views="3451" type={Type.PEOPLE} />
          <VideoSmall name="Lutfi Wira" views="4567" type={Type.PEOPLE} />
        </div>
      </div>
      <div className="flex flex-col w-4/12 justify-end space-y-4">
        <VideoSmall name="Afif Akromi" views="7854" type={Type.PEOPLE} />
        <VideoSmall name="Denny Wiranda" views="9083" type={Type.PEOPLE} />
        <VidoeIcon
          icon={<TbCircleDot color="#f4e3cf" className="h-10 w-10" />}
          title="Show"
          subtitle="Your Work"
        />
      </div>
    </div>
  );
};

export default People;
