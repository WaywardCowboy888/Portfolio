import {
  SiFramer,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWebgl,
} from "react-icons/si";

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
      "In this project, I’m building an immersive cave environment in Unreal Engine using only PCG (Procedural Content Generation). It starts with shaping the cave using Unreal's modeling tools, then adding details like rock formations, shimmering crystals, and gold mineral deposits. To keep things streamlined, I’m using a single master material to create all the textures for the environment. I’m also leveraging procedural generation to automatically populate the cave with rocks and formations, making it feel more natural. For atmosphere, I’m using Niagara to create effects like floating dust particles and rolling fog. Finally, I’ll do a lighting pass to bring everything together and achieve the perfect look.",
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
