import { IconArrowDown } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

interface TourDetailActionProps {
  href: string;
  label: string;
  accessibleLabel: string;
}

export function TourDetailAction({ href, label, accessibleLabel }: TourDetailActionProps) {
  return (
    <Button
      render={<a href={href} />}
      variant="ghost"
      className="group/action h-auto min-h-14 min-w-0 flex-1 shrink justify-start gap-3 rounded-full bg-[#36BFB7]/15 py-2 pr-5 pl-2 text-base font-extrabold text-[#073F43] hover:bg-[#36BFB7]/25 hover:text-[#073F43]"
      aria-label={accessibleLabel}
    >
      <span className="flex size-11 items-center justify-center rounded-full bg-[#36BFB7] text-[#073F43]">
        <IconArrowDown
          aria-hidden="true"
          className="transition-transform duration-300 ease-out group-hover/action:-rotate-90 motion-reduce:transition-none"
          size={22}
          stroke={2.4}
        />
      </span>
      {label}
    </Button>
  );
}
