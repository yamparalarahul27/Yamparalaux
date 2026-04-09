export type Severity = "critical" | "suggestion" | "nice-to-have";

export type FeedbackPoint = {
  id: number;
  x: number; // percentage from left (0-100)
  y: number; // percentage from top (0-100)
  title: string;
  description: string;
  severity: Severity;
};

export type FeedbackScreen = {
  id: string;
  title: string;
  image: string; // path to screenshot
  points: FeedbackPoint[];
};

export type FeedbackAudit = {
  slug: string;
  appTitle: string;
  appUrl: string;
  date: string;
  summary: string;
  screens: FeedbackScreen[];
};

const sanctumAudit: FeedbackAudit = {
  slug: "sanctum",
  appTitle: "Sanctum",
  appUrl: "https://app.sanctum.so",
  date: "March 2026",
  summary:
    "A public UX audit of Sanctum's liquid staking interface on Solana. Covers the homepage, Infinity Pool, Trade Hub, LST discovery, Wonderland, and staking flow across 6 screens.",
  screens: [
    {
      id: "homepage",
      title: "Homepage",
      image: "/feedback/sanctum/homepage.png",
      points: [
        {
          id: 1,
          x: 50,
          y: 15,
          title: "Hero CTA lacks hierarchy",
          description:
            "Both 'Start Staking' and 'Learn More' have equal visual weight. The primary action should be more prominent — larger button, contrasting fill vs ghost style.",
          severity: "critical",
        },
        {
          id: 2,
          x: 85,
          y: 8,
          title: "Wallet connect placement",
          description:
            "Connect wallet button blends into the nav. For a DeFi app, this is the #1 action — consider giving it an accent color or slight elevation.",
          severity: "suggestion",
        },
        {
          id: 3,
          x: 30,
          y: 55,
          title: "Stats section lacks context",
          description:
            "TVL, LSTs supported, and total stakers are shown without explanation. New users to Solana staking won't know why these numbers matter. Add a one-liner under each.",
          severity: "suggestion",
        },
        {
          id: 4,
          x: 65,
          y: 78,
          title: "Footer link density",
          description:
            "Too many links in the footer with no grouping. Consider organizing into columns: Product, Resources, Community, Legal.",
          severity: "nice-to-have",
        },
      ],
    },
    {
      id: "infinity-pool",
      title: "Infinity Pool",
      image: "/feedback/sanctum/infinity-pool.png",
      points: [
        {
          id: 1,
          x: 45,
          y: 25,
          title: "Deposit flow is unclear",
          description:
            "The deposit input doesn't clearly show what token you're depositing or what you'll receive. Add a 'You deposit → You receive' visual flow like Jupiter's swap UI.",
          severity: "critical",
        },
        {
          id: 2,
          x: 70,
          y: 40,
          title: "APY display needs breakdown",
          description:
            "The APY number is shown as a single figure. Break it down: base staking yield + MEV rewards + fee sharing. Users want to understand where yield comes from.",
          severity: "critical",
        },
        {
          id: 3,
          x: 25,
          y: 60,
          title: "No risk indicator",
          description:
            "DeFi users expect to see risk context. Add a simple risk badge or link to audit reports near the deposit action.",
          severity: "suggestion",
        },
      ],
    },
    {
      id: "trade-hub",
      title: "Trade Hub",
      image: "/feedback/sanctum/trade-hub.png",
      points: [
        {
          id: 1,
          x: 40,
          y: 20,
          title: "Token selector is buried",
          description:
            "The LST token selector dropdown feels like a standard input. For a trading interface, make the from/to token selectors more prominent with logos and larger touch targets.",
          severity: "suggestion",
        },
        {
          id: 2,
          x: 60,
          y: 45,
          title: "Slippage tolerance hidden",
          description:
            "Slippage settings are behind a gear icon. For LST swaps where price can vary, surface the current slippage tolerance inline so users know their protection level.",
          severity: "critical",
        },
        {
          id: 3,
          x: 35,
          y: 70,
          title: "Route visualization missing",
          description:
            "Unlike Jupiter, there's no visual showing the swap route. For multi-hop LST trades, showing the path builds user confidence.",
          severity: "suggestion",
        },
        {
          id: 4,
          x: 80,
          y: 30,
          title: "Price impact warning",
          description:
            "Large trades should show a price impact warning inline, not just in the confirmation modal. Prevent accidental high-slippage trades.",
          severity: "critical",
        },
      ],
    },
    {
      id: "lst-discovery",
      title: "LST Discovery",
      image: "/feedback/sanctum/lst-discovery.png",
      points: [
        {
          id: 1,
          x: 20,
          y: 30,
          title: "Sort/filter is too basic",
          description:
            "Only sorting by APY. Add filters: TVL range, validator count, age of LST, risk rating. Power users need this for informed decisions.",
          severity: "suggestion",
        },
        {
          id: 2,
          x: 55,
          y: 50,
          title: "LST cards lack key info",
          description:
            "Each LST card shows name and APY but not: TVL, 7d/30d performance trend, or the underlying validator. These are decision-critical for stakers.",
          severity: "critical",
        },
        {
          id: 3,
          x: 75,
          y: 15,
          title: "Search needs autocomplete",
          description:
            "Typing an LST name gives no suggestions. Add autocomplete with logos for faster navigation.",
          severity: "nice-to-have",
        },
      ],
    },
    {
      id: "wonderland",
      title: "Wonderland",
      image: "/feedback/sanctum/wonderland.png",
      points: [
        {
          id: 1,
          x: 50,
          y: 20,
          title: "Yield optimizer UX is complex",
          description:
            "The auto-compounding configuration has too many options on one screen. Use a step-by-step wizard: 1) Select strategy 2) Set amount 3) Confirm.",
          severity: "critical",
        },
        {
          id: 2,
          x: 30,
          y: 55,
          title: "Strategy comparison is missing",
          description:
            "Users can't compare strategies side-by-side. Add a comparison table or at minimum a 'Recommended' badge on the best-performing strategy.",
          severity: "suggestion",
        },
        {
          id: 3,
          x: 70,
          y: 40,
          title: "Historical performance chart",
          description:
            "No historical data visible for strategies. A simple 30d sparkline on each strategy card would build confidence.",
          severity: "suggestion",
        },
        {
          id: 4,
          x: 45,
          y: 80,
          title: "Exit/unstake flow unclear",
          description:
            "How to exit a Wonderland position isn't obvious. Add a clear 'Withdraw' button with estimated time and fees.",
          severity: "critical",
        },
      ],
    },
    {
      id: "staking-flow",
      title: "Staking Flow",
      image: "/feedback/sanctum/staking-flow.png",
      points: [
        {
          id: 1,
          x: 50,
          y: 30,
          title: "No progress indicator",
          description:
            "The staking flow has multiple steps but no progress bar. Users don't know if they're on step 2 of 3 or 2 of 5. Add a simple step indicator.",
          severity: "suggestion",
        },
        {
          id: 2,
          x: 40,
          y: 55,
          title: "Confirmation screen is sparse",
          description:
            "Before signing, show a complete summary: amount, token, estimated APY, fees, receive token, and estimated time. The current view only shows amount.",
          severity: "critical",
        },
        {
          id: 3,
          x: 65,
          y: 70,
          title: "Success state needs next steps",
          description:
            "After staking, the success screen just says 'Done'. Add: 'View your position', 'Stake more', 'Explore Wonderland' as suggested next actions.",
          severity: "nice-to-have",
        },
      ],
    },
  ],
};

const audits: Record<string, FeedbackAudit> = {
  sanctum: sanctumAudit,
};

export function getAudit(slug: string): FeedbackAudit | undefined {
  return audits[slug];
}

export function getAllAuditSlugs(): string[] {
  return Object.keys(audits);
}

export function getSeverityColor(severity: Severity): string {
  switch (severity) {
    case "critical":
      return "var(--fb-critical)";
    case "suggestion":
      return "var(--fb-suggestion)";
    case "nice-to-have":
      return "var(--fb-nice)";
  }
}

export function countBySeverity(audit: FeedbackAudit): Record<Severity, number> {
  const counts: Record<Severity, number> = { critical: 0, suggestion: 0, "nice-to-have": 0 };
  for (const screen of audit.screens) {
    for (const point of screen.points) {
      counts[point.severity]++;
    }
  }
  return counts;
}
