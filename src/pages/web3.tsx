import EventMarketPlace from "../components/EventMarketPlace";
import Navbar from "../components/Navbar";
import Exchange from "../components/Exchange";
import { Source_Code_Pro, Orbitron } from "next/font/google";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

const orbitron = Orbitron({ subsets: ["latin"] });

export default function Web3() {
  return (
    <div
      style={sourceCodePro.style}
      className="bg-gradient-to-b p-5 min-h-screen items-center flex flex-col via-[#2e383d] from-[#1f1a25] to-[#23162f]"
    >
      <Navbar />
      <h1 style={orbitron.style} className="text-5xl py-10 animate-fadeUp2">
        Web 3
      </h1>
      <div className="space-y-5">
        <EventMarketPlace />
        <div>
          <Exchange />
        </div>
      </div>
    </div>
  );
}
