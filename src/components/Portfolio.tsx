import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import blockchain from "../assets/blockchain.png";
import app from "../assets/app.png";
import web from "../assets/web.png";
import { useRouter } from "next/router";
import { Source_Code_Pro, Orbitron } from "next/font/google";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

const orbitron = Orbitron({ subsets: ["latin"] });

type SectionProps = {
  heading: string;
  subHeading: string;
  src: StaticImageData;
  page: string;
};

const Section = ({ heading, subHeading, src, page }: SectionProps) => {
  const router = useRouter();

  return (
    <div
      className={`rounded-lg relative opacity-0 w-full space-y-5 z-10 flex flex-col items-center justify-between p-5 border border-[#a35adf] show-on-scroll ${
        page === "/web3" && "web3"
      } ${page === "/apps" && "apps"} ${page === "/websites" && "websites"}`}
    >
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-black -z-10 opacity-25 rounded-lg"></div>
      <Image className="max-w-[300px] max-h-[200px] w-auto" src={src} alt="" />
      <div style={sourceCodePro.style} className="space-y-3 text-center">
        <h1 style={orbitron.style} className="text-4xl">
          {heading}
        </h1>
        <p className="text-[#c6c6c6]">{subHeading}</p>
        <button
          onClick={() => router.push(page)}
          className="rounded-lg border p-2 border-[#5adfaa]"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default function Portfolio() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains("web3") &&
          !entry.target.classList.contains("apps") &&
          !entry.target.classList.contains("websites")
        ) {
          entry.target.classList.add("show");
        } else if (
          entry.isIntersecting &&
          entry.target.classList.contains("web3")
        ) {
          entry.target.classList.add("animate-fadeUp2", "opacity-100");
        } else if (
          entry.isIntersecting &&
          entry.target.classList.contains("apps")
        ) {
          entry.target.classList.add("animate-fadeUp3", "opacity-100");
        } else if (
          entry.isIntersecting &&
          entry.target.classList.contains("websites")
        ) {
          entry.target.classList.add("animate-fadeUp4", "opacity-100");
        }
      });
    });

    const elements = document.querySelectorAll(".show-on-scroll");
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div
      id="portfolio"
      className="flex flex-col mt-[100px] sm:mt-[200px] space-y-20"
    >
      <div className="flex justify-center items-center opacity-0 translate-y-20 transition-all duration-1000 blur-sm show-on-scroll">
        <h1
          style={orbitron.style}
          className="border-b border-[#f0daff] bg-gradient-to-br from-[#a35adf] via-[#f0c0ff] to-white text-transparent bg-clip-text text-[50px]"
        >
          Portfolio
        </h1>
      </div>
      <div className="space-y-4 md:flex md:space-y-0 md:space-x-4">
        <Section
          heading="Web 3"
          subHeading="Decentralized applications, NFT projects & more."
          src={blockchain}
          page="/web3"
        />
        <Section
          heading="Mobile Apps"
          subHeading="Full stack mobile apps built using React Native."
          src={app}
          page="/apps"
        />
        <Section
          heading="Websites & Apps"
          subHeading="Full stack, responsive websites & webapps built using Next.js."
          src={web}
          page="/websites"
        />
      </div>
    </div>
  );
}
