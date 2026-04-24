import Image from "next/image";
import Link from "next/link";
import BackLink from "../../../components/BackLink";
import "./mini-wiki.css";

type WorkItem = {
  track: string;
  title: string;
  type: string;
  note: string;
  status: string;
  href?: string;
};

type WritingItem = {
  published: string;
  title: string;
  href: string;
};

type ChannelItem = {
  name: string;
  handle: string;
  subscribers: string;
  description: string;
  href: string;
};

type LogItem = {
  date: string;
  action: string;
  details: string;
};

type SuperteamWin = {
  title: string;
  sponsor: string;
  prize: string;
  type: string;
  href?: string;
};

const careerHighlights = [
  "Founded Yamparala.in in 2019 and began publishing design and product work in public.",
  "Worked at Entytle (2020-2022) on installed-base management and B2B SaaS product UX.",
  "Worked at Synclo (2022-2024) on OPD and healthcare workflows across multiple hospital products.",
  "Joined Equicom Technologies in 2025 and continued building web3 products and internal tooling.",
  "Started a dedicated Design Engineering track with a stronger build-first product system approach.",
  "Built and managed the ValveyAI website on Framer — an all-in-one no-code platform for websites, e-commerce, CRM, and automation.",
  "Leading a team of 3 designers at Equicomtech — first leadership role. Learning hiring, allocation, and efficiency through hands-on mistakes.",
  "Engineered 2 internal products as a result of team leadership: AgentUX (collection and UX builder) and Graphics Lab (unified graphic app).",
  "Maintains an active builder profile on Superteam Earn with public submission and win history.",
];

const workItems: WorkItem[] = [
  {
    track: "A1",
    title: "DeFi Triangle Website",
    type: "DeFi Triangle (Shipped Product)",
    note: "Core website for the DeFi Triangle ecosystem.",
    status: "Live",
    href: "https://defitriangle.xyz/",
  },
  {
    track: "A2",
    title: "DeFi Triangle Dapp",
    type: "DeFi Triangle (Shipped Product)",
    note: "Main DeFi product app experience and interaction layer.",
    status: "Live",
    href: "https://app.defitriangle.xyz/",
  },
  {
    track: "A3",
    title: "DeFi Triangle Learn",
    type: "DeFi Triangle (Shipped Product)",
    note: "WIP merge of LearnDex lessons into a new dedicated domain.",
    status: "WIP",
    href: "https://learndex.hirahul.xyz/lessons",
  },
  {
    track: "B1",
    title: "Crpko Graphics App",
    type: "Crpko (Equicomtech)",
    note: "Graphics app workstream under Equicomtech product initiatives.",
    status: "Live",
    href: "https://graphics.crpkotech.com",
  },
  {
    track: "B2",
    title: "Figma Design Script and Layer Naming",
    type: "Crpko (Equicomtech)",
    note: "Automation and quality workflow for Figma scripts and consistent layer naming.",
    status: "WIP",
  },
  {
    track: "C1",
    title: "Yamparala Log",
    type: "Yamparala (Portfolio)",
    note: "Personal knowledge and resource log for links, notes, and references.",
    status: "Live",
    href: "https://log.hirahul.xyz",
  },
  {
    track: "C2",
    title: "Yamparala Catalog",
    type: "Yamparala (Portfolio)",
    note: "Currently part of AgentUX under the designer catalogue flow.",
    status: "Active",
    href: "https://agentux.hirahul.xyz/designer/catalogue",
  },
  {
    track: "C3",
    title: "Proteus",
    type: "Yamparala (Portfolio)",
    note: "Component and UI utility product track.",
    status: "Live",
    href: "https://proteus.hirahul.xyz",
  },
  {
    track: "C4",
    title: "Background",
    type: "Yamparala (Portfolio)",
    note: "Background generation utility for product and design usage.",
    status: "Live",
    href: "https://bg.hirahul.xyz",
  },
  {
    track: "D1",
    title: "Telegram + Finance",
    type: "Private and Personal Apps",
    note: "Personal finance ledger app using Telegram as the operating channel.",
    status: "Private",
  },
  {
    track: "D2",
    title: "Family Gallery App",
    type: "Private and Personal Apps",
    note: "Private family gallery and memory archive app.",
    status: "Private",
  },
  {
    track: "E1",
    title: "Deriverse",
    type: "Community and Others",
    note: "Community project and experimentation track.",
    status: "Live",
    href: "https://deriverse.vercel.app",
  },
  {
    track: "E2",
    title: "ConceptDJ Playground",
    type: "Community and Others",
    note: "Interactive playground for concept exploration.",
    status: "Live",
    href: "https://conceptdj.vercel.app/playground",
  },
  {
    track: "E3",
    title: "OME",
    type: "Community and Others",
    note: "Order matching simulator experiment.",
    status: "Live",
    href: "https://ome-sim.vercel.app",
  },
  {
    track: "E4",
    title: "Saturn Canvas Experiment",
    type: "Community and Others",
    note: "Creative canvas and interaction experiment.",
    status: "Experiment",
    href: "https://saturn7.vercel.app",
  },
];

