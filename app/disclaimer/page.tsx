import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Disclaimer" };

const sections = [
  {
    title: "1. Not Financial Advice",
    paragraphs: [
      "Nothing on this website should be considered financial, investment, trading, legal or tax advice.",
      "References to cryptocurrencies, tokens, blockchain projects, DeFi protocols, prediction markets, market conditions or trading concepts are not recommendations to buy, sell or hold any asset.",
    ],
  },
  {
    title: "2. Cryptocurrency Risk",
    paragraphs: [
      "Cryptocurrency and Web3 markets can involve significant financial risk.",
      "Prices can change rapidly and users may lose some or all of the money they choose to invest.",
      "Visitors should conduct their own research and make independent decisions before interacting with any cryptocurrency, token, protocol, project or financial product.",
    ],
  },
  {
    title: "3. Educational Content",
    paragraphs: [
      "Threads, articles, market breakdowns, research and educational material shown in the Create archive represent content produced for educational, informational or professional purposes.",
      "They should not be treated as individualized financial advice.",
    ],
  },
  {
    title: "4. Portfolio Projects",
    paragraphs: [
      "Projects displayed on the Work page are presented to demonstrate Sammy Crypt’s professional experience, contributions and previous or ongoing involvement.",
      "A project appearing in the portfolio does not guarantee:",
    ],
    bullets: [
      "future project success",
      "token appreciation",
      "market performance",
      "profitability",
      "project longevity",
      "future results for another client",
    ],
  },
  {
    title: "5. Past Results",
    paragraphs: [
      "Any past results, growth figures, campaign outcomes or market-cap changes shown on this website describe specific historical work or project circumstances.",
      "Past performance does not guarantee similar future results.",
    ],
  },
  {
    title: "6. Market Data",
    paragraphs: [
      "Some market-cap or token information may be retrieved from third-party data providers.",
      "Although the website may attempt to display current information, no guarantee is made that market data is complete, accurate or available at all times.",
      "Always verify market information independently before making decisions.",
    ],
  },
  {
    title: "7. Third-Party Projects",
    paragraphs: [
      "References to third-party projects, brands, tokens, platforms or communities do not necessarily represent an endorsement of every aspect of those projects.",
      "Sammy Crypt is not responsible for the actions, security, financial performance, management or continued operation of third-party projects.",
    ],
  },
  {
    title: "8. External Links",
    paragraphs: [
      "Links to Telegram, X, DEX platforms, project websites and other third-party services are provided for convenience and reference.",
      "Use of those services is subject to their own terms, policies and risks.",
    ],
  },
  {
    title: "9. Professional Services",
    paragraphs: [
      "Descriptions of Sammy’s services are provided to explain the type of professional work he may offer.",
      "Specific deliverables, pricing, timelines and expectations must be separately agreed upon before work begins.",
    ],
  },
  {
    title: "10. Contact",
    paragraphs: [
      "Questions about this Disclaimer can be sent to:",
      "Cryptocrewhub123@gmail.com",
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="DISCLAIMER"
      updated="Last updated: September 2026"
      intro={[
        "The Sammy Crypt website is a personal and professional portfolio.",
        "Content on this website is provided for informational, educational and portfolio purposes only.",
      ]}
      sections={sections}
    />
  );
}
