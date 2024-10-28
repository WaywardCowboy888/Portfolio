import {
  SiCplusplus,
  SiFramer,
  SiGithub,
  SiNeovim,
  SiNextdotjs,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiWebgl,
  SiZig,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
  {
    id: 0,
    name: "PCG Cave",
    description:
      "open-source animated components built with React, Typescript, Tailwind CSS, and Framer Motion. 100% open-source, and customizable.",
    technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
    techNames: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
      "https://www.framer.com/motion/",
    ],
    github: "https://github.com/karthikmudunuri/eldoraui",
    demo: "https://platinumpizza29.wixsite.com/ashwin-gandhi/copy-of-retro-doom-level-design",
    image: "/projects/Cave1.png",
    available: true,
  },
  {
    id: 1,
    name: "Hash 0123",
    description: "Developed an virtual mall by using Three.js and Typescript..",
    technologies: [SiWebgl, SiTypescript, SiReact],
    techNames: ["WebGL", "Typescript", "React"],
    techLinks: [
      "https://get.webgl.org/",
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
    ],
    github: "https://github.com/karthikmudunuri/VRMALL",
    demo: "https://platinumpizza29.wixsite.com/ashwin-gandhi/copy-of-pcg-cave",
    image: "/projects/hash4.png",
    available: true,
  },
];
