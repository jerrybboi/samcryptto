import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Work" };

const projects = [
  {
    name: "BlockChip",
    ticker: "$BCP",
    chain: "BASE",
    status: "ACTIVE",
    role: "Researcher • Core Team Contributor",
    description:
      "The next chapter of the project previously known as Golden Donkey. Sammy continues contributing through research, project support and core team work.",
    links: ["Website", "X", "Telegram", "DEX"],
  },
  {
    name: "Smoking Chicken Fish",
    ticker: "$SCF",
    chain: "SOLANA",
    status: "COMPLETED",
    role: "Community • Promotion • Project Support",
    description:
      "Sammy supported the project through community activity, visibility and promotional efforts during his earlier Web3 work.",
    links: ["Website", "Telegram", "DEX"],
  },
  {
    name: "Shark Cat",
    ticker: "$SC",
    chain: "SOLANA",
    status: "COMPLETED",
    role: "Community • Promotion • Project Support",
    description:
      "Sammy contributed to Shark Cat through community activity and project visibility within the Solana memecoin space.",
    links: ["Website", "X", "Telegram", "DEX"],
  },
  {
    name: "VeVe TON Sticker Collection",
    chain: "TON",
    status: "COMPLETED",
    role: "Promotion • Community Push",
    description:
      "Sammy supported a TON sticker collection campaign that reached 70% collection sold.",
    links: ["X", "Telegram"],
  },
  {
    name: "Diamond Hands",
    ticker: "$HODL",
    chain: "ROBINHOOD",
    status: "COMPLETED",
    role: "Community • Promotion • Meme Growth",
    description:
      "Sammy worked around the Diamond Hands community, supporting visibility, engagement and project promotion.",
    links: ["Website", "X", "DEX"],
  },
  {
    name: "Private MemeCoin Engagement",
    chain: "CONFIDENTIAL",
    status: "PRIVATE",
    role: "Community Manager • Shiller",
    description:
      "Private Robinhood Chain meme project support during an early growth phase.",
    result: "$15K → $1M MARKET CAP",
    links: [],
  },
];

export default function WorkPage() {
  return (
    <section className="page-shell">
      <div className="page-shell__grid" aria-hidden="true" />
      <div className="page-shell__content">
        <p className="system-label">03 / WORK</p>
        <h1 className="display-title">Work built inside the projects, not from the sidelines.</h1>
        <p className="display-copy">
          Sammy has worked across memecoins, community, research, content and project growth.
          This archive highlights selected projects, roles and contributions.
        </p>

        <div style={{ display: "grid", gap: 24, marginTop: 56 }}>
          {projects.map((project) => (
            <article key={project.name} className="foundation-card">
              <span className="foundation-card__status">
                {project.status} / {project.chain}
              </span>
              <h2 style={{ marginTop: 18 }}>{project.name} {project.ticker && `(${project.ticker})`}</h2>
              <p><strong>{project.role}</strong></p>
              <p>{project.description}</p>
              {project.result && <p><strong>{project.result}</strong></p>}
              {project.ticker && (
                <p style={{ color: "var(--accent-strong)" }}>LIVE MARKET CAP: DYNAMIC DATA</p>
              )}
              {project.links.length > 0 && (
                <p>{project.links.join(" • ")}</p>
              )}
            </article>
          ))}
        </div>

        <a className="primary-button inline-button" href="https://t.me/sammygrace110">
          WORK WITH SAMMY →
        </a>
      </div>
    </section>
  );
}
