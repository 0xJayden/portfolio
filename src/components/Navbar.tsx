import Image from "next/image";
import jd2 from "../assets/jd_2.png";

export default function Navbar() {
  return (
    <div
      id="home"
      className="w-full px-2 z-10 pt-2 flex items-center justify-between font-normal sm:px-10"
    >
      {/* <div className="flex space-x-2 items-center"> */}
      <Image className="max-w-[30px]" src={jd2} alt="" />
      {/* <p>Jayden Davila</p> */}
      {/* </div> */}
      <ul className="flex space-x-4 sm:space-x-10">
        <li className="hover:text-[#5adfaa] cursor-pointer transition-all duration-300 ease-in-out">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="hover:text-[#5adfaa] cursor-pointer transition-all duration-300 ease-in-out">
          <a href="#socials">Socials</a>
        </li>
        {/* <li className="hover:text-[#5adfaa] cursor-pointer transition-all duration-300 ease-in-out">
          Bio
        </li> */}
      </ul>
    </div>
  );
}
