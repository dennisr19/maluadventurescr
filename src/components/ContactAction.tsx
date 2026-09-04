import { IconArrowUpRight, IconBrandWhatsapp } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

interface ContactActionProps {
  href: string;
  label: string;
}

export function ContactAction({ href, label }: ContactActionProps) {
  return (
    <Button
      render={<a href={href} target="_blank" rel="noreferrer" />}
      variant="ghost"
      className="group h-auto min-h-16 w-full gap-3 rounded-full bg-white py-2 pr-3 pl-2 text-base font-extrabold text-[#073F43] shadow-[0_16px_36px_rgba(2,31,33,0.2)] hover:bg-[#F1EADC] hover:text-[#073F43] sm:w-fit"
    >
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#36BFB7]">
        <IconBrandWhatsapp aria-hidden="true" size={25} stroke={2.2} />
      </span>
      <span className="min-w-0 truncate">{label}</span>
      <IconArrowUpRight
        aria-hidden="true"
        className="ml-1 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
        size={22}
        stroke={2.3}
      />
    </Button>
  );
}
