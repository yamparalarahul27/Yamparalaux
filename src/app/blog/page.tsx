"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    date: "2025-03-15",
    title: "Why I Build in Public",
    category: "Thinking",
    excerpt:
      "On the value of sharing rough work, learning out loud, and letting the process be visible.",
  },
  {
    id: 2,
    date: "2025-02-28",
    title: "Design Engineering Is a Spectrum",
    category: "Craft",
    excerpt:
      "Exploring the space between pixel-perfect design and production-grade code — and why living in that gap is a superpower.",
  },
  {
    id: 3,
    date: "2025-02-10",
    title: "Solana Order Matching: Lessons from OME-sim",
    category: "Technical",
    excerpt:
      "What I learned building a production-grade Rust order matching engine on Solana for a Superteam bounty.",
  },
  {
    id: 4,
    date: "2025-01-22",
    title: "Indexing Product Knowledge",
    category: "Product",
    excerpt:
      "Early notes on YDex and the problem of retrieving the right context at the right time.",
  },
  {
    id: 5,
    date: "2025-01-05",
    title: "The Case for Fewer Features",
    category: "Thinking",
    excerpt:
      "Most products ship too much. A short argument for restraint, focus, and saying no more often.",
  },
];

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <main className="page-container mt-[132px] text-[var(--text-primary)]">
      <div className="flex-1 flex flex-col gap-[72px] pt-8">
        {/* Header */}
        <section className="flex flex-col gap-6 animate-enter">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors w-fit"
          >
            <ArrowLeft className="h-3 w-3" />
            Back
          </Link>

          <div className="flex flex-col gap-3">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
              Blog
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl text-balance">
              Notes on design engineering, product thinking, and building things that matter.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="flex flex-col gap-3">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className={`group brutal-card bg-white p-3 animate-enter delay-${(index + 1) * 100}`}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 items-start justify-between">
                <div className="flex flex-col gap-3 min-w-0 flex-1">
                  <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-secondary)]">
                    <span>{formatDate(post.date)}</span>
                    <span className="w-8 h-px bg-[var(--border-color)]" />
                    <span className="text-[var(--accent)] font-semibold">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold tracking-tight transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-[var(--text-secondary)] text-balance transition-colors">
                    {post.excerpt}
                  </p>

                  <div className="inline-flex items-center text-sm font-bold tracking-wide uppercase">
                    Read Post
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <footer className="p-8 text-xs font-mono text-[var(--text-secondary)] text-center animate-enter delay-400">
          <p>ENGINEERED WITH PRECISION &bull; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </main>
  );
}
