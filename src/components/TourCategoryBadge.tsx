import { type Icon, IconBolt, IconCar, IconLeaf, IconSailboat2 } from "@tabler/icons-react";
import type { TourCategory } from "@/data/tours";

interface TourCategoryBadgeProps {
  category: TourCategory;
  label: string;
}

const icons: Record<TourCategory, Icon> = {
  nature: IconLeaf,
  water: IconSailboat2,
  adrenaline: IconBolt,
  transport: IconCar,
};

const surfaces: Record<TourCategory, string> = {
  nature: "bg-[#e5f2df] text-[#27613a]",
  water: "bg-[#e1f3f8] text-[#176174]",
  adrenaline: "bg-[#f8eed7] text-[#76501c]",
  transport: "bg-[#e9edec] text-[#435b57]",
};

export function TourCategoryBadge({ category, label }: TourCategoryBadgeProps) {
  const CategoryIcon = icons[category];

  return (
    <span
      className={`inline-flex min-h-10 items-center gap-2 rounded-full px-3.5 text-sm font-extrabold shadow-[0_8px_20px_rgba(7,63,67,0.12)] ${surfaces[category]}`}
    >
      <CategoryIcon aria-hidden="true" size={19} stroke={2} />
      {label}
    </span>
  );
}
