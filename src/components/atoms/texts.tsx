import { createElement, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export const SectionHeader = ({ children }: PropsWithChildren) => (
  <h2 className="mt-16 mb-4 font-mono text-neutral-500 dark:text-neutral-300 text-2xl opacity-75">
    {children}
  </h2>
);

export const WithArrow = ({
  children,
  className,
  as = "p",
}: PropsWithChildren<{ as?: "p" | "div"; className?: string }>) =>
  createElement(
    as,
    {
      className: cn(
        "relative pl-7 text-xl before:content-['↳'] before:text-neutral-300 dark:before:text-neutral-600 before:absolute before:block before:left-0 before:top-1/2 before:-translate-y-1/2",
        className,
      ),
    },
    children,
  );
