import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-white bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project,idx) => (
                        <a href={project.link}>
            <div class="max-w-sm rounded overflow-hidden shadow-sm shadow-gray-600 hover:shadow-gray-600 hover:shadow-xl m-4 " key={project.title}>
            <img class="w-full object-cover h-48" src={project.image} alt={'project-image'+idx}/>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2" >{project.title}</div>
              <p class="text-gray-400 text-base">
                {project.description}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
            {project.tStack.map((tech)=>(
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</span>

              ))
            }
            </div>
          </div>
          </a>

          ))}
        </div>
      </div>
    </section>
  );
}