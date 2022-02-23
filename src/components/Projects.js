import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font mt-11">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <CodeIcon className="mx-auto inline-block w-10 mb-4 mt-11 text-azure"/>
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
                    Apps I've Built
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-darkEuc">
                These are the projects I'm most proud of, I feel these showcase my ability to think abstractly, manage deadlines, and develop exciting projects.
                </p>
            </div>
            <div className="flex flex-wrap m-4">
                {projects.map((project) => (
                    <a  
                        href={project.link}
                        key={project.image}
                        className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative lg:h-56 md:h-72 sm:h-96">
                                <img
                                    alt="gallery"
                                    className="absolute insert-0 w-full h-full object-cover object-center"
                                    src={project.image}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-8 border-salmon bg-darkEuc opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-darkBlue mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-greyText mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed text-darkBlue">{project.description}</p>
                                </div>
                            </div>
                        </a>
                ))}
            </div>
        </section>
    );
    
}