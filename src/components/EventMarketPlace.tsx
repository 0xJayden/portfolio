import Image from "next/image";
import { useRouter } from "next/router";
import empMobile from "../assets/emp-mobile.png";
import explore from "../assets/explore.png";
import emp from "../assets/event-market-place.png";

export default function EventMarketPlace() {
  const router = useRouter();
  return (
    <>
      <div className="sm:flex">
        <div className="border border-[#5adfaa] rounded p-5 sm:max-w-[600px]">
          <h1 className="text-3xl mb-5 ">Event Marketplace</h1>
          <h1 className="text-xl mb-5 border-b text-blue-400 border-[#5adfaa]">
            A Marketplace for Events
          </h1>
          <p className="text-gray-300">
            {`Created with React.js, Next.js, Tailwind CSS, MongoDB, & Web3.js. Soon to be migrated from Web3 to Web2 with Web3 capabilities.`}
            <br />
            <br />
            {`Create events and mint tickets currently on the Goerli testnet. View
      your profile to upload a profile picture & banner, and see what
      tickets you've purchased. Explore created events on the explore feed
      and engage with them by liking or commenting. Click on any event to
      view more information about that event.`}
            <br />
            <br />
            Future features include an integrated marketplace to trade purchased
            tickets, view your hosted events on your profile, and search, view,
            & engage with others.
          </p>
        </div>

        <div className="flex justify-center mt-7 sm:mt-0 sm:w-full">
          <div className="max-w-[130px] sm:max-w-[200px] -rotate-12">
            <Image src={empMobile} />
          </div>
          <div className="max-w-[130px] sm:max-w-[200px] rotate-12">
            <Image src={explore} />
          </div>
        </div>
        <button
          onClick={() => router.push("https://event-marketplace.vercel.app/")}
          className="sm:hidden border rounded border-[#5adfaa] px-2 mt-5 mb-20 transition-all duration-200 ease-out hover:bg-[#5adfaa] hover:text-gray-700"
        >
          Link to Project
        </button>
      </div>
      <button
        onClick={() => router.push("https://event-marketplace.vercel.app/")}
        className="hidden sm:inline border rounded border-[#5adfaa] px-2 mt-2 cursor-pointer transition-all duration-200 ease-out hover:bg-[#5adfaa] hover:text-gray-700"
      >
        Link to Project
      </button>
      <div className="p-20 pt-10 hidden sm:flex">
        <Image src={emp} />
      </div>
      <div className="w-full flex justify-center">
        <div className="border-t border-[#5adfaa] w-20"></div>
      </div>
    </>
  );
}
