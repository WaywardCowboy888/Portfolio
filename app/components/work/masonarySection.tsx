import { useParams } from "next/navigation";
import { projects } from "./projectDetails";
import { Project } from "../types/valibot";

export default function MasonarySection() {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === Number(id)) as Project;
  const images = project?.images;

  //TODO:get the parameters and check for the number
  //TODO: according to that number change the folder for images
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 dark:bg-inherit">
      <div className="grid gap-6 sm:grid-cols-12">
        <div className="col-span-12 sm:col-span-7 sm:self-end md:col-span-8 lg:col-span-5 lg:col-start-3">
          <a
            className="group relative block overflow-hidden rounded-xl focus:outline-none"
            href="#"
          >
            <div className="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
              <img
                className="w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
                src={images[0].src}
                alt="Masonry Cards Image"
              />
            </div>
          </a>
        </div>

        <div className="col-span-12 sm:col-span-5 sm:self-end md:col-span-4 lg:col-span-3">
          <a
            className="group relative block overflow-hidden rounded-xl focus:outline-none"
            href="#"
          >
            <div className="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
              <img
                className="w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
                src={images[9].src}
                alt="Masonry Cards Image"
              />
            </div>
          </a>
        </div>

        <div className="col-span-12 md:col-span-4">
          <a
            className="group relative block overflow-hidden rounded-xl focus:outline-none"
            href="#"
          >
            <div className="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
              <img
                className="w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
                src={images[3].src}
                alt="Masonry Cards Image"
              />
            </div>
          </a>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-4">
          <a
            className="group relative block overflow-hidden rounded-xl focus:outline-none"
            href="#"
          >
            <div className="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
              <img
                className="w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
                src={images[4].src}
                alt="Masonry Cards Image"
              />
            </div>
          </a>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-4">
          <a
            className="group relative block overflow-hidden rounded-xl focus:outline-none"
            href="#"
          >
            <div className="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
              <img
                className="w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
                src={images[5].src}
                alt="Masonry Cards Image"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
