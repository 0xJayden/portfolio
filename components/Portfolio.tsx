import { useEffect } from "react";
import EventMarketPlace from "./EventMarketPlace";
import TheShmeeps from "./TheShmeeps";
import Exchange from "./Exchange";
import Chat from "./Chat";

export default function Portfolio() {
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
    <div
      id="portfolio"
      className="flex flex-col mt-[100px] sm:mt-[200px] space-y-10"
    >
      <div className="flex justify-center mb-10 opacity-0 translate-y-20 transition-all duration-1000 blur-sm show-on-scroll">
        <h1 className="border-b border-[#5adfaa] text-[40px] font-light">
          Portfolio
        </h1>
      </div>
      <div className="opacity-0 translate-y-20 transition-all duration-1000 blur-sm show-on-scroll">
        <EventMarketPlace />
      </div>
      <div className="opacity-0 translate-y-20 transition-all duration-1000 blur-sm show-on-scroll">
        <Chat />
      </div>
      <div className="opacity-0 translate-y-20 transition-all duration-1000 blur-sm show-on-scroll">
        <TheShmeeps />
      </div>
      <div className="opacity-0 translate-y-20 transition-all duration-1000 blur-sm show-on-scroll">
        <Exchange />
      </div>
    </div>
  );
}
