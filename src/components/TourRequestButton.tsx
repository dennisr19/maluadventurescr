import { IconArrowUpRight, IconBrandWhatsapp } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

interface TourRequestButtonProps {
  href: string;
  label: string;
}

export function TourRequestButton({ href, label }: TourRequestButtonProps) {
  return (
    <Button
      render={<a href={href} target="_blank" rel="noreferrer" />}
      variant="ghost"
      className="group mt-7 h-auto min-h-16 w-full gap-3 rounded-full bg-white py-2.5 pr-5 pl-2.5 text-lg font-extrabold text-[#073F43] shadow-[0_16px_36px_rgba(2,31,33,0.2)] hover:bg-[#F1EADC] hover:text-[#073F43] sm:w-fit lg:mt-0"
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#36BFB7] text-[#073F43]">
        <IconBrandWhatsapp aria-hidden="true" size={26} stroke={2.2} />
      </span>
      {label}
      <IconArrowUpRight
        aria-hidden="true"
        className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
        size={23}
        stroke={2.2}
      />
    </Button>
  );
}
