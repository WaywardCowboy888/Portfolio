export default function MasonarySection() {
  //TODO:get the parameters and check for the number
  //TODO: according to that number change the folder for images
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 dark:bg-inherit sm:px-6 lg:px-8 lg:py-14">
      <div className="grid gap-6 sm:grid-cols-12">
        <div className="col-span-12 sm:col-span-7 sm:self-end md:col-span-8 lg:col-span-5 lg:col-start-3">
          <a
            className="group relative block overflow-hidden rounded-xl focus:outline-none"
            href="#"
          >
            <div className="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
              <img
                className="w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
                src="/pcg/10.png"
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
                src="/pcg/9.png"
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
                src="/pcg/3.png"
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
                src="pcg/4.png"
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
                src="/pcg/5.png"
                alt="Masonry Cards Image"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
