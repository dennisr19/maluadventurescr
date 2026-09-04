import { Input as InputPrimitive } from "@base-ui/react/input";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full min-w-0 rounded-full border border-[#749b93] bg-white px-5 py-2 " +
          "text-base text-[#102f2b] shadow-[0_8px_24px_rgba(15,73,65,0.06)] outline-none " +
          "placeholder:text-[#5d7773] hover:border-[#6d928a] focus-visible:border-[#0d6b5f] " +
          "focus-visible:ring-3 focus-visible:ring-[#cbece3] disabled:pointer-events-none " +
          "disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
