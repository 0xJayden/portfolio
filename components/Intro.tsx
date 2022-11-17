import jay from "../public/jay.jpg";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="mt-20 relative bg-transparent">
      <div className="max-w-[600px]">
        <h1 className="text-[60px] mb-20 font-semibold leading-[85px]">
          Full-Stack <br /> <span className="text-[#5adfaa]">Web</span>{" "}
          Developer
        </h1>
        <div className="w-full flex justify-center">
          <div className="bg-gray-800 relative w-11/12 h-[270px] opacity-80 rounded border border-[#5adfaa]">
            <div className="absolute p-5 inset-0 text-lg text-gray-200 shadow-xl">
              <h1 className="text-sm text-[#5adfaa] mb-2">the gist</h1>
              <p>
                Focused on creating digital experiences that provide as much
                value as possible to everyone involved. <br />
                <br />
                Blockchain & Web3 projects are welcome!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[350px] absolute right-0 top-0 -z-10 opacity-60">
        <Image src={jay} />
      </div>
    </div>
  );
}
