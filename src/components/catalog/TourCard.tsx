import { IconBrandWhatsapp, IconClock } from "@tabler/icons-react";
import { TourCategoryBadge } from "@/components/TourCategoryBadge";
import { TourDetailAction } from "@/components/TourDetailAction";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createWhatsappUrl } from "@/data/contact";
import { type Locale, pageCopy } from "@/data/copy";
import { tourImages } from "@/data/tour-images";
import { categoryLabels, type Tour } from "@/data/tours";

interface TourCardProps {
  tour: Tour;
  locale: Locale;
}

export function TourCard({ tour, locale }: TourCardProps) {
  const copy = pageCopy[locale].catalog;
  const message =
    locale === "es"
      ? `Hola Malú Adventures, me gustaría solicitar el tour ${tour.name}.`
      : `Hello Malú Adventures, I'd like to request the ${tour.name} tour.`;
  const detailHref = `${locale === "es" ? "/es" : ""}/tours/${tour.id}/`;

  return (
    <article id={`tour-${tour.id}`} className="h-full scroll-mt-28">
      <Card className="group h-full overflow-hidden rounded-[1.75rem] border border-[#d6e9e5] bg-white p-0 shadow-[0_18px_50px_rgba(7,63,67,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#afd7d0] hover:shadow-[0_24px_64px_rgba(7,63,67,0.13)]">
        <div className="relative aspect-[16/10] overflow-hidden bg-[#dff4ee]">
          <img
            src={tourImages[tour.id]}
            alt=""
            width={960}
            height={600}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
          />
          <div className="absolute top-4 left-4">
            <TourCategoryBadge
              category={tour.category}
              label={categoryLabels[locale][tour.category]}
            />
          </div>
        </div>

        <CardContent className="flex flex-1 flex-col p-6">
          <h3 className="text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#073F43]">
            {tour.name}
          </h3>
          <p className="mt-3 text-base leading-7 text-[#496c66]">{tour.summary}</p>

          {tour.schedule && (
            <div className="mt-4 flex items-start gap-2.5 text-base leading-7 font-semibold text-[#315f58]">
              <IconClock
                aria-hidden="true"
                className="mt-1 shrink-0 text-[#13958f]"
                size={20}
                stroke={2}
              />
              <p>{tour.schedule.join(" · ")}</p>
            </div>
          )}

          <div className="mt-5 border-t border-[#e1ece9] pt-4">
            <p className="text-sm font-bold text-[#58736e]">{copy.cashPrice}</p>
            <p className="mt-1 text-2xl font-extrabold text-[#073F43] tabular-nums">
              {tour.priceLabel}
            </p>
            {tour.prices.length > 1 && (
              <dl className="mt-3 grid gap-2">
                {tour.prices.map((price) => (
                  <div
                    key={price.label}
                    className="flex items-center justify-between gap-4 text-sm"
                  >
                    <dt className="text-[#58736e]">{price.label}</dt>
                    <dd className="font-extrabold text-[#073F43] tabular-nums">{price.amount}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          <div className="mt-auto flex items-center gap-3 pt-6">
            <TourDetailAction
              href={detailHref}
              label={copy.view}
              accessibleLabel={`${copy.view}: ${tour.name}`}
            />
            <Button
              render={<a href={createWhatsappUrl(message)} target="_blank" rel="noreferrer" />}
              variant="outline"
              size="icon-lg"
              className="size-14 min-h-14 shrink-0 rounded-full border-[#b7d7d1] bg-white text-[#0b6257] hover:border-[#36BFB7] hover:bg-[#e9f8f6] hover:text-[#073F43]"
              aria-label={`${copy.request}: ${tour.name}`}
            >
              <IconBrandWhatsapp aria-hidden="true" size={25} stroke={2.2} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}
