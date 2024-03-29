import Image from "next/image";
import { useRouter } from "next/router";
import chat1 from "../assets/chat-1.png";
import chat2 from "../assets/chat-2.png";
import chat3 from "../assets/chat-3.png";
import chat4 from "../assets/chat-app-desktop.png";
import { useEffect, useState } from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

export default function EventMarketPlace() {
  const [currentPic, setCurrentPic] = useState(0);
  const [clickedRight, setClickedRight] = useState(false);
  const [clickedLeft, setClickedLeft] = useState(false);

  const router = useRouter();

  const nextPic = () => {
    setClickedRight(true);
    if (currentPic === 2) {
      setCurrentPic(0);
    } else {
      setCurrentPic(currentPic + 1);
    }
    setTimeout(() => setClickedRight(false), 500);
  };

  const prevPic = () => {
    setClickedLeft(true);
    if (currentPic === 0) {
      setCurrentPic(2);
    } else {
      setCurrentPic(currentPic - 1);
    }
    setTimeout(() => setClickedLeft(false), 500);
  };

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
        <div className="flex show-on-scroll info opacity-0 flex-col space-y-2 sm:max-h-[350px] sm:max-w-[600px]">
          <div className="border border-[#5adfaa] rounded-lg p-5 relative">
            <h1 style={orbitron.style} className="text-3xl mb-5 ">
              Chat App
            </h1>
            <h1 className="text-xl mb-5 border-b text-red-400 border-[#5adfaa]">
              You guessed it, a chat app.
            </h1>
            <p className="text-gray-300">
              Created with React.js, Next.js, tRPC, Tailwind CSS, Prisma, &
              Planetscale. A complete type safe application.
            </p>
            <p className="text-gray-300 mt-5 mb-5">
              {`Sign in without creating a username and password using Next Auth, create/delete conversations
           with other users, unread indicators, conversations sorted in most recent message sent, and set
            your profile picture and name.`}
            </p>
          </div>
          <button
            onClick={() => router.push("https://chat-app-hjmk.vercel.app")}
            className="border hidden sm:inline rounded border-[#5adfaa] px-2 w-fit transition-all duration-200 ease-out hover:bg-[#5adfaa] hover:text-gray-700"
          >
            Link to Project
          </button>
        </div>
        <div className="sm:flex sm:flex-col show-on-scroll opacity-0 pic1 sm:w-full">
          <div className="flex relative justify-center mt-5 sm:mt-0 h-[500px] w-full overflow-hidden">
            <div className="flex justify-between w-full max-w-[400px] z-10">
              <div
                onClick={() => {
                  if (clickedRight || clickedLeft) return;
                  prevPic();
                }}
                className="p-2 flex items-center justify-center"
              >
                <div className="border rounded border-[#5adfaa] cursor-pointer transition-all duration-200 ease-out hover:bg-[#5adfaa] [&>*]:hover:bg-gray-700">
                  <div className="rounded-full h-2 w-2 m-3 bg-[#5adfaa]"></div>
                </div>
              </div>
              <div
                onClick={() => {
                  if (clickedRight || clickedLeft) return;
                  nextPic();
                }}
                className="p-2 flex items-center justify-center"
              >
                <div className="border rounded border-[#5adfaa] cursor-pointer transition-all duration-200 ease-out hover:bg-[#5adfaa] [&>*]:hover:bg-gray-700">
                  <div className="rounded-full h-2 w-2 m-3 bg-[#5adfaa]"></div>
                </div>
              </div>
            </div>
            <div
              className={`max-w-[220px] absolute transition-all duration-[500] ease-out ${
                currentPic === 2
                  ? "opacity-100"
                  : `opacity-0 ${clickedRight && "translate-x-full"} ${
                      clickedLeft && "-translate-x-full"
                    }`
              }`}
            >
              <Image alt="" src={chat3} />
            </div>
            <div
              className={`max-w-[220px] absolute transition-all duration-[500] ease-out ${
                currentPic === 1
                  ? "opacity-100"
                  : `opacity-0 ${clickedRight && "translate-x-full"} ${
                      clickedLeft && "-translate-x-full"
                    }`
              }`}
            >
              <Image alt="" src={chat1} />
            </div>
            <div
              className={`max-w-[220px] absolute transition-all duration-[500] ease-out ${
                currentPic === 0
                  ? "opacity-100"
                  : `opacity-0 ${clickedRight && "translate-x-full"} ${
                      clickedLeft && "-translate-x-full"
                    }`
              }`}
            >
              <Image alt="" src={chat2} />
            </div>
          </div>
          <div className="flex w-full h-3 justify-center items-center space-x-2 mt-2">
            <div
              className={`rounded-full transition-all duration-[500] ease-in-out ${
                currentPic === 0 ? "bg-white h-3 w-3" : "bg-gray-500 h-2 w-2"
              }`}
            ></div>
            <div
              className={`rounded-full transition-all duration-[500] ease-in-out ${
                currentPic === 1 ? "bg-white h-3 w-3" : "bg-gray-500 h-2 w-2"
              }`}
            ></div>
            <div
              className={`rounded-full transition-all duration-[500] ease-in-out ${
                currentPic === 2 ? "bg-white h-3 w-3" : "bg-gray-500 h-2 w-2"
              }`}
            ></div>
          </div>
        </div>

        <button
          onClick={() => router.push("https://chat-app-hjmk.vercel.app")}
          className="border show-on-scroll pic1 opacity-0 mb-10 sm:hidden rounded border-[#5adfaa] px-2 mt-5 transition-all duration-200 ease-out hover:bg-[#5adfaa] hover:text-gray-700"
        >
          Link to Project
        </button>
      </div>
      <div className="p-10 show-on-scroll pic2 opacity-0 hidden sm:flex">
        <div className="hidden sm:flex sm:justify-center">
          <Image alt="" src={chat4} />
        </div>
      </div>
      <div className="w-full mt-10 flex justify-center">
        <div className="border-t border-[#5adfaa] w-20"></div>
      </div>
    </>
  );
}
