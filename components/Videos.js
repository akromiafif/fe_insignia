import React from "react";
import { BsCloudUpload } from "react-icons/bs";
import VideoBig from "./VideoBig";
import VideoHeader from "./VideoHeader";
import VideoSmall from "./VideoSmall";
import VidoeIcon from "./VidoeIcon";

const Type = {
  VIDEO: "vidoe",
  DOCUMENT: "document",
  PEOPLE: "people",
};

const Videos = () => {
  return (
    <div className="w-8/12 flex flex-row space-x-4">
      <div className="flex flex-col w-8/12 space-y-4">
        <VideoHeader type="Videos" title="Browse all videos" />
        <VideoBig
          title="How to improve your skills"
          name="John Stainor"
          views="8736"
        />
        <div className="flex flex-row space-x-4">
          <VideoSmall name="Hasheem Ali" views="3451" type={Type.VIDEO} />
          <VideoSmall name="Lutfi Wira" views="4567" type={Type.VIDEO} />
        </div>
      </div>
      <div className="flex flex-col w-4/12 justify-end space-y-4">
        <VideoSmall name="Afif Akromi" views="7854" type={Type.VIDEO} />
        <VideoSmall name="Denny Wiranda" views="9083" type={Type.VIDEO} />
        <VidoeIcon
          icon={<BsCloudUpload color="#f4e3cf" className="h-10 w-10" />}
          title="Upload"
          subtitle="Your Own Video"
        />
      </div>
    </div>
  );
};

export default Videos;
