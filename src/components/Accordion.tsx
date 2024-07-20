import React from "react";
import * as AccordionRadix from "@radix-ui/react-accordion";
import { CaretDownIcon } from "@radix-ui/react-icons";

export function Accordion({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <AccordionRadix.Root type="multiple" {...props}>
      {children}
    </AccordionRadix.Root>
  );
}

interface AccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionRadix.Item> {
  children: React.ReactNode;
  value: string;
}

export function AccordionItem({
  children,
  value,
  className,
  ...props
}: AccordionItemProps) {
  return (
    <AccordionRadix.Item value={value} className={className} {...props}>
      {children}
    </AccordionRadix.Item>
  );
}

interface AccordionTriggerProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionRadix.Trigger
    className={`${className} text-xl flex items-center justify-between w-full group`}
    {...props}
    ref={forwardedRef}
  >
    <div>{children}</div>
    <CaretDownIcon className="transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
  </AccordionRadix.Trigger>
));

AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, ...props }, forwardedRef) => (
  <AccordionRadix.Content className="" {...props} ref={forwardedRef}>
    <div className="AccordionContentText">{children}</div>
  </AccordionRadix.Content>
));

AccordionContent.displayName = "AccordionContent";
