import { IconArrowDownRight, IconBrandWhatsapp } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/data/contact";
import type { Locale } from "@/data/copy";

interface HeroActionsProps {
  locale: Locale;
  primary: string;
  secondary: string;
}

export function HeroActions({ locale, primary, secondary }: HeroActionsProps) {
  return (
    <div className="mt-9 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
      <Button
        render={<a href="#tours" />}
        className="group h-14 rounded-full bg-white py-2 pr-6 pl-2 text-base font-extrabold text-[#073F43] shadow-[0_14px_34px_rgba(3,37,39,0.28)] hover:bg-white active:scale-[0.98] focus-visible:ring-[#F4C45B] sm:h-16 sm:pr-8 sm:pl-2.5 sm:text-lg"
      >
        <span className="flex size-10 items-center justify-center rounded-full bg-[#F4C45B] transition-colors group-hover:bg-[#e4b44c] sm:size-12">
          <IconArrowDownRight
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:rotate-45"
            size={22}
            stroke={2.4}
          />
        </span>
        {primary}
      </Button>
      <Button
        render={
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${secondary}${locale === "es" ? ", abre en una pestaña nueva" : ", opens in a new tab"}`}
          />
        }
        variant="ghost"
        className="h-14 rounded-full border-0 bg-transparent px-4 text-base font-bold text-white hover:bg-white/10 hover:text-white active:scale-[0.98] focus-visible:ring-[#F4C45B] sm:h-16 sm:px-6 sm:text-lg"
      >
        <IconBrandWhatsapp aria-hidden="true" size={27} stroke={2.1} />
        <span className="hidden sm:inline">{secondary}</span>
        <span className="sm:hidden">WhatsApp</span>
      </Button>
    </div>
  );
}
