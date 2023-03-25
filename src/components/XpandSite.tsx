import Image from "next/image";
import { useRouter } from "next/router";
import xpand from "../assets/xpand-site.png";
import xpandMobile from "../assets/xpand-mobile.png";

export default function EventMarketPlace() {
  const router = useRouter();

  return (
    <>
      <div className="sm:flex ">
        <div className="w-full">
          <div className="border border-[#5adfaa] rounded-lg p-5 relative sm:max-h-[350px] sm:max-w-[600px]">
            <h1 className="text-3xl mb-5 ">XPAND Sports</h1>
            <h1 className="text-xl mb-5 border-b text-[#c11616] border-[#5adfaa]">
              {`The website for XPAND Sports, a platform for athletes to monetize their content & connect with
              their fans.`}
            </h1>
            <p className="text-gray-300">
              {`Created with Next.js & T3 stack.`}
              <br />
              <br />
              {`XPAND offers a unique opportunity for athletes to showcase their skills and connect with fans, while also providing in-depth training resources to help take their performance to the next level.`}
            </p>
          </div>
          <button
            onClick={() => router.push("https://xpandsports.com/")}
            className="border sm:inline hidden rounded border-[#5adfaa] px-2 mt-2 transition-all duration-200 ease-out hover:bg-[#5adfaa] hover:text-gray-700"
          >
            Link to Site
          </button>
        </div>
        <div className="flex justify-center items-center my-5 sm:w-full sm:mt-0">
          <div className="max-w-[220px]">
            <Image alt="" src={xpandMobile} />
          </div>
        </div>
        <button
          onClick={() => router.push("https://xpandsports.com/")}
          className="border sm:hidden rounded border-[#5adfaa] px-2 transition-all duration-200 ease-out hover:bg-[#5adfaa] hover:text-gray-700"
        >
          Link to Site
        </button>
      </div>
      <Image
        className="hidden px-5 sm:inline max-w-[1250px]"
        alt=""
        src={xpand}
      />
      <div className="w-full mt-10 flex justify-center">
        <div className="border-t border-[#5adfaa] w-20"></div>
      </div>
    </>
  );
}
