import type { FeaturedTour } from "@/data/featured-tours";
import { FeaturedTourCard } from "./FeaturedTourCard";

interface FeaturedTourGridProps {
  tours: Array<FeaturedTour & { categoryLabel: string; detailHref: string; requestHref: string }>;
  copy: {
    eyebrow: string;
    title: string;
    intro: string;
    view: string;
    request: string;
  };
}

export function FeaturedTourGrid({ tours, copy }: FeaturedTourGridProps) {
  return (
    <section aria-labelledby="featured-title" className="bg-[#FAF8F3] px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto text-center lg:w-4/5">
          <p className="text-sm font-extrabold tracking-[0.16em] text-[#0b6257] uppercase sm:text-base">
            {copy.eyebrow}
          </p>
          <h2
            id="featured-title"
            className="mt-3 text-4xl leading-[1.05] font-extrabold tracking-[-0.04em] text-[#073F43] sm:text-5xl"
          >
            {copy.title}
          </h2>
          <p className="mx-auto mt-5 text-lg leading-8 text-[#496c66] lg:w-3/4">{copy.intro}</p>
        </div>

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((item) => (
            <FeaturedTourCard
              key={item.tour.id}
              {...item}
              viewLabel={copy.view}
              requestLabel={copy.request}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