const designEngineerProjectGroups = [
  {
    key: "A",
    title: "DeFi Triangle (Shipped Product)",
    summary: "Core platform surfaces for DeFi Triangle: website, app, and learning stack.",
  },
  {
    key: "B",
    title: "Crpko (Equicomtech)",
    summary: "Internal product and design-system operations work under Equicomtech.",
  },
  {
    key: "C",
    title: "Yamparala (Portfolio)",
    summary: "Public portfolio utilities, catalog systems, and reusable product tools.",
  },
  {
    key: "D",
    title: "Private and Personal Apps",
    summary: "Personal tools built for finance, memory, and family workflows.",
  },
  {
    key: "E",
    title: "Community and Others",
    summary: "Community experiments, public prototypes, and collaborative side projects.",
  },
] as const;

const superteamWins: SuperteamWin[] = [
  {
    title: "Deriverse 2nd Place",
    sponsor: "Deriverse",
    prize: "$200",
    type: "Design",
    href: "https://superteam.fun/earn/listing/design-trading-analytics-dashboard-with-journal-and-portfolio-analysis",
  },
  {
    title: "Payram Blog Writing 1st Place",
    sponsor: "Payram",
    prize: "$100",
    type: "Writing",
    href: "https://superteam.fun/earn/listing/dollar350-ai-blog-writing-contest-by-payram-season-2",
  },
  {
    title: "Korea Web3 One-Pager 3rd Place",
    sponsor: "Korea Web3 GameStudio",
    prize: "$100",
    type: "Research",
    href: "https://superteam.fun/earn/listing/korea-web3-gamestudio-onepager-library-public-sources-only",
  },
  {
    title: "LastMint Feedback 1st Place",
    sponsor: "LastMint",
    prize: "$80",
    type: "Feedback",
    href: "https://superteam.fun/earn/listing/lastmint-playtest-feedback",
  },
  {
    title: "Trepa Landing Page 3rd Place",
    sponsor: "Trepa",
    prize: "$100",
    type: "Design",
    href: "https://superteam.fun/earn/listing/trepa-is-hiring-a-landing-page-wizard",
  },
  {
    title: "DeCharge Landing Page 1st Place",
    sponsor: "DeCharge",
    prize: "$500",
    type: "Design",
    href: "https://superteam.fun/earn/listing/design-landing-page-for-decharge-mini-bundle-sale",
  },
  {
    title: "Tars Product Feedback 2nd Place",
    sponsor: "Tars",
    prize: "$450",
    type: "Feedback",
    href: "https://superteam.fun/earn/listing/tars-creator-competition-product-feedback-twitter-thread",
  },
  {
    title: "Instapump Feedback 2nd Place",
    sponsor: "Instapump",
    prize: "$300",
    type: "Feedback",
    href: "https://superteam.fun/earn/listing/shape-the-future-of-viral-trading",
  },
  {
    title: "Sanctum Feedback 1st Place",
    sponsor: "Sanctum",
    prize: "$150",
    type: "Feedback",
    href: "https://superteam.fun/earn/listing/dl-sanctum-product-feedback",
  },
  {
    title: "Little Unusual Website 1st Place",
    sponsor: "Little Unusual",
    prize: "$550",
    type: "Design",
    href: "https://superteam.fun/earn/listing/little-unusuals-website-design",
  },
];

