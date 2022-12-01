import Activity from "../components/Activity";
import BreadCrumbs from "../components/BreadCrumbs";
import Header from "../components/Header";
import Videos from "../components/Videos";

export default function Home() {
  return (
    <div className="flex space-y-14 h-screen w-full flex-col bg-[#953e45] px-44 py-10">
      <Header />
      <BreadCrumbs />
      <div className="w-full flex flex-row">
        <Videos />
        <Activity />
      </div>
    </div>
  );
}
