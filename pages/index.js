import Activity from "../components/Activity";
import BreadCrumbs from "../components/BreadCrumbs";
import Channel from "../components/Channel";
import Documents from "../components/Documents";
import Footer from "../components/Footer";
import Header from "../components/Header";
import People from "../components/People";
import Videos from "../components/Videos";

import React from "react";

const Home = () => {
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
    <div className="flex space-y-14 w-full flex-col bg-[#953e45] px-44 py-10">
      <Header />
      <BreadCrumbs data={category} />
      <div className="w-full flex flex-row space-x-4">
        <Videos />
        <Activity />
      </div>
      <div className="w-full flex flex-row space-x-4">
        <People />
        <Channel />
      </div>
      <div className="w-full flex flex-row space-x-4">
        <Documents />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
