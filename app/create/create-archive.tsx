"use client";

import { useMemo, useState } from "react";
import styles from "./create-archive.module.css";

type ContentType = "threads" | "educational" | "long-form";

type ArchiveItem = {
  id: string;
  type: ContentType;
  title: string;
  url: string;
  image?: string;
  media?: "video";
  topic: string;
  date: string;
  displayDate: string;
  context: string;
};

const archiveItems: ArchiveItem[] = [
  {
    id: "hypurrclaw",
    type: "threads",
    title: "Introducing HypurrClaw – Telegram AI bot for effortless trading",
    url: "https://x.com/samcryptto/status/2073057358259908673",
    image: "https://pbs.twimg.com/media/HMT6rSsXUAAT07x.jpg",
    topic: "Crypto / DeFi / Trading Tools (Telegram Bot)",
    date: "2026-07-03",
    displayDate: "July 3, 2026",
    context: "Thread introducing @HypurrClaw, a private AI computer inside Telegram that researches, manages wallets, and trades for you on Solana, Hyperliquid, Polymarket and more — even while you sleep.",
  },
  {
    id: "nibble",
    type: "threads",
    title: "Nibble and the problem of dead tokens + trapped liquidity",
    url: "https://x.com/samcryptto/status/2082114913447948402",
    image: "https://pbs.twimg.com/media/HOUodluWcAAABvH.jpg",
    topic: "Crypto / Launchpads / DeFi Liquidity",
    date: "2026-07-28",
    displayDate: "July 28, 2026",
    context: "Thread on @nibblefun’s “Churn” concept — giving dead tokens and their trapped liquidity a second life by merging them back into active projects instead of letting capital sit idle forever.",
  },
  {
    id: "oobe",
    type: "threads",
    title: "OOBE – Build, launch & monetize AI agents on Solana with zero coding",
    url: "https://x.com/samcryptto/status/2050591187090673710",
    image: "https://pbs.twimg.com/media/HHUpz6SX0AAaa3g.jpg",
    topic: "Crypto / AI Agents / Solana",
    date: "2026-05-02",
    displayDate: "May 2, 2026",
    context: "Introduction to @OOBEonSol, a no-code platform for creating AI agents that can reason, perform on-chain actions (swaps, transfers, minting, etc.), and get monetized on Solana.",
  },
  {
    id: "choicexchange",
    type: "threads",
    title: "ChoiceXchange – The best spot trading hub on Injective",
    url: "https://x.com/samcryptto/status/1938932429680435470",
    image: "https://pbs.twimg.com/media/Guh4w1kXIAApd1b.jpg",
    topic: "Crypto / DeFi / AMM / Injective",
    date: "2025-06-28",
    displayDate: "June 28, 2025",
    context: "Thread presenting Choice as an AMM on Injective with near-instant trades, permissionless pool creation, and liquidity aggregation for better trade outputs.",
  },
  {
    id: "web3-token-hot-take",
    type: "threads",
    title: "Hot take: Most Web3 businesses don’t actually need a token",
    url: "https://x.com/samcryptto/status/2031822307144970622",
    image: "https://pbs.twimg.com/media/HDJ7nKIXoAAODoh.jpg",
    topic: "Crypto / Opinion / Tokenomics",
    date: "2026-03-11",
    displayDate: "March 11, 2026",
    context: "Opinion thread arguing that while tokens enable ownership and governance, many successful Web3 infrastructure companies (Alchemy, Consensys, etc.) thrive without launching a native token.",
  },
  {
    id: "concentricdao",
    type: "threads",
    title: "ConcentricDao – The future of Energy, Food, Air & Water",
    url: "https://x.com/samcryptto/status/1967589870051918312",
    image: "https://pbs.twimg.com/media/G05Ijf0XsAATqZk.jpg",
    topic: "Crypto / RWA / Sustainability / Impact",
    date: "2025-09-15",
    displayDate: "September 15, 2025",
    context: "Thread introducing @ConcentricDao (EFCON corporation) and its vision to create facilities that deliver pure energy, food, air and water using natural technologies and advanced systems.",
  },
  {
    id: "polycoolapp",
    type: "threads",
    title: "PolycoolApp – Track profitable wallets, insider alerts & auto copy-trade on Polymarket",
    url: "https://x.com/samcryptto/status/2035431815700172929",
    image: "https://pbs.twimg.com/media/HD9OccibYAApK5r.jpg",
    topic: "Crypto / Prediction Markets / Trading Tools",
    date: "2026-03-21",
    displayDate: "March 21, 2026",
    context: "Thread on @PolycoolApp – a mobile/Telegram platform for Polymarket with smart feeds, insider alerts, news, auto-copy trading, non-custodial wallets and auto-redeems.",
  },
  {
    id: "laraprotocol",
    type: "threads",
    title: "Looking into LaraProtocol (liquid staking on Taraxa)",
    url: "https://x.com/samcryptto/status/1921160197952753965",
    image: "https://pbs.twimg.com/media/GqlVA-LXMAASZYn.jpg",
    topic: "Crypto / Liquid Staking / Taraxa",
    date: "2025-05-10",
    displayDate: "May 10, 2025",
    context: "Thread exploring @LaraProtocol – auto-compounding liquid staking (stTARA) on Taraxa that lets users earn high APYs while using the derivative token across DeFi apps.",
  },
  {
    id: "avalanche-intro",
    type: "threads",
    title: "A quick intro to Avalanche (@avax) – high-performance blockchain for builders",
    url: "https://x.com/samcryptto/status/1924797942767997141",
    media: "video",
    topic: "Crypto / Layer 1 / Avalanche",
    date: "2025-05-20",
    displayDate: "May 20, 2025",
    context: "Introductory thread on Avalanche’s high performance, customizable Layer-1s, AVAX token utility, and global builder community (with a pivot toward projects building on it such as GoldenDonkeyGDK).",
  },
  {
    id: "lesson-risk-management",
    type: "educational",
    title: "Lesson 001 – Risk Management",
    url: "https://x.com/samcryptto/status/2023793862779572514",
    image: "https://pbs.twimg.com/media/HBX1yOsXMAANKlQ.jpg",
    topic: "Trading Education / Risk Management",
    date: "2026-02-17",
    displayDate: "February 17, 2026",
    context: "Core lesson stressing that smart traders prioritize defining invalidation, position size, and risk-reward over entry price alone. Survival > winning every trade.",
  },
  {
    id: "lesson-liquidity",
    type: "educational",
    title: "Lesson 002 – Understanding Liquidity in the Market",
    url: "https://x.com/samcryptto/status/2024815481887072735",
    image: "https://pbs.twimg.com/media/HBmW8cHWwAAKh9k.jpg",
    topic: "Trading Education / Market Structure",
    date: "2026-02-20",
    displayDate: "February 20, 2026",
    context: "Explains how price is attracted to liquidity. Breaks of highs/lows and fakeouts are often liquidity collection rather than pure manipulation. Key question: “Am I buying into liquidity or after it’s been taken?”",
  },
  {
    id: "lesson-inj",
    type: "educational",
    title: "Lesson 3 – Simple Chart Analysis ($INJ)",
    url: "https://x.com/samcryptto/status/2029530716002738589",
    image: "https://pbs.twimg.com/media/HCpXbPfa8AAs5U6.jpg",
    topic: "Trading Education / Technical Analysis",
    date: "2026-03-05",
    displayDate: "March 5, 2026",
    context: "Practical chart breakdown of $INJ in a tight consolidation range. Identifies support (~$3.04) and resistance ($3.15–$3.16), and explains how compression often precedes volatility (breakout or liquidity sweep).",
  },
  {
    id: "lesson-liquidity-sweeps",
    type: "educational",
    title: "Lesson 5 – Liquidity Sweeps",
    url: "https://x.com/samcryptto/status/2031460549591175262",
    topic: "Trading Education / Market Structure",
    date: "2026-03-10",
    displayDate: "March 10, 2026",
    context: "Explains why price often breaks a level and immediately reverses — stop-loss liquidity sits above highs, below lows, and around equal highs/lows. Helps traders avoid getting trapped in fake breakouts.",
  },
  {
    id: "lesson-token-utility",
    type: "educational",
    title: "Lesson 7 – Token Utility in Web3",
    url: "https://x.com/samcryptto/status/2036160626003734901",
    topic: "Crypto Education / Tokenomics",
    date: "2026-03-23",
    displayDate: "March 23, 2026",
    context: "Distinguishes real utility (governance, staking, fees, access) from pure hype. Emphasizes studying the chain/ecosystem the token lives on (Injective, Arbitrum, Base, Solana examples) rather than the token in isolation.",
  },
  {
    id: "lesson-market-conditions",
    type: "educational",
    title: "Lesson 8 – Market Conditions",
    url: "https://x.com/samcryptto/status/2041608028768616623",
    topic: "Trading Education / Market Regime",
    date: "2026-04-07",
    displayDate: "April 7, 2026",
    context: "Before asking “where do I buy?”, identify the environment: Trending, Ranging, or Choppy. Most losses come from applying the wrong strategy to the current market condition.",
  },
  {
    id: "lesson-smart-money",
    type: "educational",
    title: "Lesson 9 – Smart Money vs Retail",
    url: "https://x.com/samcryptto/status/2047350536999932131",
    media: "video",
    topic: "Trading Education / Market Psychology",
    date: "2026-04-23",
    displayDate: "April 23, 2026",
    context: "Contrasts how smart money accumulates in low sentiment and distributes into hype versus how retail chases late. Classic cycle: Accumulation → Breakout → Hype → Distribution → Dump.",
  },
  {
    id: "pump-analysis",
    type: "educational",
    title: "$PUMP Chart Analysis & Buyback Thesis",
    url: "https://x.com/samcryptto/status/2091903892845936643",
    image: "https://pbs.twimg.com/media/HQe_eItWgAAm1Hk.jpg",
    topic: "Market Analysis / Trade Idea",
    date: "2026-08-24",
    displayDate: "August 24, 2026",
    context: "Bullish on the $PUMP buyback mechanism (revenue → buybacks → reduced supply) but prioritizes discipline. Watching reaction around $0.0055; prefers not to chase and waits for a cleaner setup.",
  },
  {
    id: "prediction-markets-betting",
    type: "long-form",
    title: "Prediction Markets vs Traditional Betting – Why the house doesn’t always have to win",
    url: "https://x.com/samcryptto/status/2069375515471872424",
    image: "https://pbs.twimg.com/media/HLfmBbxXoAAtAPa.jpg",
    topic: "Prediction Markets / Opinion",
    date: "2026-06-23",
    displayDate: "June 23, 2026",
    context: "Long-form comparison arguing that traditional bookmakers are opaque and stacked against the user, while onchain prediction markets (Polymarket, Kalshi) offer transparent, market-driven odds and real ownership of positions.",
  },
  {
    id: "pyth-commodities",
    type: "long-form",
    title: "Pyth Network just put coffee, cocoa, sugar & live cattle onchain",
    url: "https://x.com/samcryptto/status/2058928826311205068",
    image: "https://pbs.twimg.com/media/HJLF_SsWIAAZLU2.jpg",
    topic: "Oracles / Real-World Assets / Infrastructure",
    date: "2026-05-25",
    displayDate: "May 25, 2026",
    context: "Reflection on Pyth Pro expanding to soft commodities and livestock futures. Questions what becomes possible once the price of everything (coffee, sugar, beef, etc.) lives onchain with institutional-grade data.",
  },
  {
    id: "polysights",
    type: "long-form",
    title: "What prediction markets are still missing – and why Polysights matters",
    url: "https://x.com/samcryptto/status/2075604037878116665",
    image: "https://pbs.twimg.com/media/HM4G3f0XAAATH7F.jpg",
    topic: "Prediction Markets / Tooling / Infrastructure",
    date: "2026-07-10",
    displayDate: "July 10, 2026",
    context: "Argues that answering “what does the market think?” isn’t enough. Highlights @Polysights’ focus on research hubs, no-code workflows, and community intelligence as the next layer of infrastructure around prediction markets.",
  },
  {
    id: "nft-culture",
    type: "long-form",
    title: "We lost a big part of what made NFTs interesting",
    url: "https://x.com/samcryptto/status/2089691605582139538",
    media: "video",
    topic: "NFTs / Culture / Opinion",
    date: "2026-08-18",
    displayDate: "August 18, 2026",
    context: "Reflective piece on how NFT conversations shifted from art, artists, and stories to pure floor price, volume, and “will it pump?” Calls for finding the balance again between ownership technology and the art that gives people a reason to care.",
  },
  {
    id: "make-it",
    type: "long-form",
    title: "What it really means to “make it”",
    url: "https://x.com/samcryptto/status/2081694885006975193",
    image: "https://pbs.twimg.com/media/HOOqdJKXAAASp1S.jpg",
    topic: "Personal / Mindset / Web3 Journey",
    date: "2026-07-27",
    displayDate: "July 27, 2026",
    context: "Thoughtful long-form on how success is often measured by visible metrics (followers, money, titles), while the quiet struggles, self-doubt, and persistence usually go unseen. Success reveals who you became while chasing it.",
  },
  {
    id: "pyth-terminal",
    type: "long-form",
    title: "What if you could see the data before you paid for anything? (Pyth Terminal)",
    url: "https://x.com/samcryptto/status/2060073231093026937",
    topic: "Oracles / Data Infrastructure / Product",
    date: "2026-05-28",
    displayDate: "May 28, 2026",
    context: "Contrasts traditional data terminals (Bloomberg-style opaque, expensive, sales-gated access) with Pyth Terminal’s free, open front door at app.pyth.com — thousands of live feeds with transparent pricing and no gatekeeping.",
  },
];

