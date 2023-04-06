import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import billSplit1 from "../assets/bill-split-1.png";
import billSplit2 from "../assets/bill-split-2.png";
import billSplit3 from "../assets/bill-split-3.png";
import billSplit4 from "../assets/bill-split-4.png";

export default function BillSplit() {
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
        <div className="flex show-on-scroll info opacity-0 flex-col sm:max-h-[350px] sm:max-w-[600px]">
          <div className="border border-[#5adfaa] rounded-lg p-5 relative">
            <h1 className="text-3xl mb-5">Bill Split App</h1>
            <h1 className="text-xl mb-5 border-b text-cyan-500 border-[#5adfaa]">
              Split the bill with your peeps.
            </h1>
            <p className="text-gray-300">
              {`Created with React Native & Tailwind using Xcode's Iphone simulator.`}
              <br />
              <br />
              {`Choose how many people are in your party and edit each member's order. State is managed by React useContext and useReducer hooks.`}
              <br />
              <br />
              {`After everyone is accounted for, click on the results button to see everyones individual bill.`}
            </p>
          </div>
          <button
            onClick={() =>
              router.push("https://testflight.apple.com/join/mDj56o06")
            }
            className="border hidden sm:inline w-fit rounded border-[#5adfaa] px-2 mt-2 transition-all duration-200 ease-out hover:bg-[#5adfaa] hover:text-gray-700"
          >
            Link to App
          </button>
        </div>
        <div className="flex show-on-scroll opacity-0 pic1 justify-center w-full sm:mt-0 my-5">
          <div className="max-w-[300px] flex justify-center sm:w-full">
            <Image alt="" className="rounded-lg" src={billSplit1} />
          </div>
        </div>
        <button
          onClick={() =>
            router.push("https://testflight.apple.com/join/mDj56o06")
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
