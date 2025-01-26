import { object, array, string, number, boolean, InferOutput } from "valibot";
import { IconType } from "react-icons";

const projectSchema = object({
  id: number(),
  name: string(),
  description: string(),
  technologies: array(string()),
  techNames: array(string()),
  techLinks: array(string()),
  github: string(),
  video: string(),
  youtubeId: string(),
  image: string(),
  available: boolean(),
  images: array(
    object({
      src: string(),
      alt: string(),
      desc: string(),
    })
  ),
});

export type Project = InferOutput<typeof projectSchema> & {
  technologies?: IconType[]; // Updated this line to use IconType
};
