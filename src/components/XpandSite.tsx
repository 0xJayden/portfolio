import Image from "next/image";
import { useRouter } from "next/router";
import xpand from "../assets/xpand-site.png";
import xpandMobile from "../assets/xpand-mobile.png";
import { useEffect } from "react";
import { Orbitron } from "next/font/google";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const orbitron = Orbitron({ subsets: ["latin"] });

export default function EventMarketPlace() {
  const router = useRouter();

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
              XPAND Sports
            </h1>
            <h1 className="text-xl mb-5 border-b text-[#c11616] border-[#5adfaa]">
              {`A platform for athletes to monetize their content & connect with
              their fans.`}
            </h1>
            <p className="text-gray-300">
              {`Created with Next.js & T3 stack.`}
              <br />
              <br />
              {`XPAND offers a unique opportunity for athletes to showcase their skills and connect with fans, while also providing in-depth training resources to help take their performance to the next level.`}
            </p>
          </div>
          <Link
            href={"https://xpandsports.com/"}
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
            <Image alt="" src={xpandMobile} />
          </div>
        </div>
        <Link
          href={"https://xpandsports.com/"}
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
        src={xpand}
      />
      <div className="w-full mt-10 flex justify-center">
        <div className="border-t border-[#5adfaa] w-20"></div>
      </div>
    </>
  );
}
