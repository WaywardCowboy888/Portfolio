import { useParams } from "next/navigation";
import { projects } from "./projectDetails";
import { Project } from "../types/valibot";

export function roundToEven(num: number): number {
  const rounded = Math.round(num);
  return rounded % 2 === 0 ? rounded : rounded + 2;
}

export default function MasonarySection() {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === Number(id)) as Project;
  const images = project?.images.filter((_, index) => {
    if (project.id === 0) {
      return index !== 6 && index !== 7;
    }
    return true;
  });

  const columns = roundToEven(images.length / 2);

  return (
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className={`grid grid-cols-1 gap-2 sm:grid-cols-4`}>
        {images.map((image, index) => (
          <div className="space-y-2" key={index}>
            <img
              className="aspect-square h-auto w-full rounded-xl object-cover"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
