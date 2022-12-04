import Image from "next/image";
import github from "../public/github.png";
import linkedin from "../public/linkedin.png";
import twitter from "../public/twitter-logo.png";

export default function Socials() {
  return (
    <div
      id="socials"
      className="flex space-x-20 items-center justify-center p-5 mt-5 bg-gradient-to-tl rounded from-gray-900 to-gray-600"
    >
      <a href="https://github.com/0xJayden">
        <Image height={"50px"} width={"50px"} src={github} />
      </a>
      <a href="https://www.linkedin.com/in/jayden-davila-764b41205/">
        <Image height={"50px"} width={"90px"} src={linkedin} />
      </a>
      <a href="https://twitter.com/0xjayden">
        <Image height={"50px"} width={"50px"} src={twitter} />
      </a>
    </div>
  );
}
