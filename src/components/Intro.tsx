import { Source_Code_Pro, Cinzel, Orbitron } from "next/font/google";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

const cinzel = Cinzel({ subsets: ["latin"] });

const orbitron = Orbitron({ subsets: ["latin"] });

export default function Intro() {
  return (
    <div className=" pt-10 sm:pt-20 flex flex-col w-full">
      <h1
        style={orbitron.style}
        className="text-[65px] animate-fadeDown bg-gradient-to-br from-[#11ccbb] via-[#c0ffd7] to-white text-transparent bg-clip-text sm:text-[100px] drop-shadow mb-20 sm:mb-0 font-semibold"
      >
        Full-Stack <br /> Engineer
      </h1>
      <div className="p-5 max-w-[660px] animate-fadeUp mx-2 sm:h-[200px] backdrop-blur shadow-lg backdrop-brightness-75 rounded border border-[#5adfaa]">
        <div style={sourceCodePro.style} className=" text-lg">
          <h1 className="text-[#5adfaa] mb-2">the gist</h1>
          <p>
            Focused on creating digital experiences that provide as much value
            as possible to everyone involved. <br />
            <br />
            Blockchain & Web3 projects are welcome!
          </p>
        </div>
      </div>
    </div>
  );
}
