import { DesktopComputerIcon } from "@heroicons/react/solid";
import React from "react";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="text-white bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <DesktopComputerIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font  text-white">
            Work Experience
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-around">
        <div class="w-10/12 md:w-7/12 lg:6/12 mx-auto relative ">
        <div class="border-l-2 ">

{
experiences.map((experience,idx)=>
  <div class=" mb-8 transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-gray-800 text-white rounded  flex-col md:flex-row space-y-4 md:space-y-0">
    <div class="w-5 h-5 bg-white absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
    <div class="w-10 h-1 bg-gray-300 absolute -left-10 z-0"></div>
    <div class="flex flex-col">
      <span class="my-1 text-md lg:text-md font-semibold text-gray-300 " >{experience.start} - {experience.end}</span>
      <h3 class="mb-3 text-md lg:text-lg font-bold text-white">{experience.role} - {experience.name}</h3>
      <p class="text-base font-normal text-gray-400">
      <ul class="list-disc p-5 text-left">
      {
        experience.description.map((point,idx)=>
        <li>{point}</li>
        )
      }
      </ul>
      </p>
    </div>
  </div>


)
}        </div>

        </div>
      </div>
      </div>

    </section>
  );
}