const writings: WritingItem[] = [
  {
    published: "October 27, 2025",
    title: "How Stablecoins Are Transforming Digital Payments for Merchants",
    href: "https://medium.com/@yamparala/how-stablecoins-are-transforming-digital-payments-for-merchants-fbae63090129",
  },
  {
    published: "October 14, 2025",
    title: "Carrot: Making DeFi Simple and Personal Finance with 2 Clicks",
    href: "https://medium.com/@yamparala/carrot-making-defi-simple-and-personal-finance-with-2-clicks-796d99b9ac72",
  },
  {
    published: "September 15, 2025",
    title: "Inside Prediction Markets: A Technical Typology",
    href: "https://medium.com/@yamparala/inside-prediction-markets-a-technical-typology-f1eb70ac8ca7",
  },
  {
    published: "July 6, 2025",
    title: "The State of RWAs on Solana - A Deep Dive",
    href: "https://medium.com/@yamparala/the-state-of-rwas-on-solana-a-deep-dive-5b2e96a3fd2f",
  },
];

const channels: ChannelItem[] = [
  {
    name: "Yamparala Rahul",
    handle: "@yamparalarahul",
    subscribers: "432 subscribers",
    description: "Web3 Designer + Love making Videos",
    href: "https://www.youtube.com/@yamparalarahul",
  },
  {
    name: "Yamparala Academy",
    handle: "@yamparalaacademy",
    subscribers: "48 subscribers",
    description: "Learning and exploration channel focused on practical new-world skills.",
    href: "https://www.youtube.com/@yamparalaacademy",
  },
  {
    name: "Yamparala Media",
    handle: "@yamparalamedia",
    subscribers: "58 subscribers",
    description: "Story channel on AI, building in public, and visibility brand experiments.",
    href: "https://www.youtube.com/@yamparalamedia",
  },
];

const maintenanceWorkflow = [
  "Ingest: add public source links (articles, profiles, portfolio pages) and merge new facts.",
  "Query: use the existing profile sections as the base layer for updates and additions.",
  "Lint: verify claims, refresh stale numbers, and flag missing references before publishing.",
];

const profileLog: LogItem[] = [
  {
    date: "2026-04-06",
    action: "Initial wiki-style profile compile",
    details: "Structured career, works, writing, social, on-chain, and references sections.",
  },
  {
    date: "2026-04-06",
    action: "Workflow model update",
    details: "Adopted persistent wiki maintenance pattern inspired by the LLM Wiki resource.",
  },
];

const references = [
  "https://www.hirahul.xyz",
  "https://superteam.fun/earn/t/yamparalarahul",
  "https://medium.com/feed/@yamparala",
  "https://www.youtube.com/@yamparalarahul",
  "https://www.youtube.com/@yamparalaacademy",
  "https://www.youtube.com/@yamparalamedia",
  "https://x.com/yamparalarahul1",
  "https://www.linkedin.com/in/yamparalarahul/",
  "https://www.tensor.trade/item/2HGzCZTxZiMDTrqzbGwud2a7aUY9JKsyXXyJ6Nk5xpcp",
  "https://gist.github.com/farzaa/c35ac0cfbeb957788650e36aabea836d",
  "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f",
];

