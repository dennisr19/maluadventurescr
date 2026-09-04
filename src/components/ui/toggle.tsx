import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex min-h-10 items-center justify-center rounded-full px-4 text-base font-medium " +
    "whitespace-nowrap transition-colors outline-none hover:bg-[#f0f8f6] " +
    "focus-visible:ring-3 focus-visible:ring-[#cbece3] disabled:pointer-events-none " +
    "disabled:opacity-50 aria-pressed:bg-[#dff4ee] aria-pressed:text-[#0a5148]",
  {
    variants: {
      variant: {
        default: "bg-transparent text-[#355c56]",
        outline: "border border-[#749b93] bg-white text-[#355c56]",
      },
      size: {
        default: "h-10",
        sm: "h-9 min-h-9 px-3 text-xs",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
