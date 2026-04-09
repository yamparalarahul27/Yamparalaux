export type Annotation = {
  label: string;
  description: string;
};

export type Stage = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  /** Additional images shown as a scrollable gallery below the hero */
  gallery?: string[];
  annotations: Annotation[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  stageCount: number;
  backHref: string;
  fullStudyHref?: string;
  stages: Stage[];
};

const passwordUx: Project = {
  slug: "password-ux",
  title: "Product Experience of Password Creation",
  subtitle: "Onboarding Redesign",
  company: "Entytle",
  stageCount: 7,
  backHref: "/mini",
  fullStudyHref: "/mini#password-ux",
  stages: [
    {
      id: "problem",
      title: "The Problem",
      subtitle: "Existing password field",
      description:
        "On-exit validation threw errors only after the user left the field. No password visibility toggle clarity. No strength feedback until submission. 7 monthly forgot-password support requests costing 660 minutes/year.",
      image: "/portfolio/password-ux/pwdux_05_Password_Present.png",
      annotations: [
        { label: "On-exit validation", description: "Errors appear too late — after the user leaves the field" },
        { label: "No visibility toggle", description: "Users can't verify what they've typed without ambiguous eye icon" },
        { label: "No strength meter", description: "Zero feedback on password strength before submission" },
      ],
    },
    {
      id: "research",
      title: "Research",
      subtitle: "Audit & analysis",
      description:
        "Audited 20+ B2B enterprise forms across SaaS products, studying validation patterns, copy, layout, and error handling. Mixpanel data revealed the forgot-password funnel frequency.",
      image: "/portfolio/password-ux/pwdux_04_c55daa_7b131e3b98a2469392fc974846bc3883~mv2.png",
      annotations: [
        { label: "20+ form audit", description: "Studied validation, copy, layout across enterprise SaaS" },
        { label: "Mixpanel analytics", description: "Data-driven analysis of forgot-password funnel events" },
        { label: "WCAG standards", description: "Accessibility requirements mapped to form interactions" },
      ],
    },
    {
      id: "requirements",
      title: "Requirements",
      subtitle: "Show them upfront",
      description:
        "Instead of punishing users with errors after they leave the field, the redesign surfaces every requirement before the user types. Requirements are visible, explicit, and update in real time.",
      image: "/portfolio/password-ux/pwdux_14_Password_Horizontal.png",
      annotations: [
        { label: "Live validation", description: "Requirements check off in real time as the user types" },
        { label: "UX copy tuned", description: "'Strong password should contain' — tested multiple label variations" },
        { label: "Explicit over implicit", description: "Each rule is a visible line item, not hidden behind progressive disclosure" },
      ],
    },
    {
      id: "icons",
      title: "Icon States",
      subtitle: "Met vs unmet requirements",
      description:
        "Choosing the right icon pair for 'not yet met' and 'met' states. Icons had to be universally understood, colorblind-safe, and work at 14px. Error states shift from neutral guidance to clear, non-punishing feedback.",
      image: "/portfolio/password-ux/pwdux_22_Choosen.png",
      annotations: [
        { label: "Met state", description: "Green checkmark — universally understood completion signal" },
        { label: "Unmet state", description: "Neutral dot — no punishment, just guidance" },
        { label: "Error state", description: "Red X on submit — clear but non-punishing feedback" },
      ],
    },
    {
      id: "showhide",
      title: "Show / Hide",
      subtitle: "The eye icon dilemma",
      description:
        "The eye icon carries ambiguity: does it mean 'password is visible' or 'click to make visible'? Replaced with a simple 'Show password' checkbox — clear, accessible, and natively supported by screen readers.",
      image: "/portfolio/password-ux/pwdux_32_Checkbox.png",
      annotations: [
        { label: "Checkbox approach", description: "Label removes all ambiguity about toggle state" },
        { label: "Accessibility", description: "Native screen reader and keyboard navigation support" },
        { label: "Secure default", description: "Unchecked by default — passwords start hidden" },
      ],
    },
    {
      id: "strength",
      title: "Strength Meter",
      subtitle: "How strong is strong enough?",
      description:
        "A progress bar gives users a quick, visual sense of strength without abstract labels. Three clear states: Weak (red), Medium (yellow), Strong (green) with incremental fill.",
      image: "/portfolio/password-ux/pwdux_44_Strong.png",
      annotations: [
        { label: "Progress bar", description: "Visual strength without requiring users to interpret labels" },
        { label: "Color-coded", description: "Red → Yellow → Green — universally understood spectrum" },
        { label: "Incremental", description: "Bar fills progressively as requirements are met" },
      ],
    },
    {
      id: "shipped",
      title: "Shipped",
      subtitle: "Final product",
      description:
        "The redesigned password flow shipped as part of Entytle's onboarding overhaul. Live validation replaced on-exit validation. Checkbox replaced the eye icon. Strength indicator gave users confidence before submission.",
      image: "/portfolio/password-ux/pwdux_37_Done.png",
      annotations: [
        { label: "Live validation", description: "Real-time feedback reduced error encounters" },
        { label: "Checkbox toggle", description: "Eliminated eye-icon ambiguity entirely" },
        { label: "Strength meter", description: "Users gain confidence before hitting submit" },
        { label: "Support impact", description: "Reduced monthly forgot-password support load" },
      ],
    },
  ],
};

