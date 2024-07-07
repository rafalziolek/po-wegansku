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

export function AccordionItem({
  children,
  value,
  ...props
}: {
  children: React.ReactNode;
  value: string;
}) {
  return (
    <AccordionRadix.Item value={value} {...props}>
      {children}
    </AccordionRadix.Item>
  );
}
interface AccordionTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const AccordionTrigger = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionRadix.Trigger
    className={`${className} text-xl flex items-center justify-between w-full group`}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>{" "}
    <CaretDownIcon className="transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
  </AccordionRadix.Trigger>
));

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
