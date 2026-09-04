import type { Metadata } from "next";
import Image from "next/image";
import styles from "./about.module.css";

export const metadata: Metadata = { title: "About" };

const capabilities = [
  "CONTENT WRITING",
  "GHOSTWRITING",
  "COMMUNITY",
  "RESEARCH",
  "DEFI",
  "PROJECT NARRATIVES",
  "X SPACE HOSTING",
  "ONCHAIN CULTURE",
];

const knownFor = [
  {
    title: "Making complex Web3 ideas easier to understand",
    copy: "Breaking down products, protocols, market concepts and project narratives without losing the important details.",
  },
  {
    title: "Writing with the project’s voice in mind",
    copy: "Creating threads, long form content, announcements and ghostwritten posts that fit the people or brands they represent.",
  },
  {
    title: "Working inside communities",
    copy: "Experience supporting project communities through management, promotion, engagement and communication.",
  },
  {
    title: "Research before narrative",
    copy: "Understanding the product, ecosystem and market context before deciding how the story should be told.",
  },
  {
    title: "Hosting conversations",
    copy: "Using X Spaces to bring projects, communities and ideas into live conversations.",
  },
];

const experience = [
  {
    title: "Content",
    copy: "Threads, educational writing, long form posts and project content.",
  },
  {
    title: "Community",
    copy: "Community management, engagement, promotion and project support.",
  },
  {
    title: "Research",
    copy: "Project research, ecosystem research and narrative support.",
  },
  {
    title: "Onchain",
    copy: "Experience across DeFi, memecoins, Solana, Base, Robinhood Chain, prediction markets and other Web3 ecosystems.",
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroInner}>
          <p className="system-label">05 / ABOUT</p>
          <p className={styles.kicker}>WEB3 • CONTENT • COMMUNITY • RESEARCH</p>
          <h1>I work where content, community and onchain culture meet.</h1>
        </div>
      </section>

      <section className={styles.profileSection}>
        <div className={styles.profileInner}>
          <div className={styles.portraitWrap}>
            <div className={styles.portraitFrame}>
              <Image
                className={styles.portrait}
                src="/sammy-pfp.webp"
                alt="Sammy Crypt"
                fill
                sizes="(max-width: 900px) 90vw, 38vw"
                priority
              />
            </div>
          </div>

          <div className={styles.copyColumn}>
            <p className={styles.lead}>
              Sammy Crypt is a Web3 content creator, ghostwriter, DeFi advocate and X Space host.
            </p>
            <p>
              His work sits across content, community, research and project narratives. He has written educational threads, long form content and project campaigns while also working directly with memecoin communities and Web3 teams behind the scenes.
            </p>
            <p>
              Beyond writing, Sammy has contributed to projects through community management, promotion, research and core team support. His focus is simple: understand the project, find the story worth telling and communicate it in a way the community can actually connect with.
            </p>
            <p>
              From DeFi and trading education to memecoins, prediction markets and onchain culture, his experience comes from being involved in the space, not just writing about it.
            </p>

            <div className={styles.tags} aria-label="Sammy Crypt capabilities">
              {capabilities.map((capability) => (
                <span key={capability}>{capability}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.knownSection}>
        <div className={styles.knownInner}>
          <p className={styles.sectionLabel}>WHAT I’M KNOWN FOR</p>
          <div className={styles.knownGrid}>
            {knownFor.map((item) => (
              <article className={styles.knownItem} key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.experienceSection}>
        <div className={styles.experienceInner}>
          <p className={styles.sectionLabel}>SELECTED EXPERIENCE</p>
          <div className={styles.experienceGrid}>
            {experience.map((item) => (
              <article className={styles.experienceItem} key={item.title}>
                <p className={styles.experienceLabel}>{item.title}</p>
                <h2>{item.title}</h2>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div className={styles.cta}>
            <h2>Want to build something people can understand and care about?</h2>
            <p>Talk to Sammy about content, community, research, ghostwriting or Space hosting.</p>
            <a
              className="primary-button"
              href="https://t.me/sammygrace110"
              target="_blank"
              rel="noreferrer"
            >
              MESSAGE SAMMY ON TELEGRAM →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
