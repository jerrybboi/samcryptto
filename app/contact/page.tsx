import type { Metadata } from "next";
import InquiryForm from "./inquiry-form";
import styles from "./contact.module.css";

export const metadata: Metadata = { title: "Contact" };

const inquiryCategories = [
  "CONTENT WRITING",
  "GHOSTWRITING",
  "NARRATIVE & BRAND VOICE",
  "COMMUNITY SUPPORT",
  "RESEARCH & PROJECT SUPPORT",
  "X SPACE HOSTING",
  "PROJECT COLLABORATION",
  "OTHER",
];

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroInner}>
          <p className="system-label">06 / CONTACT</p>
          <p className={styles.kicker}>PROJECTS • CONTENT • COMMUNITY • COLLABORATION</p>
          <h1>Have something worth building, explaining or growing? Let’s talk.</h1>
          <p className={styles.intro}>
            Sammy works with Web3 founders, projects and teams across content, ghostwriting, community, research, narratives and X Space hosting.
          </p>
          <p className={styles.intro}>
            For project inquiries, collaborations or general conversations, reach out through the channel that works best for you.
          </p>
        </div>
      </section>

      <section className={styles.channelsSection}>
        <div className={styles.channelsInner}>
          <div className={styles.channelsGrid}>
            <article className={styles.channelCard}>
              <p className={styles.cardLabel}>FASTEST RESPONSE</p>
              <h2>Telegram</h2>
              <p>Best for project inquiries, service discussions and direct conversations.</p>
              <a
                className={styles.channelLink}
                href="https://t.me/sammygrace110"
                target="_blank"
                rel="noreferrer"
              >
                MESSAGE SAMMY ON TELEGRAM ↗
              </a>
            </article>

            <article className={styles.channelCard}>
              <p className={styles.cardLabel}>SOCIAL / DM</p>
              <h2>X / Twitter</h2>
              <p>Follow Sammy’s work or reach out through X.</p>
              <a
                className={styles.channelLink}
                href="https://x.com/samcryptto"
                target="_blank"
                rel="noreferrer"
              >
                MESSAGE ON X ↗
              </a>
            </article>

            <article className={styles.channelCard}>
              <p className={styles.cardLabel}>BUSINESS INQUIRIES</p>
              <h2>Email</h2>
              <p>For longer project briefs, partnerships or inquiries that are easier to discuss by email.</p>
              <p className={styles.emailAddress}>Cryptocrewhub123@gmail.com</p>
              <a className={styles.channelLink} href="mailto:Cryptocrewhub123@gmail.com">
                SEND AN EMAIL ↗
              </a>
            </article>
          </div>
        </div>
      </section>

      <InquiryForm />

      <section className={styles.categoriesSection}>
        <div className={styles.categoriesInner}>
          <p className={styles.sectionLabel}>WHAT CAN WE TALK ABOUT?</p>
          <div className={styles.categoryGrid}>
            {inquiryCategories.map((category) => (
              <span className={styles.categoryTag} key={category}>
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.closingSection}>
        <div className={styles.closingInner}>
          <div className={styles.closing}>
            <h2>Not sure which service fits?</h2>
            <p>Tell Sammy what you’re building and what you need help with. The conversation can start from there.</p>
            <a
              className="primary-button"
              href="https://t.me/sammygrace110"
              target="_blank"
              rel="noreferrer"
            >
              START ON TELEGRAM →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