export default function MiniPortfolio() {
  const groupedDesignProjects = designEngineerProjectGroups.map((group) => ({
    ...group,
    items: workItems.filter((item) => item.track.startsWith(group.key)),
  }));

  return (
    <>
      <main className="page-container mt-12 sm:mt-16 lg:mt-[72px] px-3 sm:px-4 gap-8 text-[var(--text-primary)] [&_p]:text-pretty [&_h1]:text-balance [&_h2]:text-balance [&_h3]:text-balance">
        <BackLink href="/" label="Back" />

        <article className="wiki-article">
          <header className="wiki-header">
            <h1 className="text-balance font-serif text-2xl sm:text-3xl lg:text-4xl">Yamparala Rahul</h1>
            <p className="mt-1 text-sm wiki-muted">
              Wikipedia-style mini profile page - Last verified on April 6, 2026
            </p>
          </header>

          <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-0">
            <div className="wiki-main-flow order-2 lg:order-1 px-3 py-4 sm:px-6 sm:py-6 lg:border-r wiki-border min-w-0">
              <div className="wiki-intro-flow">
                <p className="text-pretty leading-7">
                  <strong>Yamparala Rahul</strong> is an India-based design engineer focused on web3
                  products, product UX, and technical writing. Public profiles link him to Solana
                  ecosystem work, Superteam bounties, and independent product experiments under the
                  Yamparala / hirahul identity.
                </p>

                <nav className="wiki-card p-2 sm:p-3 text-sm">
                  <p className="mb-2 font-semibold">Contents</p>
                  <ol className="list-decimal pl-4 sm:pl-5 space-y-1">
                    <li><a href="#career" className="wiki-link">Career overview</a></li>
                    <li><a href="#work" className="wiki-link">Design Engineer Projects</a></li>
                    <li><a href="#wins" className="wiki-link">Superteam Earn wins</a></li>
                    <li><a href="#writing" className="wiki-link">Articles and research writing</a></li>
                    <li><a href="#media" className="wiki-link">Social and media channels</a></li>
                    <li><a href="#onchain" className="wiki-link">On-chain collectible</a></li>
                    <li><a href="#references" className="wiki-link">References</a></li>
                    <li><a href="#maintenance" className="wiki-link">Maintenance model and log</a></li>
                  </ol>
                </nav>
              </div>

              <div className="wiki-sections">
                <section id="career">
                  <h2 className="wiki-section-title">Career overview</h2>
                  <ul className="list-disc space-y-2 pl-4 sm:pl-6 leading-7">
                    {careerHighlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section id="work">
                  <h2 className="wiki-section-title">Design Engineer Projects</h2>
                  <p className="text-sm wiki-muted">
                    Quick-read grouped view of current products and workstreams.
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    {groupedDesignProjects.map((group) => (
                      <article key={group.key} className="wiki-card p-3 sm:p-4">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h3 className="text-base sm:text-lg font-semibold">
                            <span className="wiki-muted mr-1">{group.key}.</span>
                            {group.title}
                          </h3>
                          <span className="text-xs wiki-muted">{group.items.length} items</span>
                        </div>
                        <p className="mt-1 text-sm wiki-muted">{group.summary}</p>

                        <ul className="mt-3 space-y-2.5">
                          {group.items.map((item) => (
                            <li key={`${item.track}-${item.title}`} className="border-t wiki-border pt-2 first:border-t-0 first:pt-0">
                              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                                <span className="rounded border wiki-border px-1.5 py-0.5 text-[11px] font-medium">
                                  {item.track}
                                </span>
                                <span className="font-semibold">
                                  {item.href ? (
                                    <Link href={item.href} target="_blank" rel="noreferrer" className="wiki-link">
                                      {item.title}
                                    </Link>
                                  ) : (
                                    item.title
                                  )}
                                </span>
                                <span className="wiki-muted">- {item.status}</span>
                              </div>
                              <p className="mt-1 text-sm leading-6">{item.note}</p>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </section>

                <section id="wins">
                  <h2 className="wiki-section-title">Superteam Earn wins</h2>
                  <p className="text-sm wiki-muted">
                    10 wins from 45 submissions on{" "}
                    <Link href="https://superteam.fun/earn/t/yamparalarahul" target="_blank" rel="noreferrer" className="wiki-link">
                      Superteam Earn
                    </Link>
                    . Total earnings: <strong>$2,530</strong>.
                  </p>

                  {/* Mobile cards */}
                  <div className="space-y-2 sm:hidden">
                    {superteamWins.map((win) => (
                      <article key={win.title} className="wiki-card p-2.5">
                        <p className="font-semibold">
                          {win.href ? (
                            <Link href={win.href} target="_blank" rel="noreferrer" className="wiki-link">
                              {win.title}
                            </Link>
                          ) : (
                            win.title
                          )}
                        </p>
                        <p className="mt-1 text-xs wiki-muted">
                          {win.sponsor} &middot; {win.type} &middot; {win.prize}
                        </p>
                      </article>
                    ))}
                  </div>

                  {/* Desktop table */}
                  <div className="hidden overflow-x-auto sm:block">
                    <table className="wiki-table">
                      <thead>
                        <tr>
                          <th>Win</th>
                          <th>Sponsor</th>
                          <th>Type</th>
                          <th>Prize</th>
                        </tr>
                      </thead>
                      <tbody>
                        {superteamWins.map((win) => (
                          <tr key={win.title} className="align-top">
                            <td>
                              {win.href ? (
                                <Link href={win.href} target="_blank" rel="noreferrer" className="wiki-link">
                                  {win.title}
                                </Link>
                              ) : (
                                win.title
                              )}
                            </td>
                            <td>{win.sponsor}</td>
                            <td>{win.type}</td>
                            <td>{win.prize}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="writing">
                  <h2 className="wiki-section-title">Articles and research writing</h2>
                  <ul className="list-disc space-y-2 pl-4 sm:pl-6 leading-7">
                    {writings.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} target="_blank" rel="noreferrer" className="wiki-link">
                          {item.title}
                        </Link>{" "}
                        <span className="wiki-muted">({item.published})</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section id="media">
                  <h2 className="wiki-section-title">Social and media channels</h2>
                  <p className="text-pretty text-sm leading-6">
                    Social links:
                    {" "}
                    <Link href="https://x.com/yamparalarahul1" target="_blank" rel="noreferrer" className="wiki-link">
                      X (@yamparalarahul1)
                    </Link>
                    {" "}
                    and
                    {" "}
                    <Link href="https://www.linkedin.com/in/yamparalarahul/" target="_blank" rel="noreferrer" className="wiki-link">
                      LinkedIn (/in/yamparalarahul)
                    </Link>.
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    {channels.map((channel) => (
                      <div key={channel.href} className="wiki-card p-2.5 sm:p-3">
                        <p className="font-semibold">
                          <Link href={channel.href} target="_blank" rel="noreferrer" className="wiki-link">
                            {channel.name}
                          </Link>
                        </p>
                        <p className="text-sm wiki-muted">
                          {channel.handle} - {channel.subscribers}
                        </p>
                        <p className="mt-1 text-sm">{channel.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="onchain">
                  <h2 className="wiki-section-title">On-chain collectible</h2>
                  <p className="text-pretty leading-7">
                    Listed first NFT reference:
                    {" "}
                    <Link
                      href="https://www.tensor.trade/item/2HGzCZTxZiMDTrqzbGwud2a7aUY9JKsyXXyJ6Nk5xpcp"
                      target="_blank"
                      rel="noreferrer"
                      className="wiki-link"
                    >
                      PERK #3224 - IslandDAO PERKS (Tensor)
                    </Link>.
                  </p>
                </section>

                <section id="references">
                  <h2 className="wiki-section-title">References</h2>
                  <ol className="list-decimal space-y-2 pl-4 sm:pl-6 text-sm leading-6">
                    {references.map((url) => (
                      <li key={url} className="break-all">
                        <Link href={url} target="_blank" rel="noreferrer" className="wiki-link">
                          {url}
                        </Link>
                      </li>
                    ))}
                  </ol>
                </section>

                <section id="maintenance">
                  <h2 className="wiki-section-title">Maintenance model and log</h2>
                  <p className="text-pretty text-sm leading-6 wiki-muted">
                    This profile is maintained as a compounding wiki artifact, not a one-off static bio.
                  </p>

                  <h3 className="text-lg font-semibold">Workflow</h3>
                  <ul className="list-disc space-y-1 pl-4 sm:pl-6 text-sm leading-6">
                    {maintenanceWorkflow.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-semibold">Change log</h3>
                  <ul className="space-y-2 text-sm leading-6">
                    {profileLog.map((entry) => (
                      <li key={`${entry.date}-${entry.action}`} className="wiki-card px-2.5 py-2 sm:px-3">
                        <p className="font-semibold">{entry.date} - {entry.action}</p>
                        <p>{entry.details}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            <aside className="order-1 lg:order-2 border-b lg:border-b-0 wiki-border wiki-surface px-3 py-4 sm:px-6 sm:py-6 lg:border-t-0 lg:px-5 min-w-0">
              <div className="lg:sticky lg:top-24">
                <table className="wiki-infobox">
                  <tbody>
                    <tr>
                      <th className="wiki-infobox-header" colSpan={2}>
                        Yamparala Rahul
                      </th>
                    </tr>
                    <tr>
                      <td className="wiki-infobox-cell text-center" colSpan={2}>
                        <div className="mx-auto mb-2 size-24 overflow-hidden rounded-sm wiki-border border">
                          <Image
                            src="/Passport Size Photo.png"
                            alt="Yamparala Rahul portrait"
                            width={96}
                            height={96}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <p className="text-xs wiki-muted">Design Engineer - India</p>
                      </td>
                    </tr>
                    <tr>
                      <th className="wiki-infobox-label w-[40%]">Occupation</th>
                      <td className="wiki-infobox-cell break-words">Design Engineer, Product Builder, Writer</td>
                    </tr>
                    <tr>
                      <th className="wiki-infobox-label">Based in</th>
                      <td className="wiki-infobox-cell break-words">India</td>
                    </tr>
                    <tr>
                      <th className="wiki-infobox-label">Active since</th>
                      <td className="wiki-infobox-cell break-words">2019</td>
                    </tr>
                    <tr>
                      <th className="wiki-infobox-label">Superteam</th>
                      <td className="wiki-infobox-cell break-words">$2,530 earned - 45 submissions - 10 wins</td>
                    </tr>
                    <tr>
                      <th className="wiki-infobox-label">Superteam profile</th>
                      <td className="wiki-infobox-cell break-all">
                        <Link href="https://superteam.fun/earn/t/yamparalarahul" target="_blank" rel="noreferrer" className="wiki-link">
                          superteam.fun/earn/t/yamparalarahul
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th className="wiki-infobox-label">Status</th>
                      <td className="wiki-infobox-cell break-words">Open for full-time opportunities</td>
                    </tr>
                    <tr>
                      <th className="wiki-infobox-label">X</th>
                      <td className="wiki-infobox-cell break-words">
                        <Link href="https://x.com/yamparalarahul1" target="_blank" rel="noreferrer" className="wiki-link">
                          @yamparalarahul1
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th className="wiki-infobox-label">LinkedIn</th>
                      <td className="wiki-infobox-cell break-words">
                        <Link href="https://www.linkedin.com/in/yamparalarahul/" target="_blank" rel="noreferrer" className="wiki-link">
                          /in/yamparalarahul
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th className="wiki-infobox-label">Medium</th>
                      <td className="wiki-infobox-cell break-words">
                        <Link href="https://medium.com/@yamparala" target="_blank" rel="noreferrer" className="wiki-link">
                          @yamparala
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th className="wiki-infobox-label !border-b-0">Website</th>
                      <td className="wiki-infobox-cell !border-b-0 break-words">
                        <Link href="https://www.hirahul.xyz" target="_blank" rel="noreferrer" className="wiki-link">
                          hirahul.xyz
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </aside>
          </div>
        </article>
      </main>
    </>
  );
}
