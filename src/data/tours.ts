import type { Locale } from "./copy";

export type TourCategory = "nature" | "water" | "adrenaline" | "transport";

export interface TourPrice {
  label: string;
  amount: string;
}

export interface Tour {
  id: string;
  name: string;
  category: TourCategory;
  summary: string;
  startingPrice?: number;
  priceLabel: string;
  prices: TourPrice[];
  schedule?: string[];
}

export const categoryLabels: Record<Locale, Record<TourCategory, string>> = {
  en: {
    nature: "Nature",
    water: "Ocean & water",
    adrenaline: "Adrenaline",
    transport: "Transport",
  },
  es: {
    nature: "Naturaleza",
    water: "Océano y agua",
    adrenaline: "Adrenalina",
    transport: "Transporte",
  },
};

export const tours: Tour[] = [
  {
    id: "manuel-antonio",
    name: "Manuel Antonio National Park",
    category: "nature",
    summary: "Explore Manuel Antonio National Park.",
    startingPrice: 65,
    priceLabel: "$65",
    prices: [{ label: "Per person", amount: "$65" }],
    schedule: ["7:30 AM", "12:30 PM"],
  },
  {
    id: "night-hike",
    name: "Night Hike",
    category: "nature",
    summary: "A nighttime hiking experience.",
    startingPrice: 65,
    priceLabel: "$65",
    prices: [{ label: "Per person", amount: "$65" }],
    schedule: ["5:30 PM"],
  },
  {
    id: "canopy",
    name: "Canopy",
    category: "adrenaline",
    summary: "A canopy adventure through the forest.",
    startingPrice: 95,
    priceLabel: "$95",
    prices: [{ label: "Per person", amount: "$95" }],
    schedule: ["7:20 AM", "10:20 AM", "1:20 PM"],
  },
  {
    id: "atv",
    name: "ATV",
    category: "adrenaline",
    summary: "Choose a single or double machine.",
    startingPrice: 110,
    priceLabel: "From $110",
    prices: [
      { label: "Single machine", amount: "$110" },
      { label: "Double machine", amount: "$140" },
    ],
    schedule: ["7:30 AM", "10:30 AM", "1:30 PM"],
  },
  {
    id: "side-by-side",
    name: "Side by Side",
    category: "adrenaline",
    summary: "Options for groups of two to four people.",
    startingPrice: 290,
    priceLabel: "From $290",
    prices: [
      { label: "2 people", amount: "$290" },
      { label: "3 people", amount: "$370" },
      { label: "4 people", amount: "$450" },
    ],
  },
  {
    id: "jet-ski",
    name: "Jet Ski",
    category: "water",
    summary: "Available for one or two people.",
    startingPrice: 140,
    priceLabel: "From $140",
    prices: [
      { label: "1 person", amount: "$140" },
      { label: "2 people", amount: "$160" },
    ],
    schedule: ["7:00 AM", "10:00 AM", "1:00 PM", "3:00 PM"],
  },
  {
    id: "mangrove",
    name: "Mangrove Tour",
    category: "nature",
    summary: "Explore the mangroves by boat or kayak.",
    startingPrice: 85,
    priceLabel: "$85",
    prices: [{ label: "Per person", amount: "$85" }],
    schedule: ["7:30 AM", "10:30 AM", "1:30 PM", "3:30 PM"],
  },
  {
    id: "whales-uvita",
    name: "Whales Tour in Uvita",
    category: "nature",
    summary: "A whale-watching tour in Uvita.",
    startingPrice: 80,
    priceLabel: "$80",
    prices: [{ label: "Per person", amount: "$80" }],
    schedule: ["8:30 AM", "12:30 PM"],
  },
  {
    id: "rafting-savegre",
    name: "Rafting Río Savegre",
    category: "adrenaline",
    summary: "A rafting experience on the Río Savegre.",
    startingPrice: 115,
    priceLabel: "$115",
    prices: [{ label: "Per person", amount: "$115" }],
  },
  {
    id: "bike-ocean-ride",
    name: "Bike Ocean Ride",
    category: "adrenaline",
    summary: "A coastal bike experience.",
    startingPrice: 50,
    priceLabel: "$50",
    prices: [{ label: "Per person", amount: "$50" }],
  },
  {
    id: "catamaran",
    name: "Catamaran",
    category: "water",
    summary: "A catamaran experience on the Pacific.",
    startingPrice: 89,
    priceLabel: "$89",
    prices: [{ label: "Per person", amount: "$89" }],
    schedule: ["8:30 AM", "1:30 PM"],
  },
  {
    id: "horseback-riding",
    name: "Horseback Riding",
    category: "nature",
    summary: "Choose a waterfall or beach tour.",
    startingPrice: 75,
    priceLabel: "From $75",
    prices: [
      { label: "Beach tour", amount: "$75" },
      { label: "Waterfall tour", amount: "$80" },
    ],
    schedule: ["7:30 AM", "12:30 PM"],
  },
  {
    id: "fishing",
    name: "Fishing",
    category: "water",
    summary: "Price depends on the type of fishing and boat.",
    priceLabel: "Ask for price",
    prices: [{ label: "By fishing and boat type", amount: "Custom" }],
    schedule: ["Half day: 7:30 AM-12:30 PM", "Full day: 7:30 AM-4:30 PM"],
  },
  {
    id: "private-transportation",
    name: "Private Transportation",
    category: "transport",
    summary: "Price depends on the number of people and destination.",
    priceLabel: "Ask for price",
    prices: [{ label: "By group and destination", amount: "Custom" }],
    schedule: ["Time by arrangement"],
  },
  {
    id: "cano-island-snorkeling",
    name: "Isla del Caño Snorkeling",
    category: "water",
    summary: "Snorkeling at Isla del Caño.",
    startingPrice: 120,
    priceLabel: "From $120",
    prices: [
      { label: "Children under 12", amount: "$120" },
      { label: "Adult", amount: "$150" },
    ],
    schedule: ["6:30 AM"],
  },
  {
    id: "ocean-kayak",
    name: "Ocean Kayak",
    category: "water",
    summary: "An ocean kayak experience.",
    startingPrice: 70,
    priceLabel: "$70",
    prices: [{ label: "Per person", amount: "$70" }],
    schedule: ["8:30 AM", "1:30 PM"],
  },
  {
    id: "tortuga-island",
    name: "Tortuga Island Full Day",
    category: "water",
    summary: "A full-day experience at Tortuga Island.",
    startingPrice: 175,
    priceLabel: "$175",
    prices: [{ label: "Per person", amount: "$175" }],
    schedule: ["From 8:00 AM, by arrangement"],
  },
  {
    id: "parasailing",
    name: "Parasailing",
    category: "adrenaline",
    summary: "Single, double, and triple options.",
    startingPrice: 95,
    priceLabel: "From $95",
    prices: [
      { label: "Single", amount: "$95" },
      { label: "Double", amount: "$185" },
      { label: "Triple", amount: "$230" },
    ],
  },
  {
    id: "crocodile-tour",
    name: "Crocodile Tour Tárcoles River",
    category: "nature",
    summary: "A crocodile tour on the Tárcoles River.",
    startingPrice: 45,
    priceLabel: "$45",
    prices: [{ label: "Per person", amount: "$45" }],
    schedule: ["8:00 AM", "10:00 AM", "12:00 PM", "3:00 PM"],
  },
  {
    id: "nauyaca-chontales",
    name: "Nauyaca or Eco Chontales Full Day",
    category: "nature",
    summary: "A full-day waterfall experience.",
    startingPrice: 139,
    priceLabel: "$139",
    prices: [{ label: "Per person", amount: "$139" }],
  },
  {
    id: "mangrove-fishing",
    name: "Mangrove Fishing",
    category: "water",
    summary: "A fishing experience in the mangroves.",
    priceLabel: "Ask for price",
    prices: [{ label: "Contact us for price", amount: "Custom" }],
    schedule: ["8:00 AM", "1:00 PM"],
  },
  {
    id: "corcovado",
    name: "Corcovado",
    category: "nature",
    summary: "A full-day Corcovado experience.",
    priceLabel: "Ask for price",
    prices: [{ label: "Contact us for price", amount: "Custom" }],
    schedule: ["6:30 AM-3:00 PM"],
  },
  {
    id: "snorkeling",
    name: "Snorkeling",
    category: "water",
    summary: "A snorkeling experience with three daily time options.",
    priceLabel: "Ask for price",
    prices: [{ label: "Contact us for price", amount: "Custom" }],
    schedule: ["8:30 AM", "11:30 AM", "2:30 PM"],
  },
];

