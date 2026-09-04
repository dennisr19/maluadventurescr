import { IconCheck, IconChevronDown, IconWorld } from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Locale } from "@/data/copy";

interface LanguageMenuProps {
  locale: Locale;
}

const languages = [
  { code: "en", label: "English", href: "/" },
  { code: "es", label: "Español", href: "/es/" },
] as const;

export function LanguageMenu({ locale }: LanguageMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={locale === "es" ? "Cambiar idioma" : "Change language"}
        className="inline-flex min-h-12 items-center gap-2 border-b-2 border-transparent px-1 text-lg font-bold text-[#0b6257] outline-none transition hover:border-[#F4C45B] hover:text-[#073f39] focus-visible:ring-3 focus-visible:ring-[#83d9ec] sm:px-2"
      >
        <IconWorld aria-hidden="true" className="hidden sm:block" size={24} stroke={2} />
        {locale.toUpperCase()}
        <IconChevronDown aria-hidden="true" size={18} stroke={2.2} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className="min-w-40 rounded-xl bg-white p-1.5 text-[#0a403a] shadow-[0_16px_42px_rgba(3,49,44,0.18)] ring-1 ring-[#b9deda]"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            render={<a href={language.href} />}
            className="min-h-10 cursor-pointer rounded-lg px-3 py-2 text-base focus:bg-[#e5f8f5] focus:text-[#073f39]"
          >
            {language.label}
            {locale === language.code && <IconCheck aria-hidden="true" className="ml-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
