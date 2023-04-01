import EventMarketPlace from "../components/EventMarketPlace";
import Navbar from "../components/Navbar";
import Exchange from "../components/Exchange";

export default function Web3() {
  return (
    <div className="bg-gradient-to-b p-5 min-h-screen items-center flex flex-col via-[#2e383d] from-[#1f1a25] to-[#23162f]">
      <Navbar />
      <h1 className="text-5xl py-10 animate-fadeUp2">Web 3</h1>
      <div className="space-y-10">
        <EventMarketPlace />
        <div>
          <Exchange />
        </div>
      </div>
    </div>
  );
}
