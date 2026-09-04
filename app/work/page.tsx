import type { Metadata } from "next";
import Image from "next/image";
import styles from "./work.module.css";

export const metadata: Metadata = { title: "Work" };

const TELEGRAM = "https://t.me/sammygrace110";

type ProjectLink = {
  label: string;
  href: string;
};

type DexConfig = {
  chain: string;
  pair: string;
};

type Project = {
  name: string;
  ticker?: string;
  chain: string;
  status: "ACTIVE" | "COMPLETED" | "PRIVATE";
  role: string;
  description: string;
  result: string;
  logo?: string;
  logoFallback: string;
  links: ProjectLink[];
  dex?: DexConfig;
  private?: boolean;
};

const projects: Project[] = [
  {
    name: "BlockChip",
    ticker: "$BCP",
    chain: "BASE",
    status: "ACTIVE",
    role: "Researcher • Core Team Contributor",
    description:
      "BlockChip is the next chapter of the project previously known as Golden Donkey. Sammy stayed involved through the migration and now contributes to BlockChip through research, project support and core team work. The project is building around a casino-backed Web3 model with Megasino connected to the ecosystem.",
    result: "CONTINUED FROM GDK INTO BCP",
    logo: "/projects/blockchip.jpg",
    logoFallback: "BCP",
    dex: {
      chain: "base",
      pair: "0xE8A69f4492453b1E11c5Bee50934Dfe36050F315",
    },
    links: [
      { label: "WEBSITE ↗", href: "https://blockchip.io/" },
      { label: "X ↗", href: "https://x.com/blockchip_1?s=11" },
      { label: "TELEGRAM ↗", href: "https://t.me/BCPportal" },
      {
        label: "DEX ↗",
        href: "https://dexscreener.com/base/0xE8A69f4492453b1E11c5Bee50934Dfe36050F315",
      },
    ],
  },
  {
    name: "Smoking Chicken Fish",
    ticker: "$SCF",
    chain: "SOLANA",
    status: "COMPLETED",
    role: "Community • Promotion • Project Support",
    description:
      "Sammy worked with Smoking Chicken Fish during his earlier Web3 project work, supporting the project through community activity, visibility and promotional efforts.",
    result: "MEMECOIN COMMUNITY EXPERIENCE",
    logo: "/projects/scf.jpg",
    logoFallback: "SCF",
    dex: {
      chain: "solana",
      pair: "6USpEBbN94DUYLUi4a2wo3AZDCyozon1PLGYu27jzPkX",
    },
    links: [
      { label: "WEBSITE ↗", href: "https://www.smokingchickenfish.com/" },
      { label: "TELEGRAM ↗", href: "https://t.me/Smokingchickenfish" },
      {
        label: "DEX ↗",
        href: "https://dexscreener.com/solana/6USpEBbN94DUYLUi4a2wo3AZDCyozon1PLGYu27jzPkX",
      },
    ],
  },
  {
    name: "Shark Cat",
    ticker: "$SC",
    chain: "SOLANA",
    status: "COMPLETED",
    role: "Community • Promotion • Project Support",
    description:
      "Sammy contributed to Shark Cat as part of his earlier memecoin work, supporting community activity and project visibility around one of Solana’s recognizable meme communities.",
    result: "SOLANA MEMECOIN EXPERIENCE",
    logo: "/projects/shark-cat.jpg",
    logoFallback: "SC",
    dex: {
      chain: "solana",
      pair: "BSzedbEvWRqVksaF558epPWCM16avEpyhm2HgSq9WZyy",
    },
    links: [
      { label: "WEBSITE ↗", href: "https://www.sharkcatsolana.org/" },
      { label: "X ↗", href: "https://x.com/sharkcatsolana?s=11" },
      { label: "TELEGRAM ↗", href: "https://t.me/sharkcatonsolana" },
      {
        label: "DEX ↗",
        href: "https://dexscreener.com/solana/BSzedbEvWRqVksaF558epPWCM16avEpyhm2HgSq9WZyy",
      },
    ],
  },
  {
    name: "VeVe",
    chain: "TON",
    status: "COMPLETED",
    role: "Promotion • Community Push",
    description:
      "Sammy helped push a TON sticker collection campaign, supporting the buy-side activity and visibility around the collection.",
    result: "70% OF COLLECTION SOLD",
    logo: "/projects/veve.jpg",
    logoFallback: "VV",
    links: [
      { label: "X ↗", href: "https://x.com/veve_tg?s=11" },
      { label: "TELEGRAM ↗", href: "https://t.me/VeVeDigital" },
    ],
  },
  {
    name: "Diamond Hands",
    ticker: "$HODL",
    chain: "ROBINHOOD",
    status: "COMPLETED",
    role: "Community • Promotion • Meme Growth",
    description:
      "Sammy worked around the Diamond Hands community as part of his Robinhood Chain memecoin experience, supporting visibility, engagement and project promotion.",
    result: "ROBINHOOD CHAIN EXPERIENCE",
    logo: "/projects/hodl.jpg",
    logoFallback: "HODL",
    dex: {
      chain: "robinhood",
      pair: "0xDD839007f5a548c57a0AcAA64642BE8BF10f2A33",
    },
    links: [
      { label: "WEBSITE ↗", href: "https://www.diamondhands.fun/" },
      { label: "X ↗", href: "https://x.com/hodlrobinhood?s=11" },
      {
        label: "DEX ↗",
        href: "https://dexscreener.com/robinhood/0xDD839007f5a548c57a0AcAA64642BE8BF10f2A33",
      },
    ],
  },
  {
    name: "Private MemeCoin Engagement",
    chain: "ROBINHOOD",
    status: "PRIVATE",
    role: "Community Manager • Shiller",
    description:
      "Worked privately with a Robinhood Chain memecoin team on community management and promotion during an early growth phase.",
    result: "$15K → $1M MARKET CAP",
    logoFallback: "///",
    links: [],
    private: true,
  },
];

