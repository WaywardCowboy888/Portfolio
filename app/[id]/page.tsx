"use client"; // Make this a Client Component

import React from "react";
import { projects } from "../components/work/projectDetails.ts";
import { useParams } from "next/navigation";
import Hero1 from "./Hero1.tsx";
import { Project } from "../components/types/valibot.ts";
import AnimatedTitle from "../animations/AnimatedTitle.tsx";
import AnimatedBody from "../animations/AnimatedBody.tsx";
import MasonarySection from "../components/work/masonarySection.tsx";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === Number(id)) as Project;

  if (!project) return <p className="text-center">Project not found</p>;

  return (
    <div className="">
      <Hero1 props={project} />
      <section
        className="relative z-10 flex w-full flex-col items-center justify-start overflow-hidden bg-[#0E1016] pb-36 pt-16 md:pb-44 md:pt-20 lg:pb-56 lg:pt-20"
        id="about"
      >
        <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
          <AnimatedTitle
            text={project.name}
            className={
              "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
            }
            wordSpace={"mr-[14px]"}
            charSpace={"mr-[0.001em]"}
          />

          <div className="mx-auto flex w-full flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
            <div className="mb-10 flex w-full flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[24px] ">
              <AnimatedBody text={project.description} />
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-[#0E1016] text-[#e4ded7]">
        {project.images.slice(6).map((image, index) => (
          <div key={index} className="">
            {image.title && (
              <AnimatedTitle
                text={image.title}
                className={
                  "mb-10 text-center text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                }
                wordSpace={"mr-[14px]"}
                charSpace={"mr-[0.001em]"}
              />
            )}
            <div className="mx-auto flex h-full w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
              <img src={image.src} alt={image.alt} className="object-contain" />
              {image.desc && (
                <div className="my-10 flex w-full flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[24px] ">
                  <AnimatedBody text={image.desc} />
                </div>
              )}
            </div>
          </div>
        ))}

        <div className="mx-auto flex h-full w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
          <MasonarySection />
        </div>
        {/* iframwe */}
        <div className="mx-auto flex h-full w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
          <iframe
            src={`https://www.youtube.com/embed/${project.youtubeId}`}
            title={project.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mb-10 h-64 w-full object-contain md:h-96 lg:h-[500px]"
          />
        </div>
      </section>
    </div>
  );
}
