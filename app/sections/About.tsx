import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody.tsx";
import AnimatedTitle from "../animations/AnimatedTitle.tsx";

const About = () => {
  const univeristy = "New York University";
  const ubisoft = "Ubisoft";
  const experience = "EdTech startup";
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pb-36 pt-16 md:pb-44 md:pt-20 lg:pb-56 lg:pt-20"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"Ashwin Gandhi."}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                <>
                  I earned my Bachelor's in Computer Science from VIT and
                  completed my Master's in Game Design at{" "}
                  <strong>{univeristy.toUpperCase()}</strong>. I have over a
                  year of experience as a Level Designer at{" "}
                  <strong className="rounded-xl bg-white p-2 text-black">
                    {ubisoft.toUpperCase()}
                  </strong>{" "}
                  and spent a year working on a quiz game for an{" "}
                  <strong className="rounded-xl bg-white p-2 text-black">
                    {experience.toLocaleUpperCase()}
                  </strong>{" "}
                  that which led to a 30% increase in engagement and retention
                  rates among young users
                </>
              }
              className=""
            />

            <AnimatedBody
              delay={0.1}
              text="Whether I’m crafting an immersive level or building intricate game mechanics, I’m always focused on creating experiences that are unique and innovative. I love experimenting with new design techniques and staying up-to-date with the latest trends in game development."
            />

            <AnimatedBody
              delay={0.2}
              text="Currently, I’m working on some exciting level design projects that I can’t wait to share. But I’m always open to new opportunities and collaborations in the gaming space!"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
