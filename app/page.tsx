'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "./components/Header";
import SectionPresentation from "./components/SectionPresentation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/')
  }, []);

  return (
    <div className="h-screen w-full flex flex-col gap-0 md:gap-16" >
      <Header />
      <SectionPresentation />
      <Projects projectAlt="vehicle" projectImage='/portald.png' projectTitle="Vehicle Administrative Platform" projectDescription="A full-featured online administrative platform built with NextJS." techStack={['Next.js', 'Typescript', 'Tankstack Query', 'Tailwind', 'Material-ui', 'Axios']} liveDemoLink="https://rent-vehicles-ikin-l7nguz529-lizettdavilas-projects.vercel.app/" codeLink="https://github.com/lizettDavila/rentVehicles/tree/main" />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
