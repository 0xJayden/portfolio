import Image from "next/image";
import { useRouter } from "next/router";
import jdLogo from "../assets/jdLogo.png";
import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export default function Navbar() {
  const router = useRouter();

  return (
    <div
      style={sourceCodePro.style}
      id="home"
      className="w-full px-2 z-10 pt-2 flex items-center justify-between font-normal sm:px-10"
    >
      {/* <div className="flex space-x-2 items-center"> */}
      <Image
        onClick={() => router.push("/")}
        className="max-w-[35px] cursor-pointer animate-fadeRight"
        src={jdLogo}
        alt=""
      />
      <p className="animate-fadeLeft">Jayden Davila</p>
      {/* </div> */}
      {/* <ul className="flex space-x-4 sm:space-x-10">
        <li className="hover:text-[#5adfaa] cursor-pointer transition-all duration-300 ease-in-out">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="hover:text-[#5adfaa] cursor-pointer transition-all duration-300 ease-in-out">
          <a href="#socials">Socials</a>
        </li>
        
      </ul> */}
    </div>
  );
}