const pubkey: Project = {
  slug: "pubkey",
  title: "Revamping Opensource Discord Verification",
  subtitle: "UI Revamp — Visual Design",
  company: "PubKey",
  stageCount: 6,
  backHref: "/mini",
  stages: [
    {
      id: "login-wallet",
      title: "Login & Wallet",
      subtitle: "Entry points",
      description:
        "Designed the Discord OAuth login screen with PubKey branding and a 3-step Solana wallet linking flow. Supports Solflare, Phantom, and Backpack with auto-detection of installed wallets.",
      image: "/portfolio/pubkey/Login.png",
      gallery: [
        "/portfolio/pubkey/Link Solana Wallet/Step 1.png",
        "/portfolio/pubkey/Link Solana Wallet/Step 2.png",
      ],
      annotations: [
        { label: "Discord OAuth", description: "Single sign-on via Discord — the primary identity for community members" },
        { label: "Wallet linking", description: "3-step wizard: Select Wallet → Verify → Sign Message" },
        { label: "Multi-wallet", description: "Auto-detects Solflare, Phantom, and Backpack" },
      ],
    },
    {
      id: "community-dashboard",
      title: "Community Dashboard",
      subtitle: "The home view",
      description:
        "The community dashboard surfaces roles, token requirements, and NFT collections at a glance. Admins see token-gated access rules while members browse their community's NFT collection with search and filtering.",
      image: "/portfolio/pubkey/Community/Dashbaord.png",
      gallery: [
        "/portfolio/pubkey/Community/Dashbaord-1.png",
        "/portfolio/pubkey/Community/Dashbaord-2.png",
        "/portfolio/pubkey/Community/Collection.png",
        "/portfolio/pubkey/Community/Collection-1.png",
        "/portfolio/pubkey/Community/Collection Change.png",
      ],
      annotations: [
        { label: "Roles & tokens", description: "Token requirements (e.g., min 1,000 $ISLAND) displayed alongside roles" },
        { label: "Collection view", description: "NFT gallery with search, collection cards for DeadList and PERKS" },
        { label: "Dashboard tabs", description: "Dashboard and Collection tabs for quick navigation between views" },
      ],
    },
    {
      id: "community-management",
      title: "Community Management",
      subtitle: "Admin controls",
      description:
        "Full admin suite for community managers: role creation with a 4-step accordion, member directory with role-based filtering, activity logs with options, Discord bot configuration, and community settings including edit and delete flows.",
      image: "/portfolio/pubkey/Community/Roles.png",
      gallery: [
        "/portfolio/pubkey/Community/Create/S1.png",
        "/portfolio/pubkey/Community/Create/S2.png",
        "/portfolio/pubkey/Community/Members.png",
        "/portfolio/pubkey/Community/Logs.png",
        "/portfolio/pubkey/Community/Logs/Option.png",
        "/portfolio/pubkey/Community/Discord.png",
        "/portfolio/pubkey/Community/Discord/Bot Settings.png",
        "/portfolio/pubkey/Community/Settings.png",
        "/portfolio/pubkey/Community/Edit.png",
        "/portfolio/pubkey/Community/Delete.png",
      ],
      annotations: [
        { label: "Role creation", description: "4-step accordion: Name → Condition Type → Configuration → Confirm" },
        { label: "Member directory", description: "Searchable list with role filter and member management" },
        { label: "Activity logs", description: "Timestamped log entries with contextual action options" },
        { label: "Discord integration", description: "Bot settings and server configuration for verification" },
      ],
    },
    {
      id: "nft-views",
      title: "NFT Views",
      subtitle: "Ownership & detail",
      description:
        "Designed multiple NFT viewing states: your own collection (single or multiple items), other users' collections, and private profiles. The detail view shows traits, metadata, on-chain info, and a sidebar with other owned items from the same collection.",
      image: "/portfolio/pubkey/NFT View Others, Other Owned in a Collection.png",
      gallery: [
        "/portfolio/pubkey/NFT View You Own From the Collection.png",
        "/portfolio/pubkey/NFT view From Your Own Collection, If you own only1.png",
        "/portfolio/pubkey/NFT view From Your Own Collection, Own More Than 1.png",
        "/portfolio/pubkey/NFT View Others, Private Profile.png",
        "/portfolio/pubkey/Community/Collection/Filter.png",
        "/portfolio/pubkey/Community/Collection/Filter-1.png",
        "/portfolio/pubkey/Community/Collection/PERKS at 12x.png",
        "/portfolio/pubkey/Community/Collection/PERKS at 8x.png",
      ],
      annotations: [
        { label: "Detail view", description: "Traits, metadata, owner profile, and collection sidebar in one screen" },
        { label: "Ownership states", description: "Different layouts for own vs others' NFTs, single vs multiple" },
        { label: "Collection filters", description: "Search and filter within collections at multiple grid densities" },
      ],
    },
    {
      id: "profile-states",
      title: "Profile & States",
      subtitle: "User views",
      description:
        "User profile with assets organized by Solana cluster, community membership list, and well-crafted empty states for new users who haven't joined or created communities yet. Search and discovery flow for finding communities.",
      image: "/portfolio/pubkey/Profile/Assets.png",
      gallery: [
        "/portfolio/pubkey/Profile/Settings.png",
        "/portfolio/pubkey/User with communiite.png",
        "/portfolio/pubkey/User searching community.png",
        "/portfolio/pubkey/No Community Created.png",
        "/portfolio/pubkey/When there are no communities the user Joined..png",
      ],
      annotations: [
        { label: "Asset portfolio", description: "NFTs and tokens grouped by Solana cluster with community context" },
        { label: "Empty states", description: "Guided empty states for no communities joined or created" },
        { label: "Community discovery", description: "Search flow for finding and joining communities" },
      ],
    },
    {
      id: "system-patterns",
      title: "System Patterns",
      subtitle: "Reusable components",
      description:
        "Consistent design system patterns across the product: toast notifications for transaction feedback, stepped accordion forms for complex creation flows, and responsive collection grids with multiple density options.",
      image: "/portfolio/pubkey/Toast.png",
      annotations: [
        { label: "Toast system", description: "Contextual notifications for wallet actions and transaction states" },
        { label: "Accordion forms", description: "Numbered step-by-step forms for role and community creation" },
        { label: "Grid densities", description: "Collection views at 8x and 12x grid for different browsing needs" },
      ],
    },
  ],
};

const projects: Record<string, Project> = {
  "password-ux": passwordUx,
  pubkey: pubkey,
};

export function getProject(slug: string): Project | undefined {
  return projects[slug];
}

export function getAllProjectSlugs(): string[] {
  return Object.keys(projects);
}
