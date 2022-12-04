import Image from "next/image";
import { useRouter } from "next/router";
import exchange from "../public/exchange.png";

export default function EventMarketPlace() {
  const router = useRouter();
  return (
    <>
      <div className="sm:flex">
        <div className="border border-[#5adfaa] rounded p-5 relative sm:max-w-[500px]">
          <h1 className="text-3xl mb-5 ">Portfolio Token Exchange</h1>
          <h1 className="text-xl mb-5 border-b text-purple-400 border-[#5adfaa]">
            Crypto currency exchange
          </h1>
          <p className="text-gray-300">
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

        <div className="flex justify-center sm:w-full mt-10 sm:mt-0">
          <div className="sm:max-w-[600px]">
            <Image src={exchange} />
          </div>
        </div>

        <button
          onClick={() =>
            router.push("https://portfolio-token-exchange.surge.sh/")
          }
          className="border sm:hidden rounded border-[#5adfaa] w-1/2 mt-10 max-w-[200px] transition-all duration-200 ease-out hover:bg-[#5adfaa] hover:text-gray-700"
        >
          Link to Project
        </button>
      </div>
      <button
        onClick={() =>
          router.push("https://portfolio-token-exchange.surge.sh/")
        }
        className="border sm:inline hidden rounded border-[#5adfaa] w-1/2 mt-10 max-w-[200px] transition-all duration-200 ease-out hover:bg-[#5adfaa] hover:text-gray-700"
      >
        Link to Project
      </button>
    </>
  );
}
