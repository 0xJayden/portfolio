import Image from "next/image";
import { useRouter } from "next/router";
import jd2 from "../assets/jd_2.png";

export default function Navbar() {
  const router = useRouter();

  return (
    <div
      id="home"
      className="w-full px-2 z-10 pt-2 flex items-center justify-between font-normal sm:px-10"
    >
      {/* <div className="flex space-x-2 items-center"> */}
      <Image
        onClick={() => router.push("/")}
        className="max-w-[30px] cursor-pointer animate-fadeRight"
        src={jd2}
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
