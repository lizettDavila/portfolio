import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectsProps {
    projectTitle: string;
    projectDescription: string;
    projectImage: string;
    projectAlt: string;
    techStack: string[];
    liveDemoLink: string;
    codeLink: string;
}

const Projects: FC<ProjectsProps> = ({ projectTitle, projectDescription, projectImage, projectAlt, techStack, liveDemoLink, codeLink }) => {
    return (
        <section className="py-16 md:pt-24" id="projects">
            <h2 className="text-3xl font-bold tracking-tight pb-8 text-center text-(--color-title)">My Projects</h2>
            <div className="space-y-12">
                <div className="bg-[#2D3748] m-6 rounded-xl overflow-hidden shadow-lg transition-shadow hover:shadow-2xl">
                    <div className="grid lg:grid-cols-2">
                        <div className="relative w-full h-[350px] bg-amber-100 flex justify-center">
                            <Image
                                width={260}
                                height={350}
                                 style={{ objectFit: 'fill' }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={projectAlt} src={projectImage} />
                        </div>

                        <div className="flex flex-col justify-center p-8">
                            <h3 className="text-xl font-bold text-(--color-title)">{projectTitle}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mt-2 mb-4">{projectDescription}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {techStack.map((tech) => (
                                    <span key={tech} className="text-xs font-semibold bg-teal-500/20 text-teal-300 px-2 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center gap-4 mt-auto">
                                <Link className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-teal-500 text-white text-sm font-medium leading-normal hover:opacity-90 transition-opacity" href={liveDemoLink} target="_blank" rel="noopener noreferrer    ">
                                    <span className="truncate">Live Demo</span>
                                </Link>
                                <Link className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 border border-gray-300 dark:border-gray-600 text-sm font-medium leading-normal hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" href={codeLink} target="_blank" rel="noopener noreferrer">
                                    <span className="truncate text-(--color-title)">View Code</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
