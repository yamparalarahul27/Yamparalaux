import type { Metadata } from "next";
import BackLink from "@/components/BackLink";
import { journalEntries } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Just what I am feeling, with a date.",
};

function formatDateLong(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function JournalPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 [&_section]:!p-0 [&_section>div]:!p-0">
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        {/* Back button top */}
        <BackLink href="/" label="Back" className="animate-enter" />

        {/* Entries */}
        <div className="flex flex-col gap-10">
          {journalEntries.map((entry, index) => (
            <section
              key={entry.date}
              className={`flex flex-col gap-4 border-t border-[var(--border-color)] pt-8 first:border-t-0 first:pt-0 animate-enter delay-${(index + 1) * 100}`}
            >
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                {formatDateLong(entry.date)}
              </span>
              {entry.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base lg:text-lg leading-8 text-[var(--text-secondary)]"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Back button bottom */}
        <BackLink href="/" label="Back" />
      </div>
    </main>
  );
}
