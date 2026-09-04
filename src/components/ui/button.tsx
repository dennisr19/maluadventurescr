import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full px-5 " +
    "text-base font-semibold whitespace-nowrap transition-colors outline-none " +
    "focus-visible:ring-3 focus-visible:ring-[#cbece3] disabled:pointer-events-none " +
    "disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#0d6b5f] text-white hover:bg-[#09594f]",
        outline:
          "border border-[#749b93] bg-white text-[#183f3a] hover:border-[#0d6b5f] " +
          "hover:bg-[#eef8f5]",
        secondary: "bg-[#dff4ee] text-[#0a5148] hover:bg-[#cbece3]",
        ghost: "text-[#315751] hover:bg-[#e8f4f1] hover:text-[#102f2b]",
        destructive: "bg-red-100 text-red-800 hover:bg-red-200",
        link: "min-h-0 rounded-none p-0 text-[#0d5b53] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11",
        xs: "h-8 min-h-8 px-3 text-xs",
        sm: "h-9 min-h-9 px-4 text-xs",
        lg: "h-12 px-6",
        icon: "size-11 px-0",
        "icon-xs": "size-8 min-h-8 px-0",
        "icon-sm": "size-9 min-h-9 px-0",
        "icon-lg": "size-12 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
