import Navbar from "../components/Navbar";
import Chat from "../components/Chat";
import XpandSite from "../components/XpandSite";
import { Source_Code_Pro, Orbitron } from "next/font/google";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

const orbitron = Orbitron({ subsets: ["latin"] });

export default function Websites() {
  return (
    <div
      style={sourceCodePro.style}
      className="bg-gradient-to-b p-5 min-h-screen items-center flex flex-col via-[#2e383d] from-[#1f1a25] to-[#23162f]"
    >
      <Navbar />
      <h1
        style={orbitron.style}
        className="text-5xl py-10 text-center animate-fadeUp2"
      >
        Websites & Webapps
      </h1>
      <div className="space-y-10">
        <XpandSite />
        <Chat />
      </div>
    </div>
  );
}
