import type { Locale } from "./copy";
import { localizeTour, type Tour, tours } from "./tours";

export interface FeaturedTourDefinition {
  id: string;
  image: string;
  alt: Record<Locale, string>;
}

export interface FeaturedTour {
  tour: Tour;
  image: string;
  imageAlt: string;
}

export const featuredTourDefinitions: FeaturedTourDefinition[] = [
  {
    id: "manuel-antonio",
    image: "/images/Parque%20nacional%20Manuel%20(2).jpg",
    alt: {
      en: "Beach and rainforest at Manuel Antonio National Park",
      es: "Playa y selva en el Parque Nacional Manuel Antonio",
    },
  },
  {
    id: "mangrove",
    image: "/images/Kayak%20manglar%20(1).jpg",
    alt: {
      en: "Kayak tour through a Costa Rican mangrove",
      es: "Tour en kayak por un manglar de Costa Rica",
    },
  },
  {
    id: "jet-ski",
    image: "/images/Jetsky(1).jpg",
    alt: {
      en: "Jet ski tour on Costa Rica's Pacific Coast",
      es: "Tour en moto acuática por la costa del Pacífico de Costa Rica",
    },
  },
];

export function getFeaturedTour(definition: FeaturedTourDefinition, locale: Locale): FeaturedTour {
  const sourceTour = tours.find((tour) => tour.id === definition.id);
  if (!sourceTour) throw new Error(`Missing featured tour: ${definition.id}`);

  return {
    tour: localizeTour(sourceTour, locale),
    image: definition.image,
    imageAlt: definition.alt[locale],
  };
}
