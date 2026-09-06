import { IconArrowDownRight, IconBrandWhatsapp } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/data/contact";

export function ErrorActions() {
  return (
    <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
      <Button
        render={<a href="/#tours" />}
        className="group h-14 rounded-full bg-white py-2 pr-7 pl-2 text-base font-extrabold text-[#073F43] shadow-[0_14px_34px_rgba(3,37,39,0.28)] hover:bg-white active:scale-[0.98] focus-visible:ring-[#F4C45B] sm:h-16 sm:pr-8 sm:pl-2.5 sm:text-lg"
      >
        <span className="flex size-10 items-center justify-center rounded-full bg-[#071E52] text-white sm:size-12">
          <IconArrowDownRight aria-hidden="true" size={22} stroke={2.4} />
        </span>
        View tours
      </Button>
      <Button
        render={<a href={whatsappUrl} target="_blank" rel="noreferrer" />}
        variant="ghost"
        className="h-14 rounded-full px-4 text-base font-bold text-white hover:bg-white/10 hover:text-white active:scale-[0.98] focus-visible:ring-[#F4C45B] sm:h-16 sm:px-6 sm:text-lg"
      >
        <IconBrandWhatsapp aria-hidden="true" size={27} stroke={2.1} />
        WhatsApp
      </Button>
    </div>
  );
}
