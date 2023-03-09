import Image from "next/image";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter-logo.png";

export default function Socials() {
  return (
    <div
      id="socials"
      className="flex space-x-20 items-center justify-center p-5 mt-10 bg-gradient-to-tl rounded from-gray-900 to-gray-600"
    >
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
  );
}
