import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { IconPlus } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

function Accordion({ ...props }: AccordionPrimitive.Root.Props) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-[#bfd3ce]", className)}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex min-h-20 w-full items-center justify-between gap-5 py-5 text-left text-lg " +
            "leading-7 font-extrabold text-[#073F43] outline-none transition-colors hover:text-[#0b6257] " +
            "focus-visible:rounded-xl focus-visible:ring-3 focus-visible:ring-[#9fe2dc] sm:text-xl",
          className,
        )}
        {...props}
      >
        <span>{children}</span>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#36BFB7]/20 text-[#073F43] transition-colors group-hover:bg-[#36BFB7]/35 group-data-open:bg-[#36BFB7]">
          <IconPlus
            aria-hidden="true"
            className="transition-transform duration-300 group-data-open:rotate-45 motion-reduce:transition-none"
            size={21}
            stroke={2.2}
          />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className={cn("pr-14 pb-6 text-base leading-7 text-[#496c66]", className)}
      {...props}
    >
      {children}
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
