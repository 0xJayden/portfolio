import { useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Socials from "../components/Socials";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const elements = document.querySelectorAll(".show-on-scroll");
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="bg-gradient-to-tr from-gray-900 to-gray-600 p-5 text-gray-100 flex flex-col items-center">
      <Head>
        <title>Jayden Davila</title>
        <meta
          name="description"
          content="Jayden Davila's Developer Portfolio"
        />
        <link rel="icon" href="/jd.ico" />
      </Head>
      <Navbar />

      <main className="max-w-[1250px] w-full bg-transparent z-[1]">
        <div className="opacity-0 translate-y-20 transition-all duration-1000 blur-sm show-on-scroll">
          <Intro />
        </div>
        <Portfolio />
        <div className="opacity-0 translate-y-20 transition-all duration-1000 blur-sm show-on-scroll">
          <Socials />
        </div>
        <div className="flex justify-center mt-5">
          <a href="#home">
            <p>Back To Top</p>
          </a>
        </div>
      </main>
    </div>
  );
}
