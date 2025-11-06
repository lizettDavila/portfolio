"use client";

import { use, useState } from "react";
import Image from "next/image";
import Icon from "../../public/computerAnimated.svg";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="text-primary text-2xl">
              <Image src={Icon} alt="Computer Icon" width={40} height={40} />
            </div>
            <h2 className="text-lg font-bold text-(--color-title)">
              Lizett Enríquez
            </h2>
          </div>
          <div >
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative flex items-center gap-8 md:hidden" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 8l16 0" /><path d="M4 16l16 0" /></svg>
            </button>
            <nav className={`bg-(--background-dark) mr-5 flex flex-col p-5 h-55 gap-4 border-2 border-amber-50 rounded-md shadow-md shadow-sky-200 md:flex-row md:gap-8 md:items-center md:mt-0 md:p-0 md:h-auto md:border-0 md:shadow-none ${isMenuOpen ? "fixed z-10 right-0 top-12 bottom-0" : "hidden"} md:flex md:bg-transparent`}>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <a
                  className="text-sm font-medium hover:text-primary transition-colors text-(--color-title)"
                  href="#projects"
                >
                  Projects
                </a>
                <a
                  className="text-sm font-medium hover:text-primary transition-colors text-(--color-title)"
                  href="#skills"
                >
                  Skills
                </a>
                <a
                  className="text-sm font-medium hover:text-primary transition-colors text-(--color-title)"
                  href="#contact"
                >
                  Contact
                </a>
              </div>

              <Link
                className=" flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 bg-emerald-500 mt-4 p-4 md:mt-0"
                href="resume/Lizett_Enriquez_FrontEndDeveloper.pdf"
                download={true}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-download"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 11l5 5l5 -5" />
                    <path d="M12 4l0 12" />
                  </svg>
                  <span className="truncate">Resume</span>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
