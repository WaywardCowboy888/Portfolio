import {
  object,
  array,
  string,
  number,
  boolean,
  InferOutput,
  value,
  any,
} from "valibot";
import { IconType } from "react-icons";

const projectSchema = object({
  id: number(),
  name: string(),
  description: string(),
  technologies: array(string()), // Changed from array(string()) to simply array()
  techNames: array(string()),
  techLinks: array(string()),
  github: string(),
  demo: string(),
  image: string(),
  available: boolean(),
});

export type Project = InferOutput<typeof projectSchema> & {
  technologies?: IconType[]; // Updated this line to use IconType
};
