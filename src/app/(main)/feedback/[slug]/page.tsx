"use client";

import { useState, useCallback } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import BackLink from "../../../../components/BackLink";
import {
  getAudit,
  getSeverityColor,
  countBySeverity,
  type FeedbackPoint,
  type FeedbackScreen,
  type Severity,
} from "../../../../lib/feedback-data";
import "./feedback.css";

function SeverityBadge({ severity }: { severity: Severity }) {
  return <span className={`fb-badge fb-badge-${severity}`}>{severity.replace("-", " ")}</span>;
}

function Dot({
  point,
  highlighted,
  onEnter,
  onLeave,
  onClick,
}: {
  point: FeedbackPoint;
  highlighted: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`fb-dot fb-dot-${point.severity} ${highlighted ? "fb-dot-highlight" : ""}`}
      style={{ left: `${point.x}%`, top: `${point.y}%` }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
      aria-label={`Point ${point.id}: ${point.title}`}
    >
      {point.id}
    </button>
  );
}

function FeedbackCard({
  point,
  highlighted,
  onEnter,
  onLeave,
  onClick,
}: {
  point: FeedbackPoint;
  highlighted: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onClick: () => void;
}) {
  return (
    <div
      className={`fb-card ${highlighted ? "fb-card-highlight" : ""}`}
      style={
        highlighted
          ? ({ "--fb-highlight-color": getSeverityColor(point.severity) } as React.CSSProperties)
          : undefined
      }
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      <span
        className="fb-card-number"
        style={{ backgroundColor: getSeverityColor(point.severity) }}
      >
        {point.id}
      </span>
      <div className="fb-card-body">
        <div className="fb-card-title">{point.title}</div>
        <div className="fb-card-desc">{point.description}</div>
        <SeverityBadge severity={point.severity} />
      </div>
    </div>
  );
}

export default function FeedbackPage() {
  const params = useParams<{ slug: string }>();
  const audit = getAudit(params.slug);

  const [activeScreenId, setActiveScreenId] = useState<string>(
    audit?.screens[0]?.id ?? ""
  );
  const [highlightedPointId, setHighlightedPointId] = useState<number | null>(null);

  const activeScreen = audit?.screens.find((s) => s.id === activeScreenId);

  const handleHighlight = useCallback((id: number | null) => {
    setHighlightedPointId(id);
  }, []);

  const handleCardClick = useCallback((id: number) => {
    setHighlightedPointId((prev) => (prev === id ? null : id));
  }, []);

  if (!audit) {
    return (
      <main className="fb-page page-container mt-12 sm:mt-16 lg:mt-[72px] px-3 sm:px-4">
        <BackLink href="/" label="Back" className="mb-4" />
        <h1 className="text-2xl font-bold">Audit not found</h1>
        <p className="text-sm text-[var(--text-secondary)] mt-2">
          No feedback audit found for &ldquo;{params.slug}&rdquo;.
        </p>
      </main>
    );
  }

  const counts = countBySeverity(audit);

  return (
    <main className="fb-page page-container mt-12 sm:mt-16 lg:mt-[72px] px-3 sm:px-4 text-[var(--text-primary)]">
      <BackLink href="/" label="Back" className="mb-4 animate-enter" />

      {/* ── Header ── */}
      <header className="mb-6 animate-enter delay-100">
        <span className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-[var(--accent)]">
          Public UX Audit
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mt-1">
          {audit.appTitle}
        </h1>
        <p className="text-sm text-[var(--text-secondary)] mt-1">
          {audit.date} &middot;{" "}
          <a
            href={audit.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] underline underline-offset-2"
          >
            {audit.appUrl.replace(/^https?:\/\//, "")}
          </a>
        </p>
        <p className="text-sm text-[var(--text-secondary)] mt-2 max-w-2xl leading-relaxed">
          {audit.summary}
        </p>

        {/* Stats */}
        <div className="fb-stats mt-3">
          <div className="fb-stat">
            <span className="fb-stat-dot" style={{ backgroundColor: "var(--fb-critical)" }} />
            {counts.critical} Critical
          </div>
          <div className="fb-stat">
            <span className="fb-stat-dot" style={{ backgroundColor: "var(--fb-suggestion)" }} />
            {counts.suggestion} Suggestions
          </div>
          <div className="fb-stat">
            <span className="fb-stat-dot" style={{ backgroundColor: "var(--fb-nice)" }} />
            {counts["nice-to-have"]} Nice to have
          </div>
          <div className="fb-stat">
            {audit.screens.length} Screens
          </div>
        </div>
      </header>

      {/* ── Thumbnail grid ── */}
      <div className="fb-thumbs mb-4 animate-enter delay-200">
        {audit.screens.map((screen) => (
          <button
            key={screen.id}
            type="button"
            onClick={() => {
              setActiveScreenId(screen.id);
              setHighlightedPointId(null);
            }}
            className={`fb-thumb ${screen.id === activeScreenId ? "fb-thumb-active" : ""}`}
          >
            <div className="relative w-full aspect-[16/10]">
              <Image
                src={screen.image}
                alt={screen.title}
                fill
                className="object-cover"
                sizes="100px"
              />
            </div>
            <span className="fb-thumb-label">{screen.title}</span>
          </button>
        ))}
      </div>

      {activeScreen && (
        <div className="animate-enter delay-300">
          {/* ── Screen title ── */}
          <h2 className="text-lg sm:text-xl font-bold tracking-tight mb-3">
            {activeScreen.title}
            <span className="text-sm font-normal text-[var(--text-secondary)] ml-2">
              {activeScreen.points.length} points
            </span>
          </h2>

          {/* ── Screenshot viewer with dots ── */}
          <div className="fb-viewer mb-4">
            <div className="relative w-full aspect-[16/10]">
              <Image
                src={activeScreen.image}
                alt={activeScreen.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 900px"
                priority
              />
              {activeScreen.points.map((point) => (
                <Dot
                  key={point.id}
                  point={point}
                  highlighted={highlightedPointId === point.id}
                  onEnter={() => handleHighlight(point.id)}
                  onLeave={() => handleHighlight(null)}
                  onClick={() => handleCardClick(point.id)}
                />
              ))}
            </div>
          </div>

          {/* ── Feedback strip ── */}
          <div className="fb-strip">
            {activeScreen.points.map((point) => (
              <FeedbackCard
                key={point.id}
                point={point}
                highlighted={highlightedPointId === point.id}
                onEnter={() => handleHighlight(point.id)}
                onLeave={() => handleHighlight(null)}
                onClick={() => handleCardClick(point.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── Footer ── */}
      <footer className="mt-8 mb-8 pt-6 border-t border-[var(--border-color)]">
        <p className="text-xs text-[var(--text-secondary)]">
          This is a public UX audit shared for educational purposes. All feedback is constructive and
          aimed at improving user experience. Screenshots are used under fair use for critique.
        </p>
      </footer>
    </main>
  );
}
