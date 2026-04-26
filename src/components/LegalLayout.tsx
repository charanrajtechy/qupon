import type { ReactNode } from "react";
import { Section } from "./Section";

export function LegalLayout({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Section className="bg-hero pt-20 !pb-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-accent text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            {eyebrow}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{title}</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {updated}</p>
        </div>
      </Section>
      <Section className="!pt-6">
        <article className="max-w-3xl mx-auto prose prose-slate prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-li:my-3 prose-ul:my-4 prose-ol:my-4 prose-strong:text-foreground prose-a:text-primary">
          {children}
        </article>
      </Section>
    </>
  );
}
