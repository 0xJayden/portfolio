import Navbar from "../components/Navbar";
import Chat from "../components/Chat";
import XpandSite from "../components/XpandSite";

export default function Websites() {
  return (
    <div className="bg-gradient-to-b p-5 min-h-screen items-center flex flex-col via-[#2e383d] from-[#1f1a25] to-[#23162f]">
      <Navbar />
      <h1 className="text-5xl py-10 text-center">Websites & Webapps</h1>
      <div className="space-y-10">
        <XpandSite />
        <Chat />
      </div>
    </div>
  );
}
