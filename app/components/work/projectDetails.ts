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
        alt: "Cave 7",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      },
      {
        src: "/pcg/8.png",
        alt: "Cave 8",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      },
      {
        src: "/pcg/9.png",
        alt: "Cave 9",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      },
      {
        src: "/pcg/10.png",
        alt: "Cave 10",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      },
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
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      },
      {
        src: "/cityBlock/city8.png",
        alt: "city 8",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      },
      {
        src: "/cityBlock/city9.png",
        alt: "Cave 9",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      },
      {
        src: "/cityBlock/city10.png",
        alt: "Cave 10",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, nobis dolorum accusantium hic exercitationem tenetur quis impedit libero atque ipsam est. Eos vero minima doloribus quae magni ratione maiores dignissimos eveniet animi quod. Ex labore doloribus iure nulla ipsum adipisci, iusto ab? Excepturi corporis numquam ipsum expedita est consectetur!",
      },
    ],
  },
];
