import Navbar from "../components/Navbar";
import Chat from "../components/Chat";
import XpandSite from "../components/XpandSite";
import { Source_Code_Pro, Orbitron } from "next/font/google";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import psimpless from "../assets/psimpless.png";
import psimpless2 from "../assets/psimpless2.png";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

const orbitron = Orbitron({ subsets: ["latin"] });

const Psimple = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains("info") &&
          !entry.target.classList.contains("pic1") &&
          !entry.target.classList.contains("pic2")
        ) {
          entry.target.classList.add("show");
        } else if (
          entry.isIntersecting &&
          entry.target.classList.contains("info")
        ) {
          entry.target.classList.add("animate-fadeUp2", "opacity-100");
        } else if (
          entry.isIntersecting &&
          entry.target.classList.contains("pic1")
        ) {
          entry.target.classList.add("animate-fadeUp3", "opacity-100");
        } else if (
          entry.isIntersecting &&
          entry.target.classList.contains("pic2")
        ) {
          entry.target.classList.add("animate-fadeUp4", "opacity-100");
        }
      });
    });

    const elements = document.querySelectorAll(".show-on-scroll");
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <div className="sm:flex ">
        <div className="w-full opacity-0 show-on-scroll info">
          <div className="border border-[#5adfaa] rounded-lg p-5 mb-3 relative sm:max-h-[350px] sm:max-w-[600px]">
            <h1 style={orbitron.style} className="text-3xl mb-5 ">
              pSimple Mind
            </h1>
            <h1 className="text-xl mb-5 border-b text-[#ece74e] border-[#5adfaa]">
              {`A fun, colorful animated site promoting brain health.`}
            </h1>
            <p className="text-gray-300">
              {`Created with Next.js & T3 stack.`}
              <br />
              <br />
              {`pSimple Mind showcases the benefits of brain health and ways to improve it.`}
              <br />
              <br />
              {`Merch store coming soon.`}
            </p>
          </div>
          <Link
            href={"https://psimplemind.com/"}
            className="border max-w-[100px] sm:justify-center sm:flex sm:items-center hidden rounded border-[#5adfaa] p-2 transition-all duration-200 ease-out hover:bg-[#5adfaa] hover:text-gray-700"
          >
            <p style={orbitron.style} className="text-lg">
              Go
            </p>
            <ArrowRightIcon className="h-5 w-5 ml-1" />
          </Link>
        </div>
        <div className="flex show-on-scroll pic1 opacity-0 justify-center items-center my-5 sm:w-full sm:mt-0">
          <div className="max-w-[220px]">
            <Image alt="" src={psimpless} />
          </div>
        </div>
        <Link
          href={"https://psimplemind.com/"}
          className="border flex items-center justify-center show-on-scroll pic1 opacity-0 sm:hidden rounded border-[#5adfaa] px-2 transition-all duration-200 ease-out hover:bg-[#5adfaa] hover:text-gray-700"
        >
          <p style={orbitron.style} className="text-lg">
            Go
          </p>
          <ArrowRightIcon className="h-5 w-5 ml-1" />
        </Link>
      </div>
      <Image
        className="hidden show-on-scroll pic2 opacity-0 px-5 sm:inline max-w-[1250px]"
        alt=""
        src={psimpless2}
      />
      <div className="w-full mt-10 flex justify-center">
        <div className="border-t border-[#5adfaa] w-20"></div>
      </div>
    </>
  );
};

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
        <Psimple />
        {/* <Chat /> */}
      </div>
    </div>
  );
}