interface TourTranslation {
  name: string;
  summary: string;
  priceLabel?: string;
  priceLabels?: string[];
  priceAmounts?: string[];
  schedule?: string[];
}

const spanishTourCopy: Record<string, TourTranslation> = {
  "manuel-antonio": {
    name: "Parque Nacional Manuel Antonio",
    summary: "Explora el Parque Nacional Manuel Antonio.",
    priceLabels: ["Por persona"],
  },
  "night-hike": {
    name: "Caminata nocturna",
    summary: "Una caminata para descubrir la vida nocturna del bosque.",
    priceLabels: ["Por persona"],
  },
  canopy: {
    name: "Canopy",
    summary: "Una aventura de canopy entre la selva.",
    priceLabels: ["Por persona"],
  },
  atv: {
    name: "ATV",
    summary: "Elige una máquina sencilla o doble.",
    priceLabel: "Desde $110",
    priceLabels: ["Máquina sencilla", "Máquina doble"],
  },
  "side-by-side": {
    name: "Side by Side",
    summary: "Opciones para grupos de dos a cuatro personas.",
    priceLabel: "Desde $290",
    priceLabels: ["2 personas", "3 personas", "4 personas"],
  },
  "jet-ski": {
    name: "Moto acuática",
    summary: "Disponible para una o dos personas.",
    priceLabel: "Desde $140",
    priceLabels: ["1 persona", "2 personas"],
  },
  mangrove: {
    name: "Tour de manglar",
    summary: "Explora los manglares en bote o kayak.",
    priceLabels: ["Por persona"],
  },
  "whales-uvita": {
    name: "Avistamiento de ballenas en Uvita",
    summary: "Un tour para observar ballenas en Uvita.",
    priceLabels: ["Por persona"],
  },
  "rafting-savegre": {
    name: "Rafting en el río Savegre",
    summary: "Una experiencia de rafting en el río Savegre.",
    priceLabels: ["Por persona"],
  },
  "bike-ocean-ride": {
    name: "Paseo en bicicleta por la costa",
    summary: "Una experiencia en bicicleta junto al océano.",
    priceLabels: ["Por persona"],
  },
  catamaran: {
    name: "Catamarán",
    summary: "Una experiencia en catamarán por el Pacífico.",
    priceLabels: ["Por persona"],
  },
  "horseback-riding": {
    name: "Paseo a caballo",
    summary: "Elige un tour de playa o catarata.",
    priceLabel: "Desde $75",
    priceLabels: ["Tour de playa", "Tour de catarata"],
  },
  fishing: {
    name: "Pesca",
    summary: "El precio depende del tipo de pesca y embarcación.",
    priceLabel: "Consultar precio",
    priceLabels: ["Según pesca y embarcación"],
    priceAmounts: ["Personalizado"],
    schedule: ["Medio día: 7:30 AM-12:30 PM", "Día completo: 7:30 AM-4:30 PM"],
  },
  "private-transportation": {
    name: "Transporte privado",
    summary: "El precio depende del número de personas y el destino.",
    priceLabel: "Consultar precio",
    priceLabels: ["Segun grupo y destino"],
    priceAmounts: ["Personalizado"],
    schedule: ["Horario a conveniencia"],
  },
  "cano-island-snorkeling": {
    name: "Snorkeling en Isla del Caño",
    summary: "Snorkeling en Isla del Caño.",
    priceLabel: "Desde $120",
    priceLabels: ["Menores de 12 años", "Adulto"],
  },
  "ocean-kayak": {
    name: "Kayak en el océano",
    summary: "Una experiencia en kayak por el océano.",
    priceLabels: ["Por persona"],
  },
  "tortuga-island": {
    name: "Isla Tortuga día completo",
    summary: "Una experiencia de día completo en Isla Tortuga.",
    priceLabels: ["Por persona"],
    schedule: ["Desde las 8:00 AM, a conveniencia"],
  },
  parasailing: {
    name: "Parasailing",
    summary: "Opciones sencilla, doble y triple.",
    priceLabel: "Desde $95",
    priceLabels: ["Sencillo", "Doble", "Triple"],
  },
  "crocodile-tour": {
    name: "Tour de cocodrilos en el río Tárcoles",
    summary: "Un tour de cocodrilos por el río Tárcoles.",
    priceLabels: ["Por persona"],
  },
  "nauyaca-chontales": {
    name: "Nauyaca o Eco Chontales día completo",
    summary: "Una experiencia de día completo entre cataratas.",
    priceLabels: ["Por persona"],
  },
  "mangrove-fishing": {
    name: "Pesca en manglar",
    summary: "Una experiencia de pesca en los manglares.",
    priceLabel: "Consultar precio",
    priceLabels: ["Contactanos para conocer el precio"],
    priceAmounts: ["Personalizado"],
  },
  corcovado: {
    name: "Corcovado",
    summary: "Una experiencia de día completo en Corcovado.",
    priceLabel: "Consultar precio",
    priceLabels: ["Contactanos para conocer el precio"],
    priceAmounts: ["Personalizado"],
  },
  snorkeling: {
    name: "Snorkeling",
    summary: "Una experiencia de snorkeling con tres horarios diarios.",
    priceLabel: "Consultar precio",
    priceLabels: ["Contactanos para conocer el precio"],
    priceAmounts: ["Personalizado"],
  },
};

export function localizeTour(tour: Tour, locale: Locale): Tour {
  if (locale === "en") return tour;

  const translated = spanishTourCopy[tour.id];
  if (!translated) return tour;

  return {
    ...tour,
    name: translated.name,
    summary: translated.summary,
    priceLabel: translated.priceLabel ?? tour.priceLabel,
    prices: tour.prices.map((price, index) => ({
      label: translated.priceLabels?.[index] ?? price.label,
      amount: translated.priceAmounts?.[index] ?? price.amount,
    })),
    schedule: translated.schedule ?? tour.schedule,
  };
}
