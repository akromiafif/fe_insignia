import React from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import VideoBig from "./VideoBig";
import VideoHeader from "./VideoHeader";
import VideoSmall from "./VideoSmall";
import VidoeIcon from "./VidoeIcon";

const Type = {
  VIDEO: "vidoe",
  DOCUMENT: "document",
  PEOPLE: "people",
};

const Documents = () => {
  return (
    <div className="w-8/12 flex flex-row space-x-4">
      <div className="flex flex-col w-8/12 space-y-4">
        <VideoHeader type="Document" title="Browse all documents" />
        <VideoBig
          title="Mobile ui & ux guide 2013"
          name="By William Maharaja"
          views="9837"
        />
        <div className="flex flex-row space-x-4">
          <VideoSmall name="Hasheem Ali" views="3451" type={Type.DOCUMENT} />
          <VideoSmall name="Lutfi Wira" views="4567" type={Type.DOCUMENT} />
        </div>
      </div>
      <div className="flex flex-col w-4/12 justify-end space-y-4">
        <VideoSmall name="Afif Akromi" views="7854" type={Type.DOCUMENT} />
        <VideoSmall name="Denny Wiranda" views="9083" type={Type.DOCUMENT} />
        <VidoeIcon
          icon={<BsPlusCircleDotted color="#f4e3cf" className="h-10 w-10" />}
          title="Share"
          subtitle="Your Document"
        />
      </div>
    </div>
  );
};

export default Documents;
