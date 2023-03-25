import Image from "next/image";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter-logo.png";

export default function Socials() {
  return (
    <div
      id="socials"
      className="flex relative border-[#5adfaa] items-center border justify-center p-5 mt-10 rounded-lg"
    >
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-black -z-10 opacity-25 rounded-lg"></div>
      <div className="justify-between w-full md:px-[150px] flex">
        <a href="https://github.com/0xJayden">
          <Image className="max-w-[50px]" alt="" src={github} />
        </a>
        <a href="https://www.linkedin.com/in/jayden-davila-764b41205/">
          <Image className="max-w-[90px]" alt="" src={linkedin} />
        </a>
        <a href="https://twitter.com/0xjayden">
          <Image className="max-w-[50px]" alt="" src={twitter} />
        </a>
      </div>
    </div>
  );
}
