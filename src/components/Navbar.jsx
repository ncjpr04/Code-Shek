import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const menuLinks = [
  { text: "About", to: "about" },
  { text: "Events", to: "projects" },
  { text: "Gallery", to: "education" },
  { text: "Fun", to: "fun" },
  { text: "Contact Us !", to: "contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800, // Scroll duration in milliseconds
      smooth: "easeInOutQuart", // Smooth scroll animation easing function
    });
  };

  return (
    <div className="bg-zinc-700 mt-5 mx-5 bg-opacity-30 rounded-full backdrop-blur-sm fixed  z-[100] w-[calc(100vw-2.75rem)] px-20 py-3 font-[' Neue Montreal'] flex justify-between items-center isolate shadow-lg ring-1 ring-black/5">
      <div className="logo">
        <a href="#">
          <img
            className="min-w-[70px] w-[8vw]"
            src="https://github.com/ncjpr04/Code-Shek/blob/main/public/klipartbhsidvz.com.png?raw=true"
            alt=""
          />
        </a>
      </div>

      <div
        className={`lg:flex flex-col lg:flex-row lg:gap-10 ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        {menuLinks.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            smooth={true}
            className={`text-lg font-light cursor-pointer capitalize ${
              isMenuOpen ? index === 4 && "ml-0" : index === 4 && "ml-32"
            }`}
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            <div className="hover:drop-shadow-lg shadow-white">{item.text}</div>
          </Link>
        ))}
      </div>

      <div className="TopButton w-10 mr-20">
        <button className="button" onClick={scrollToTop}>
          <svg className="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
        </button>
      </div>

      <button
        className="lg:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  );
}

export default Navbar;
