import { useParams } from "next/navigation";
import { projects } from "./projectDetails";
import { Project } from "../types/valibot";
import { Carousel } from "../carousel.tsx";

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

  // @ts-ignore
  return (
    <div className="mx-auto h-96 max-w-full overflow-hidden px-4 py-10 sm:px-6 md:h-full lg:px-8 lg:pb-16">
      <div className={`grid grid-cols-1 gap-2 sm:grid-cols-4`}>
        <Carousel
          slides={images.map((image) => ({
            src: image.src,
          }))}
        />
      </div>
    </div>
  );
}