type DexPair = {
  marketCap?: number | null;
};

type DexResponse = {
  pairs?: DexPair[] | null;
  pair?: DexPair | null;
};

async function getMarketCap(config?: DexConfig): Promise<number | null> {
  if (!config) return null;

  try {
    const response = await fetch(
      `https://api.dexscreener.com/latest/dex/pairs/${config.chain}/${config.pair}`,
      { next: { revalidate: 300 } },
    );

    if (!response.ok) return null;

    const data = (await response.json()) as DexResponse;
    const pair = data.pair ?? data.pairs?.[0] ?? null;

    return typeof pair?.marketCap === "number" && Number.isFinite(pair.marketCap)
      ? pair.marketCap
      : null;
  } catch {
    return null;
  }
}

function formatMarketCap(value: number | null) {
  if (value === null) return "DATA UNAVAILABLE";

  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(2)}B`;
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(1)}K`;

  return `$${Math.round(value).toLocaleString("en-US")}`;
}

function statusClass(status: Project["status"]) {
  if (status === "ACTIVE") return `${styles.status} ${styles.statusActive}`;
  if (status === "PRIVATE") return `${styles.status} ${styles.statusPrivate}`;
  return styles.status;
}

export default async function WorkPage() {
  const marketCaps = await Promise.all(projects.map((project) => getMarketCap(project.dex)));

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroInner}>
          <p className="system-label">03 / WORK</p>
          <p className={styles.kicker}>PROJECTS • COMMUNITIES • ONCHAIN WORK</p>
          <h1>Work built inside the projects, not from the sidelines.</h1>
          <p className={styles.intro}>
            Sammy has worked across memecoins, community, research, content and project growth. This archive highlights selected projects, the roles he played and the work done behind them.
          </p>
        </div>
      </section>

      <section className={styles.recordsSection} aria-labelledby="selected-work-title">
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <div>
              <p className="system-label">SELECTED WORK</p>
              <h2 id="selected-work-title">Project archive</h2>
            </div>
            <span className={styles.sectionIndex}>06 RECORDS</span>
          </div>

          <div className={styles.projectGrid}>
            {projects.map((project, index) => {
              const marketCap = marketCaps[index];
              const cardClass = [
                styles.card,
                project.status === "ACTIVE" ? styles.cardActive : "",
                project.private ? styles.privateCard : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <article key={project.name} className={cardClass}>
                  <div className={styles.visual}>
                    <div className={styles.logoPanel}>
                      {project.logo ? (
                        <Image
                          className={styles.projectLogo}
                          src={project.logo}
                          alt=""
                          width={192}
                          height={192}
                          priority={project.status === "ACTIVE"}
                        />
                      ) : (
                        <span className={styles.logoFallback}>{project.logoFallback}</span>
                      )}
                    </div>
                    <div className={styles.visualMeta}>
                      <span className={statusClass(project.status)}>{project.status}</span>
                      <span className={styles.chainBadge}>{project.chain}</span>
                    </div>
                  </div>

                  <div className={styles.cardBody}>
                    <p className={styles.recordLabel}>
                      {project.private ? "PROJECT NAME / CONFIDENTIAL" : `PROJECT RECORD / ${String(index + 1).padStart(2, "0")}`}
                    </p>
                    {project.private && <span className={styles.redacted}>CONFIDENTIAL</span>}

                    <div className={styles.cardTitleRow}>
                      <h3>{project.name}</h3>
                      {project.ticker && <span className={styles.ticker}>{project.ticker}</span>}
                    </div>

                    <p className={styles.role}>{project.role}</p>
                    <p className={styles.description}>{project.description}</p>

                    <div className={styles.proof}>
                      <div className={styles.proofItem}>
                        <span className={styles.proofLabel}>PROOF / RESULT</span>
                        <strong className={styles.proofValue}>{project.result}</strong>
                      </div>

                      {project.dex && (
                        <div className={styles.proofItem}>
                          <span className={styles.proofLabel}>
                            <span className={styles.liveDot} aria-hidden="true" />LIVE MARKET CAP
                          </span>
                          <strong className={`${styles.proofValue} ${styles.liveValue}`}>
                            {formatMarketCap(marketCap)}
                          </strong>
                        </div>
                      )}
                    </div>

                    {project.links.length > 0 && (
                      <div className={styles.links}>
                        {project.links.map((link) => (
                          <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.backendSection}>
        <div className={styles.sectionInner}>
          <div className={styles.backendCard}>
            <div className={styles.backendCode}>//</div>
            <div>
              <p className="system-label">BACKEND / PRIVATE WORK</p>
              <h2>Prediction Market Projects</h2>
              <p>
                Sammy also works with selected prediction-market projects behind the scenes, contributing where public attribution is not always part of the engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.sectionInner}>
          <div className={styles.cta}>
            <p className={styles.recordLabel}>COLLABORATION / OPEN</p>
            <h2>Building something worth paying attention to?</h2>
            <p>Sammy works across research, community, content, promotion and project support.</p>
            <a className="primary-button" href={TELEGRAM} target="_blank" rel="noreferrer">
              WORK WITH SAMMY →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
