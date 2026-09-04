import { IconArrowDown, IconBrandWhatsapp, IconClock } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import type { Tour } from "@/data/tours";

interface FeaturedTourCardProps {
  tour: Tour;
  image: string;
  imageAlt: string;
  categoryLabel: string;
  detailHref: string;
  requestHref: string;
  viewLabel: string;
  requestLabel: string;
}

export function FeaturedTourCard({
  tour,
  image,
  imageAlt,
  categoryLabel,
  detailHref,
  requestHref,
  viewLabel,
  requestLabel,
}: FeaturedTourCardProps) {
  return (
    <article className="group relative isolate min-h-[35rem] overflow-hidden rounded-[2rem] bg-[#073F43] shadow-[0_24px_60px_rgba(7,63,67,0.16)]">
      <img
        src={image}
        alt={imageAlt}
        width={900}
        height={1125}
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
      />
      <div className="absolute inset-0 -z-10 bg-[#073F43]/12" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[62%] bg-linear-to-t from-[#032f32]/96 via-[#073F43]/58 to-transparent" />

      <div className="flex min-h-[35rem] flex-col justify-between p-4 sm:p-5">
        <span className="w-fit rounded-full bg-[#F1EADC] px-4 py-2 text-sm font-extrabold text-[#285943] shadow-[0_10px_28px_rgba(7,63,67,0.18)]">
          {categoryLabel}
        </span>

        <div className="px-1 pb-1 text-[#F1EADC] sm:px-2 sm:pb-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl leading-tight font-extrabold tracking-[-0.035em] text-white">
              {tour.name}
            </h3>
            <span className="shrink-0 text-xl font-extrabold text-[#F4C45B] tabular-nums">
              {tour.priceLabel}
            </span>
          </div>

          <p className="mt-3 text-base leading-7 text-[#cce3df]">{tour.summary}</p>

          {tour.schedule && (
            <div className="mt-3 flex items-start gap-2 text-sm leading-6 font-semibold text-[#bce2dc]">
              <IconClock
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-[#72d7d1]"
                size={19}
                stroke={2}
              />
              <p>{tour.schedule.join(" · ")}</p>
            </div>
          )}

          <div className="mt-5 flex items-center gap-3">
            <Button
              render={<a href={detailHref} />}
              variant="ghost"
              className="group/action h-12 min-w-0 flex-1 justify-start gap-2.5 rounded-full bg-white py-1.5 pr-5 pl-1.5 text-base font-extrabold text-[#073F43] hover:bg-[#F1EADC] hover:text-[#073F43]"
              aria-label={`${viewLabel}: ${tour.name}`}
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#36BFB7]">
                <IconArrowDown
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover/action:-rotate-90 motion-reduce:transition-none"
                  size={20}
                  stroke={2.4}
                />
              </span>
              {viewLabel}
            </Button>
            <Button
              render={<a href={requestHref} target="_blank" rel="noreferrer" />}
              variant="ghost"
              size="icon-lg"
              className="size-12 min-h-12 shrink-0 rounded-full border border-white/30 bg-white/8 text-white hover:border-[#72d7d1] hover:bg-white/15 hover:text-white"
              aria-label={`${requestLabel}: ${tour.name}`}
            >
              <IconBrandWhatsapp aria-hidden="true" size={24} stroke={2.2} />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
