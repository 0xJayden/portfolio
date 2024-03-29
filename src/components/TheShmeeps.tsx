import Image from "next/image";
import { useRouter } from "next/router";
import shmeep from "../assets/shmeep1.png";
import shmeeps from "../assets/shmeeps.png";

export default function EventMarketPlace() {
  const router = useRouter();
  return (
    <>
      <div className="sm:flex">
        <div className="border border-[#5adfaa] rounded p-5 pt-2 relative sm:max-w-[500px]">
          <div className="flex items-center">
            <h1 className="text-3xl mb-5 mr-5 sm:mr-10 ">The Shmeeps</h1>
            <Image alt="" src={shmeep} />
          </div>
          <h1 className="text-xl mb-5 border-b text-yellow-400 border-[#5adfaa]">
            NFT project with the ability to stake & earn tokens
          </h1>
          <p className="text-gray-300">
            {`Created with React.js, Bootstrap, & Web3.js.`}
            <br />
            <br />
            {` Select up to 3 NFTs to mint. After, in the Staking section, you
              may select the NFTs you've just minted to be staked. Once staked,
              you immediately start earning Shmeep Tokens until you choose to
              unstake your NFTs.`}{" "}
            <br />
            <br />
            {`To unstake, select the NFTs you'd
              like to unstake and click Claim & Unstake; your NFTs and the
              tokens you earned will be sent to your wallet. If you'd like to
              only claim the tokens earned, click Claim Tokens.`}
            <br />
            <br />
            {`* Needs to be redeployed to Goerli Testnet since Rinkeby is deprecated.`}
          </p>
        </div>
        <div className="flex justify-center w-full sm:mt-0 my-5">
          <div className="max-w-[300px] flex justify-center sm:w-full">
            <Image alt="" src={shmeeps} />
          </div>
        </div>
        <button
          onClick={() => router.push("https://theshmeeps.surge.sh/")}
          className="border sm:hidden rounded border-[#5adfaa] px-2 transition-all duration-200 ease-out hover:bg-[#5adfaa] hover:text-gray-700"
        >
          Link to Project
        </button>
      </div>
      <button
        onClick={() => router.push("https://theshmeeps.surge.sh/")}
        className="border hidden sm:inline rounded border-[#5adfaa] px-2 mt-2 transition-all duration-200 ease-out hover:bg-[#5adfaa] hover:text-gray-700"
      >
        Link to Project
      </button>
      <div className="w-full mt-20 flex justify-center">
        <div className="border-t border-[#5adfaa] w-20"></div>
      </div>
    </>
  );
}