const featuredIds = ["hypurrclaw", "pyth-commodities", "nft-culture"];

const filterLabels: Record<ContentType, string> = {
  threads: "X THREAD",
  educational: "EDUCATIONAL",
  "long-form": "LONG FORM",
};

const filters: Array<{ key: "all" | ContentType; label: string }> = [
  { key: "all", label: "ALL" },
  { key: "threads", label: "THREADS" },
  { key: "educational", label: "EDUCATIONAL" },
  { key: "long-form", label: "LONG FORM" },
];

function ArchiveCard({ item, featured = false }: { item: ArchiveItem; featured?: boolean }) {
  return (
    <article className={`${styles.card} ${featured ? styles.cardFeatured : ""}`}>
      <a className={styles.media} href={item.url} target="_blank" rel="noreferrer" aria-label={`Read ${item.title} on X`}>
        {item.image ? (
          <img src={item.image} alt={item.title} loading="lazy" />
        ) : (
          <div className={styles.mediaPlaceholder}>
            <span>{filterLabels[item.type]}</span>
            {item.media === "video" ? <strong>VIDEO</strong> : null}
          </div>
        )}
        <span className={styles.typeBadge}>{filterLabels[item.type]}</span>
        {item.media === "video" ? <span className={styles.videoBadge}>VIDEO</span> : null}
      </a>

      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span>{item.topic}</span>
          <time dateTime={item.date}>{item.displayDate}</time>
        </div>
        <h3>{item.title}</h3>
        <p>{item.context}</p>
        <a className={styles.readLink} href={item.url} target="_blank" rel="noreferrer">
          READ ON X ↗
        </a>
      </div>
    </article>
  );
}

