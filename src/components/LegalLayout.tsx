import type { ReactNode } from "react";
import { Section } from "./Section";
import { TableOfContents, type TocItem } from "./TableOfContents";

export function LegalLayout({
  eyebrow,
  title,
  updated,
  toc,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  toc?: TocItem[];
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
        {toc && toc.length > 0 ? (
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents items={toc} />
              </div>
            </aside>
            <article className="prose prose-slate max-w-3xl prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-3 prose-h2:scroll-mt-24 prose-h3:text-xl prose-h3:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-li:marker:font-bold prose-li:marker:text-foreground prose-strong:text-foreground prose-a:text-primary">
              {children}
            </article>
          </div>
        ) : (
          <article className="max-w-3xl mx-auto prose prose-slate prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-3 prose-h3:text-xl prose-h3:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-li:marker:font-bold prose-li:marker:text-foreground prose-strong:text-foreground prose-a:text-primary">
            {children}
          </article>
        )}
      </Section>
    </>
  );
}
