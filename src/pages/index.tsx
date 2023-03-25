import { useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Socials from "../components/Socials";
import Image from "next/image";

import jay from "../assets/jay.jpg";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const elements = document.querySelectorAll(".show-on-scroll");
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="bg-gradient-to-b items-center flex flex-col via-[#2e383d] from-[#1f1a25] to-[#23162f]">
      <Head>
        <title>Jayden Davila</title>
        <meta
          name="description"
          content="Jayden Davila's Developer Portfolio"
        />
        <link rel="icon" href="/jd.ico" />
      </Head>
      <span className="h-[1500px] left-1 sm:left-10 w-[2px] bg-gradient-to-b absolute from-transparent via-[#354d4e]"></span>
      <span className="h-[1500px] left-2 sm:left-12 w-[2px] bg-gradient-to-b absolute from-transparent via-[#49354e]"></span>
      <span className="h-[1500px] left-3 sm:left-14 w-[2px] bg-gradient-to-b absolute from-transparent via-[#334133]"></span>

      <span className="h-[1500px] right-1 sm:right-10 w-[2px] bg-gradient-to-b absolute from-transparent via-[#49354e]"></span>
      <span className="h-[1500px] right-2 sm:right-12 w-[2px] bg-gradient-to-b absolute from-transparent via-[#334133]"></span>
      <span className="h-[1500px] right-3 sm:right-14 w-[2px] bg-gradient-to-b absolute from-transparent via-[#354d4e]"></span>

      <main className="max-w-[1250px] p-5 relative overflow-hidden min-h-screen text-[#f2fff2] items-center flex flex-col">
        <span className="w-[800px] sm:w-full top-[200px] bg-gradient-to-r rotate-45 absolute h-[2px] from-transparent via-[#334133]"></span>
        <span className="w-[800px] sm:w-full top-[300px] md:top-[300px] h-[2px] bg-gradient-to-r rotate-45 absolute from-transparent via-[#49354e]"></span>
        <span className="w-[800px] sm:w-full top-[100px] h-[2px] bg-gradient-to-r rotate-45 absolute from-transparent via-[#354d4e]"></span>
        <span className="w-[800px] sm:w-full top-[790px] bg-gradient-to-r rotate-45 absolute h-[2px] from-transparent via-[#334133]"></span>
        <span className="w-[800px] sm:w-full top-[890px] h-[2px] bg-gradient-to-r rotate-45 absolute from-transparent via-[#49354e]"></span>
        <span className="w-[800px] sm:w-full top-[990px] h-[2px] bg-gradient-to-r rotate-45 absolute from-transparent via-[#354d4e]"></span>
        <span className="w-[800px] sm:w-full top-[1600px] sm:hidden bg-gradient-to-r rotate-45 sm:-rotate-45 absolute h-[2px] from-transparent via-[#334133]"></span>
        <span className="w-[800px] sm:w-full top-[1700px] sm:hidden h-[2px] bg-gradient-to-r rotate-45 sm:-rotate-45 absolute from-transparent via-[#49354e]"></span>
        <span className="w-[800px] sm:w-full top-[1800px] sm:hidden h-[2px] bg-gradient-to-r rotate-45 sm:-rotate-45 absolute from-transparent via-[#354d4e]"></span>

        <span className="w-[800px] sm:w-full bottom-[1300px] bg-gradient-to-r -rotate-45 absolute h-[2px]  from-transparent via-[#334133]"></span>
        <span className="w-[800px] sm:w-full bottom-[1400px] h-[2px] bg-gradient-to-r -rotate-45 absolute from-transparent via-[#49354e]"></span>
        <span className="w-[800px] sm:w-full bottom-[1500px] h-[2px] bg-gradient-to-r -rotate-45 absolute from-transparent via-[#354d4e]"></span>

        <span className=" w-[800px] sm:w-full bottom-[590px] bg-gradient-to-r -rotate-45 absolute h-[2px] from-transparent via-[#334133]"></span>
        <span className=" w-[800px] sm:w-full bottom-[690px] h-[2px] bg-gradient-to-r -rotate-45 absolute from-transparent via-[#49354e]"></span>
        <span className=" w-[800px] sm:w-full bottom-[790px] h-[2px] bg-gradient-to-r -rotate-45 absolute from-transparent via-[#354d4e]"></span>

        <Navbar />

        <Image
          alt="bg"
          className="absolute animate-dropIn sm:right-0 max-w-[450px] border-[#a35adf] sm:brightness-75 md:brightness-90 border p-1 transition-all duration-300 ease-in-out top-20 sm:top-[100px] w-10/12 brightness-[.6] rounded"
          src={jay}
        />
        <Intro />
        <Portfolio />
        <div className="opacity-0 w-full translate-y-20 transition-all duration-1000 blur-sm show-on-scroll">
          <Socials />
        </div>
      </main>
    </div>
  );
}
