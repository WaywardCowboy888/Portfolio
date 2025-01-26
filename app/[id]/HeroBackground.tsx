import React from "react";
import { Project } from "../components/types/valibot";

const HeroBackground1 = ({ props }: { props: Project }) => {
  return (
    <div className="absolute inset-0">
      <video
        className="h-full w-full object-cover"
        autoPlay={true}
        playsInline={true}
        loop
        muted
        preload="auto"
      >
        <source src={props.video} type="video/mp4" />
      </video>

      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-bg-dark to-transparent" />
    </div>
  );
};

export default HeroBackground1;
