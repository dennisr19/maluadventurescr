"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { type Locale, pageCopy } from "@/data/copy";
import { localizeTour, type TourCategory, tours } from "@/data/tours";
import { CatalogWaves } from "./CatalogWaves";
import { TourCard } from "./TourCard";
import { type PriceFilter, type SortOption, TourFilters } from "./TourFilters";

interface TourCatalogProps {
  locale?: Locale;
}

export function TourCatalog({ locale = "en" }: TourCatalogProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<TourCategory | "all">("all");
  const [price, setPrice] = useState<PriceFilter>("all");
  const [sort, setSort] = useState<SortOption>("default");
  const copy = pageCopy[locale].catalog;

  const visibleTours = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();

    const filteredTours = tours
      .map((tour) => localizeTour(tour, locale))
      .filter((tour) => {
        const matchesCategory = category === "all" || tour.category === category;
        const matchesPrice =
          price === "all" ||
          (price === "under-75" && tour.startingPrice !== undefined && tour.startingPrice <= 75) ||
          (price === "75-125" &&
            tour.startingPrice !== undefined &&
            tour.startingPrice > 75 &&
            tour.startingPrice <= 125) ||
          (price === "over-125" && tour.startingPrice !== undefined && tour.startingPrice > 125) ||
          (price === "quote" && tour.startingPrice === undefined);
        const matchesQuery =
          normalizedQuery.length === 0 ||
          `${tour.name} ${tour.summary}`.toLocaleLowerCase().includes(normalizedQuery);

        return matchesCategory && matchesPrice && matchesQuery;
      });

    return filteredTours.sort((first, second) => {
      if (sort === "name-asc") return first.name.localeCompare(second.name, locale);
      if (sort === "name-desc") return second.name.localeCompare(first.name, locale);
      if (sort === "price-asc" || sort === "price-desc") {
        if (first.startingPrice === undefined) return 1;
        if (second.startingPrice === undefined) return -1;
        return sort === "price-asc"
          ? first.startingPrice - second.startingPrice
          : second.startingPrice - first.startingPrice;
      }
      return 0;
    });
  }, [category, locale, price, query, sort]);

  const clearFilters = () => {
    setQuery("");
    setCategory("all");
    setPrice("all");
    setSort("default");
  };

  return (
    <section
      id="tours"
      aria-labelledby="tours-title"
      className="relative bg-white px-5 pt-32 pb-36 sm:px-8 sm:pt-36 sm:pb-40"
    >
      <CatalogWaves />
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="mx-auto text-center lg:w-4/5">
          <p className="text-sm font-extrabold tracking-[0.16em] text-[#0b6257] uppercase sm:text-base">
            {copy.eyebrow}
          </p>
          <h2
            id="tours-title"
            className="mt-3 text-4xl leading-[1.05] font-extrabold tracking-[-0.04em] text-[#073F43] sm:text-5xl"
          >
            {copy.title}
          </h2>
          <p className="mx-auto mt-5 text-lg leading-8 text-[#496c66] lg:w-3/4">{copy.intro}</p>
        </div>

        <TourFilters
          query={query}
          category={category}
          price={price}
          sort={sort}
          onQueryChange={setQuery}
          onCategoryChange={setCategory}
          onPriceChange={setPrice}
          onSortChange={setSort}
          locale={locale}
        />

        <div className="mt-7 flex items-center justify-between gap-4" aria-live="polite">
          <p className="text-lg text-[#496c66]">
            <span className="font-extrabold text-[#073F43] tabular-nums">
              {visibleTours.length}
            </span>{" "}
            {visibleTours.length === 1 ? copy.singular : copy.plural}
          </p>
        </div>

        {visibleTours.length > 0 ? (
          <div className="mt-6 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} locale={locale} />
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-[1.35rem] border border-dashed border-[#9ebbb5] px-6 py-16 text-center">
            <h3 className="text-lg font-semibold text-[#183f3a]">{copy.emptyTitle}</h3>
            <p className="mt-2 text-base text-[#58736e]">{copy.emptyBody}</p>
            <Button type="button" variant="outline" className="mt-5" onClick={clearFilters}>
              {copy.reset}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
