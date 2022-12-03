import Activity from "../components/Activity";
import BreadCrumbs from "../components/BreadCrumbs";
import Documents from "../components/Documents";
import Header from "../components/Header";
import People from "../components/People";
import Videos from "../components/Videos";

export default function Home() {
  return (
    <div className="flex space-y-14 w-full flex-col bg-[#953e45] px-44 py-10">
      <Header />
      <BreadCrumbs />
      <div className="w-full flex flex-row space-x-4">
        <Videos />
        <Activity />
      </div>
      <div className="w-full flex flex-row space-x-4">
        <People />
        <Activity />
      </div>
      <div className="w-full flex flex-row space-x-4">
        <Documents />
      </div>
    </div>
  );
}