export function CreateArchive() {
  const [activeFilter, setActiveFilter] = useState<"all" | ContentType>("all");
  const [query, setQuery] = useState("");

  const featured = featuredIds
    .map((id) => archiveItems.find((item) => item.id === id))
    .filter((item): item is ArchiveItem => Boolean(item));

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return [...archiveItems]
      .filter((item) => activeFilter === "all" || item.type === activeFilter)
      .filter((item) => {
        if (!normalizedQuery) return true;
        return `${item.title} ${item.topic} ${item.context}`.toLowerCase().includes(normalizedQuery);
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [activeFilter, query]);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.grid} aria-hidden="true" />
        <div className={styles.heroInner}>
          <p className="system-label">02 / CREATE</p>
          <p className={styles.kicker}>THREADS • EDUCATION • LONG FORM</p>
          <h1>I write to make crypto easier to understand and harder to ignore.</h1>
          <p className={styles.intro}>
            From DeFi tools and market structure to onchain culture and project narratives, this archive brings together selected threads, educational content and long form writing from Sammy Crypt.
          </p>
        </div>
      </section>

      <section className={styles.featuredSection} aria-labelledby="featured-title">
        <div className={styles.sectionHeader}>
          <div>
            <p className="system-label">FEATURED ARCHIVE</p>
            <h2 id="featured-title">Featured archive</h2>
          </div>
          <span className={styles.index}>03</span>
        </div>
        <div className={styles.featuredGrid}>
          {featured.map((item) => (
            <ArchiveCard item={item} featured key={item.id} />
          ))}
        </div>
      </section>

      <section className={styles.archiveSection} aria-labelledby="archive-title">
        <div className={styles.sectionHeader}>
          <div>
            <p className="system-label">ARCHIVE</p>
            <h2 id="archive-title">Archive</h2>
          </div>
          <span className={styles.index}>{String(archiveItems.length).padStart(2, "0")}</span>
        </div>

        <div className={styles.controls}>
          <label className={styles.searchWrap}>
            <span className={styles.visuallyHidden}>Search the archive</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search the archive..."
            />
          </label>
          <div className={styles.filters} aria-label="Archive filters">
            {filters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActiveFilter(filter.key)}
                className={activeFilter === filter.key ? styles.filterActive : ""}
                aria-pressed={activeFilter === filter.key}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.archiveGrid}>
          {filteredItems.map((item) => (
            <ArchiveCard item={item} key={item.id} />
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <p className="system-label">CONTENT / GHOSTWRITING</p>
        <h2>Need a voice for your next idea or project?</h2>
        <p>Sammy works with projects and founders across threads, educational content, narratives and ghostwriting.</p>
        <a className="primary-button" href="https://t.me/sammygrace110" target="_blank" rel="noreferrer">
          DISCUSS CONTENT ON TELEGRAM
        </a>
      </section>
    </div>
  );
}
