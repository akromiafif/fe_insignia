import BreadCrumbs from "../components/BreadCrumbs";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex space-y-14 h-screen w-full flex-col bg-[#953e45] px-44 py-10">
      <Header />
      <BreadCrumbs />
    </div>
  );
}
