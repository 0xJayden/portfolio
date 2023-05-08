import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import exchange from "../assets/exchange.png";
import { Orbitron } from "next/font/google";

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
      <div className="sm:flex">
        <div className="border show-on-scroll opacity-0 info border-[#5adfaa] rounded-lg p-5 relative sm:max-w-[500px]">
          <h1 style={orbitron.style} className="text-3xl mb-5 ">
            Portfolio Token Exchange
          </h1>
          <h1 className="text-xl mb-5 border-b text-purple-400 border-[#5adfaa]">
            Crypto currency exchange
          </h1>
          <p className="text-gray-300">
            {`Created with React.js, Redux, Bootstrap & Web3.js.`}
            <br />
            <br />
            {`Trade ETH for Portfolio Tokens (PRT) on the Rinkeby network. Make
            sure you are connected to the Rinkeby network and have ETH on the
            Rinkeby network before attempting to trade. You can get some`}
            <span>
              <a
                className="text-purple-500 cursor-pointer"
                href="https://faucet.rinkeby.io"
              >
                {" "}
                here
              </a>
              .
            </span>
            <br />
            <br />
            {`* Needs to be redeployed to Goerli Testnet since Rinkeby is deprecated.`}
          </p>
        </div>
        <div className="flex show-on-scroll pic1 opacity-0 justify-center items-center my-5 sm:w-full sm:mt-0">
          <div className="sm:max-w-[600px]">
            <Image alt="" src={exchange} />
          </div>
        </div>
        <button
          onClick={() =>
            router.push("https://portfolio-token-exchange.surge.sh/")
          }
          className="border show-on-scroll pic2 opacity-0 sm:hidden rounded border-[#5adfaa] px-2 transition-all duration-200 ease-out hover:bg-[#5adfaa] hover:text-gray-700"
        >
          Link to Project
        </button>
      </div>
      <button
        onClick={() =>
          router.push("https://portfolio-token-exchange.surge.sh/")
        }
        className="border show-on-scroll pic2 opacity-0 sm:inline hidden rounded border-[#5adfaa] px-2 mt-2 transition-all duration-200 ease-out hover:bg-[#5adfaa] hover:text-gray-700"
      >
        Link to Project
      </button>
    </>
  );
}
