"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import type { VariantProps } from "class-variance-authority";
import { createContext, useContext } from "react";
import { toggleVariants } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";

interface ToggleGroupContextValue extends VariantProps<typeof toggleVariants> {
  orientation?: "horizontal" | "vertical";
}

const ToggleGroupContext = createContext<ToggleGroupContextValue>({
  size: "default",
  variant: "default",
  orientation: "horizontal",
});

type ToggleGroupProps = ToggleGroupPrimitive.Props & ToggleGroupContextValue;

function ToggleGroup({
  className,
  variant,
  size,
  orientation = "horizontal",
  children,
  ...props
}: ToggleGroupProps) {
  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-orientation={orientation}
      className={cn(
        "group/toggle-group flex w-fit flex-row items-center gap-2 rounded-lg " +
          "data-vertical:flex-col data-vertical:items-stretch",
        className,
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, orientation }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive>
  );
}

type ToggleGroupItemProps = TogglePrimitive.Props & VariantProps<typeof toggleVariants>;

function ToggleGroupItem({
  className,
  children,
  variant = "default",
  size = "default",
  ...props
}: ToggleGroupItemProps) {
  const context = useContext(ToggleGroupContext);

  return (
    <TogglePrimitive
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={cn(
        "shrink-0 focus:z-10 focus-visible:z-10",
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </TogglePrimitive>
  );
}

export { ToggleGroup, ToggleGroupItem };
