import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import xpand from "../assets/mobile-front.png";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

export default function Xpand() {
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
      <div className="sm:flex">
        <div className="flex show-on-scroll info flex-col sm:max-h-[350px] sm:max-w-[600px]">
          <div className="border border-[#5adfaa] rounded-lg p-5 relative">
            <h1 style={orbitron.style} className="text-3xl mb-5">
              XPAND Sports
            </h1>
            <h1 className="text-xl mb-5 border-b text-[#c11616] border-[#5adfaa]">
              {`A platform for athletes to monetize their content & connect with
              their fans.`}
            </h1>
            <p className="text-gray-300">
              {`Created with React Native & Tailwind using Xcode's Iphone simulator.`}
              <br />
              <br />
              {`XPAND offers a unique opportunity for athletes to showcase their skills and connect with fans, while also providing in-depth training resources to help take their performance to the next level.`}
            </p>
          </div>
          <button
            onClick={() =>
              router.push("https://testflight.apple.com/join/KJtB4oG5")
            }
            className="border hidden sm:inline w-fit rounded border-[#5adfaa] px-2 mt-2 transition-all duration-200 ease-out hover:bg-[#5adfaa] hover:text-gray-700"
          >
            Link to App
          </button>
        </div>
        <div className="flex show-on-scroll pic1 opacity-0 justify-center w-full sm:mt-0 my-5">
          <Image alt="" className="max-w-[300px]" src={xpand} />
        </div>
        <button
          onClick={() =>
            router.push("https://testflight.apple.com/join/KJtB4oG5")
          }
          className="border show-on-scroll pic2 opacity-0 sm:hidden rounded border-[#5adfaa] px-2 transition-all duration-200 ease-out hover:bg-[#5adfaa] hover:text-gray-700"
        >
          Link to App
        </button>
      </div>
      <div className="w-full mt-20 flex justify-center">
        <div className="border-t border-[#5adfaa] w-20"></div>
      </div>
    </>
  );
}
