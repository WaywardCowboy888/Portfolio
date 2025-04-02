import React from "react";
import { Project } from "../components/types/valibot";

const HeroBackground1 = ({ props }: { props: Project }) => {
  return (
    <div className="absolute inset-0">
        <iframe
            src={`https://www.youtube.com/embed/${props.youtubeId}?autoplay=1&mute=1&playsinline=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-bg-dark to-transparent" />
    </div>
  );
};

export default HeroBackground1;
