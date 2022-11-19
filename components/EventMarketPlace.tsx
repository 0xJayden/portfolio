import Image from "next/image";
import empMobile from "../public/emp-mobile.png";
import explore from "../public/explore.png";

export default function EventMarketPlace() {
  return (
    <>
      <div className="border border-[#5adfaa] rounded p-5">
        <h1 className="text-3xl mb-5 ">Event Marketplace</h1>
        <h1 className="text-xl mb-5 border-b text-blue-400 border-[#5adfaa]">
          A Marketplace for Events
        </h1>
        <p className="text-gray-300">
          {`Create events and mint tickets currently on the Goerli testnet. View
      your profile to upload a profile picture & banner, and see what
      tickets you've purchased. Explore created events on the explore feed
      and engage with them by liking or commenting. Click on any event to
      view more information about that event.`}
          <br />
          <br />
          Future features include an integrated marketplace to trade purchased
          tickets, view your hosted events on your profile, and search, view, &
          engage with others.
        </p>
      </div>

      <div className="flex justify-center mt-10">
        <div className="max-w-[130px] -rotate-12">
          <Image src={empMobile} />
        </div>
        <div className="max-w-[130px] rotate-12">
          <Image src={explore} />
        </div>
      </div>

      <button className="border rounded border-[#5adfaa] w-1/2 mt-10">
        Link to Project
      </button>
    </>
  );
}
