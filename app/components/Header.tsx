"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "../../public/computerAnimated.svg";
import { Menu, X, Download } from "lucide-react";
import '../../app/globals.css'



const Header = () => {
  const modalRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setSection] = useState("");


  const handleSection = (value: string) => {
    setSection(value);
  }

  const links = () => {
    return (
      <>
        <Link
          id="link-projects"
          onClick={() => setSection('projects')}
          href="/#projects"
          as="/#projects"
          className="border-b-2 border-gray-400 w-full flex justify-center pb-2 md:border-none md:pb-0 md:grid md:justify-start"
        >
          <span className={`link-header-base`}>
            Projects
          </span>
        </Link>


        <Link
          id="link-skills"
          onClick={() => handleSection("skills")}
          href="/#skills"
          as="/#skills"
           className="border-b-2 border-gray-400 w-full flex justify-center pb-2 md:border-none md:pb-0 md:grid md:justify-start"
        >
          <span className={`link-header-base`}>
            Skills
          </span>
        </Link>

        <Link
          id="link-contact"
          onClick={() => handleSection("contact")}
          href="/#contact"
          as="/#contact"
           className="border-b-2 border-gray-400 w-full flex justify-center pb-2 md:border-none md:pb-0 md:grid md:justify-start"
        >
          <span className={`link-header-base`}>
            Contact
          </span>
        </Link>

        <Link
          className=" flex cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 bg-teal-600 mt-4 p-4 md:mt-0"
          href="resume/Lizett_Enriquez_FrontEndDeveloper.pdf"
          download={true}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2">
            <Download size={20}/>
            <span className="truncate">Resume</span>
          </div>
        </Link>
      </>
    )
  }

  return (
    <>
      <header className="hidden fixed px-4 inset-0 h-15 grid-cols-2 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 md:grid ">
        <div className="flex items-center gap-8">
          <div className="text-primary text-2xl">
            <Image src={Icon} alt="Computer Icon" width={40} height={40} />
          </div>
          <h2 className="text-lg font-bold text-(--color-title)">
            Lizett Enríquez
          </h2>
        </div>
        <div className="grid grid-cols-4 items-center">
          {links()}
        </div>
      </header>

      <div className="relative inherit md:hidden">
        <header onClick={()=>setIsMenuOpen(true)} className="fixed mr-2 mt-2 shadow-md/30 shadow-cyan-500/60 right-0 top-0 h-15 w-15 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border rounded-full border-gray-200 dark:border-gray-700">
            <Menu size={28} className="fixed top-[27%] right-[26%] text-teal-700 "/>
        </header>
        {isMenuOpen &&        
        <div onClick={()=>setIsMenuOpen(false)} ref={modalRef} className="fixed top-0 bottom-0 z-60 w-full bg-gray-950/90 ">
          <div className="m-auto mt-[50px] bg-gray-800 rounded-md h-[300px] w-[280px] ">
            <div className="w-full p-2 flex flex-col items-end">
              <X className="text-teal-500"/>
            </div>
            <article className="flex flex-col gap-8 pb-8 pt-2 px-4 items-center">
              {links()}
            </article>
          </div> 
        </div>
        }
      </div>
    </>
  );
};

export default Header;
