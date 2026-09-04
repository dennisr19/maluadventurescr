"use client";

import { IconSearch } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { type Locale, pageCopy } from "@/data/copy";
import { categoryLabels, type TourCategory } from "@/data/tours";
import { CatalogSelect } from "./CatalogSelect";

export type PriceFilter = "all" | "under-75" | "75-125" | "over-125" | "quote";
export type SortOption = "default" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

interface TourFiltersProps {
  query: string;
  category: TourCategory | "all";
  price: PriceFilter;
  sort: SortOption;
  onQueryChange: (query: string) => void;
  onCategoryChange: (category: TourCategory | "all") => void;
  onPriceChange: (price: PriceFilter) => void;
  onSortChange: (sort: SortOption) => void;
  locale: Locale;
}

export function TourFilters({
  query,
  category,
  price,
  sort,
  onQueryChange,
  onCategoryChange,
  onPriceChange,
  onSortChange,
  locale,
}: TourFiltersProps) {
  const copy = pageCopy[locale].catalog;
  const categoryOptions = [
    { label: copy.all, value: "all" },
    ...Object.entries(categoryLabels[locale]).map(([value, label]) => ({ value, label })),
  ];
  const priceOptions = [
    { label: copy.priceAny, value: "all" },
    { label: copy.priceUnder75, value: "under-75" },
    { label: copy.priceMid, value: "75-125" },
    { label: copy.priceAbove125, value: "over-125" },
    { label: copy.priceQuote, value: "quote" },
  ];
  const sortOptions = [
    { label: copy.sortDefault, value: "default" },
    { label: copy.sortPriceAsc, value: "price-asc" },
    { label: copy.sortPriceDesc, value: "price-desc" },
    { label: copy.sortNameAsc, value: "name-asc" },
    { label: copy.sortNameDesc, value: "name-desc" },
  ];

  return (
    <div className="mt-10">
      <label
        className="relative block rounded-full bg-[#36BFB7]/15 p-3 transition-colors focus-within:bg-[#36BFB7]/20 focus-within:ring-3 focus-within:ring-[#bcece7]"
        htmlFor="tour-search"
      >
        <span className="sr-only">{copy.searchLabel}</span>
        <IconSearch
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-8 -translate-y-1/2 text-[#0b6257]"
          size={26}
          stroke={2.2}
        />
        <Input
          id="tour-search"
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.currentTarget.value)}
          placeholder={copy.searchPlaceholder}
          className="h-14 border-0 bg-white pr-6 pl-16 text-lg font-semibold shadow-none placeholder:text-lg placeholder:font-medium placeholder:text-[#58736e] hover:border-transparent focus-visible:border-transparent focus-visible:ring-0"
        />
      </label>

      <div className="mt-6 grid gap-6 border-b border-[#d9e7e3] pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <fieldset className="min-w-0">
          <legend className="mb-2 text-sm font-extrabold text-[#315f58]">
            {copy.categoryLabel}
          </legend>
          <ToggleGroup
            aria-label={copy.filterLabel}
            value={[category]}
            onValueChange={(value) => onCategoryChange((value[0] ?? "all") as TourCategory | "all")}
            className="flex gap-2 overflow-x-auto pb-1"
          >
            {categoryOptions.map((option) => (
              <ToggleGroupItem
                key={option.value}
                value={option.value}
                variant="outline"
                className="min-h-12 shrink-0 rounded-full border-[#a9cbc5] bg-white px-5 text-base font-bold text-[#315f58] hover:border-[#62cec6] hover:bg-[#eef9f7] focus-visible:ring-[#bcece7] aria-pressed:border-[#073F43] aria-pressed:bg-[#073F43] aria-pressed:text-white"
              >
                {option.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </fieldset>

        <div className="grid gap-4 sm:grid-cols-2">
          <CatalogSelect
            label={copy.priceLabel}
            value={price}
            options={priceOptions}
            onValueChange={(value) => onPriceChange(value as PriceFilter)}
          />
          <CatalogSelect
            label={copy.sortLabel}
            value={sort}
            options={sortOptions}
            onValueChange={(value) => onSortChange(value as SortOption)}
          />
        </div>
      </div>
    </div>
  );
}
