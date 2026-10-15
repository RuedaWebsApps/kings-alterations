import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  id?: string;
  children?: ReactNode;
}

export function SectionHeading({ eyebrow, title, subtitle, id, children }: Props) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-ink">{eyebrow}</p>
      <h2 id={id} className="mt-3 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
        {title}
      </h2>
      <div aria-hidden className="mx-auto mt-4 h-0.5 w-14 bg-gold" />
      {subtitle && <p className="mt-4 text-base leading-relaxed text-muted">{subtitle}</p>}
      {children}
    </div>
  );
}
