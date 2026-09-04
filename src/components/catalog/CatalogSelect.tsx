import { IconChevronDown } from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CatalogSelectProps {
  label: string;
  value: string;
  options: Array<{ label: string; value: string }>;
  onValueChange: (value: string) => void;
}

export function CatalogSelect({ label, value, options, onValueChange }: CatalogSelectProps) {
  const selectedLabel =
    options.find((option) => option.value === value)?.label ?? options[0]?.label;

  return (
    <div className="min-w-0 sm:min-w-52">
      <p className="mb-2 text-sm font-extrabold text-[#315f58]">{label}</p>
      <DropdownMenu>
        <DropdownMenuTrigger
          aria-label={label}
          className="flex min-h-13 w-full items-center justify-between gap-4 rounded-full border border-[#a9cbc5] bg-white px-5 text-left text-base font-bold text-[#073F43] outline-none transition hover:border-[#36BFB7] focus-visible:ring-3 focus-visible:ring-[#bcece7]"
        >
          <span className="truncate">{selectedLabel}</span>
          <IconChevronDown aria-hidden="true" className="shrink-0" size={20} stroke={2.2} />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          sideOffset={8}
          className="min-w-56 rounded-2xl bg-white p-2 text-[#073F43] shadow-[0_18px_48px_rgba(7,63,67,0.16)] ring-1 ring-[#c8e2dd]"
        >
          <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
            {options.map((option) => (
              <DropdownMenuRadioItem
                key={option.value}
                value={option.value}
                className="min-h-11 cursor-pointer rounded-xl py-2.5 pr-9 pl-3 text-base font-semibold focus:bg-[#e9f8f6] focus:text-[#073F43]"
              >
                <span className="truncate">{option.label}</span>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
