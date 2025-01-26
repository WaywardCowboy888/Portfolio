import { title } from "process";
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
  video: string;
  youtubeId: string;
  image: string;
  available: boolean;
  images: {
    title?: string;
    src: string;
    alt: string;
    desc?: string;
  }[];
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
    video: "/pcg/pcg.mp4",
    youtubeId: "4loJXP8YAqc",
    image: "/projects/Cave1.png",
    available: true,
    images: [
      {
        src: "/pcg/1.png",
        alt: "Unreal BluePrints",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      },
      {
        src: "/pcg/2.png",
        alt: "Cave 2",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      },
      {
        src: "/pcg/3.png",
        alt: "Cave 3",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      },
      {
        src: "/pcg/4.png",
        alt: "Cave 4",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      },
      {
        src: "/pcg/5.png",
        alt: "Cave 5",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      },
      {
        src: "/pcg/6.png",
        alt: "Cave 6",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      },
      {
        src: "/pcg/7.png",
        alt: "Material Photo",
        title: "Master Material",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      },
      {
        src: "/pcg/8.png",
        alt: "Pcg Graph Photo",
        title: "Pcg Graph",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      },
      // {
      //   src: "/pcg/9.png",
      //   alt: "Cave 9",
      //   desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      // },
      // {
      //   src: "/pcg/10.png",
      //   alt: "Cave 10",
      //   desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      // },
    ],
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
    video: "https://platinumpizza29.wixsite.com/ashwin-gandhi/copy-of-pcg-cave",
    youtubeId: "XiwZJWk_2AQ",
    image: "/projects/hash4.png",
    available: true,
    images: [
      {
        src: "/projects/Cave1.png",
        alt: "Cave 1",
        desc: "Cave 1",
      },
      {
        src: "/projects/Cave2.png",
        alt: "Cave 2",
      },
      {
        src: "/projects/Cave3.png",
        alt: "Cave 3",
      },
      {
        src: "/projects/Cave4.png",
        alt: "Cave 4",
      },
      {
        src: "/projects/Cave5.png",
        alt: "Cave 5",
      },
      {
        src: "/projects/Cave6.png",
        alt: "Cave 6",
      },
      {
        src: "/projects/Cave7.png",
        alt: "Cave 7",
      },
      {
        src: "/projects/Cave8.png",
        alt: "Cave 8",
      },
      {
        src: "/projects/Cave9.png",
        alt: "Cave 9",
      },
    ],
  },
  {
    id: 2,
    name: "City Block",
    description:
      "The environment features vertical exploration opportunities and landmarks, including a train, a store, diverse food stalls, and a lively market. Every detail, from the dynamic layout to the authentic atmosphere, captures the essence of New York City, providing players with a  urban playground that encourages exploration, and immersion of the city.",
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
    video: "/cityBlock/cityblock.mp4",
    youtubeId: "S5Honhsav8o",
    image: "/cityBlock/city1.png",
    available: true,
    images: [
      {
        src: "/cityBlock/city1.png",
        title: "City Block",
        alt: "Unreal BluePrints",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      },
      {
        src: "/cityBlock/city2.png",
        alt: "city 2",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      },
      {
        src: "/cityBlock/city3.png",
        alt: "city 3",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      },
      {
        src: "/cityBlock/city4.png",
        alt: "city 4",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      },
      {
        src: "/cityBlock/city5.png",
        alt: "city 5",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      },
      {
        src: "/cityBlock/city6.png",
        alt: "city 6",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      },
      {
        src: "/cityBlock/city7.png",
        alt: "Cave 7",
        title: "Plan and Reference",
        desc: "I started with gathering references—photos of NYC streets, Pinterest boards, Google Street View, or even movies and games set in NYC. Capture the essence: brownstones, skyscrapers, fire escapes, bustling sidewalks, and street signs. Then sketched a rough map of the block. Think about layout and functionality: where are the streets, alleys, crosswalks, and public spaces? Add a bit of narrative flair, like a market on the corner or a construction site.",
      },
      {
        src: "/cityBlock/city8.png",
        title: "Basic Layout",
        alt: "city 8",
        desc: "I started by using simple shapes like cubes and cylinders to block out the streets, sidewalks, and buildings, ensuring the scale captured NYC's dense and vertical character. The proportions were carefully chosen to evoke the city's unique sense of space and perspective.",
      },
      {
        src: "/cityBlock/city9.png",
        title: "Building Placement",
        alt: "Cave 9",
        desc: "The layout incorporates a variety of structures, including towering skyscrapers, medium-sized office buildings, and low storefronts, to create a dynamic and visually engaging environment. Gaps were intentionally left for alleyways, entryways, and staircases, reflecting NYC's iconic layered navigation.",
      },
      {
        src: "/cityBlock/city10.png",
        title: "Adding Details",
        alt: "Cave 10",
        desc: "Placeholder props such as street signs, pedestrians, streetlights, benches, and trash cans were added to bring the scene to life. I considered pedestrian flow, imagining where people might walk, pause, or explore, and strategically placed details to enhance immersion and guide player movement.",
      },
    ],
  },
];
