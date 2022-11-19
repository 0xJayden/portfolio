import Image from "next/image";
import { useRouter } from "next/router";
import chat1 from "../public/chat-1.png";
import chat2 from "../public/chat-2.png";
import chat3 from "../public/chat-3.png";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function EventMarketPlace() {
  const [currentPic, setCurrentPic] = useState(0);

  const router = useRouter();

  const nextPic = () => {
    if (currentPic === 2) {
      setCurrentPic(0);
    } else {
      setCurrentPic(currentPic + 1);
    }
  };

  const prevPic = () => {
    if (currentPic === 0) {
      setCurrentPic(2);
    } else {
      setCurrentPic(currentPic - 1);
    }
  };

  return (
    <>
      <div className="border border-[#5adfaa] rounded p-5 relative">
        <h1 className="text-3xl mb-5 ">Chat App</h1>
        <h1 className="text-xl mb-5 border-b text-red-400 border-[#5adfaa]">
          You guessed it, a chat app.
        </h1>
        <p className="text-gray-300">
          {`Sign in without creating a username and password using Next Auth, create/delete conversations
           with other users, unread indicators, conversations sorted in most recent message sent, and set
            your profile picture and name if wanted.`}
        </p>
      </div>

      <div className="flex justify-center mt-10">
        <div
          onClick={() => prevPic()}
          className="p-2 w-20 flex items-center transition-all duration-300 ease-in-out"
        >
          <ArrowLeftIcon />
        </div>
        {currentPic === 0 && (
          <div className="">
            <Image src={chat1} />
          </div>
        )}
        {currentPic === 1 && (
          <div className="">
            <Image src={chat2} />
          </div>
        )}
        {currentPic === 2 && (
          <div className="">
            <Image src={chat3} />
          </div>
        )}
        <div
          onClick={() => nextPic()}
          className="p-2 flex items-center w-20 transition-all duration-300 ease-in-out"
        >
          <ArrowRightIcon />
        </div>
      </div>
      <div className="flex w-full justify-center items-center space-x-2 mt-2">
        <div
          className={`rounded-full transition-all duration-300 ease-in-out ${
            currentPic === 0 ? "bg-white h-3 w-3" : "bg-gray-500 h-2 w-2"
          }`}
        ></div>
        <div
          className={`rounded-full transition-all duration-300 ease-in-out ${
            currentPic === 1 ? "bg-white h-3 w-3" : "bg-gray-500 h-2 w-2"
          }`}
        ></div>
        <div
          className={`rounded-full transition-all duration-300 ease-in-out ${
            currentPic === 2 ? "bg-white h-3 w-3" : "bg-gray-500 h-2 w-2"
          }`}
        ></div>
      </div>

      <button
        onClick={() => router.push("https://chat-app-hjmk.vercel.app")}
        className="border rounded border-[#5adfaa] w-1/2 mt-10"
      >
        Link to Project
      </button>
    </>
  );
}
