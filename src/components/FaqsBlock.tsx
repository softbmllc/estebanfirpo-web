// src/components/FaqsBlock.tsx
import React from "react";
import type { JSX as JSXNS } from "react";

export type FaqItem = {
  q: string;
  a: React.ReactNode;
  /** Open this item by default */
  defaultOpen?: boolean;
  /** Optional anchor id for direct links */
  id?: string;
};

export default function FaqsBlock({
  id,
  title,
  items,
  headingLevel = "h2",
  className = "",
}: {
  id?: string;
  title?: string;
  items: FaqItem[];
  headingLevel?: "h2" | "h3" | "h4";
  className?: string;
}) {
  const HeadingTag = headingLevel as keyof JSXNS.IntrinsicElements;
  return (
    <section id={id} className={"mt-12 " + className}>
      {title ? (
        <HeadingTag className="text-xl font-medium text-[#0A2540] mb-2">{title}</HeadingTag>
      ) : null}

      <div className="space-y-2">
        {items.map((it, idx) => (
          <details
            key={it.id ?? idx}
            id={it.id}
            open={it.defaultOpen}
            className="rounded-xl border border-black/10 bg-white p-2.5"
          >
            <summary className="cursor-pointer list-none text-[12.5px] font-medium text-[#0A2540]">
              {it.q}
            </summary>
            <div className="mt-1 text-[13px] text-[#0A2540]/85">
              {it.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}