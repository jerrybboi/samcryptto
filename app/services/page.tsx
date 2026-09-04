import type { Metadata } from "next";
import styles from "./services.module.css";

export const metadata: Metadata = { title: "Services" };

const services = [
  {
    number: "01",
    title: "Content Writing",
    description:
      "Threads, long form posts, project announcements, educational content and campaign copy built around the way a project actually speaks.",
    capabilities: "THREADS • ARTICLES • ANNOUNCEMENTS • EDUCATION • CAMPAIGN COPY",
  },
  {
    number: "02",
    title: "Ghostwriting",
    description:
      "Writing for founders, projects and Web3 teams that need a consistent voice without having to write every post themselves.",
    capabilities: "FOUNDER CONTENT • PROJECT VOICE • LONG FORM • X CONTENT",
  },
  {
    number: "03",
    title: "Narrative & Brand Voice",
    description:
      "Helping projects explain what they do, why it matters and how to communicate it in a way people can actually remember.",
    capabilities: "POSITIONING • STORYTELLING • MESSAGING • TONE",
  },
  {
    number: "04",
    title: "Community Content & Support",
    description:
      "Content and communication for communities, including announcements, engagement pushes, project messaging and campaign support.",
    capabilities: "COMMUNITY CONTENT • ENGAGEMENT • ANNOUNCEMENTS • SUPPORT",
  },
  {
    number: "05",
    title: "X Space Hosting",
    description:
      "Hosting and supporting X Spaces for projects that want better conversations, community visibility and structured discussions around their product or narrative.",
    capabilities: "SPACE HOSTING • PROJECT DISCUSSIONS • COMMUNITY CONVERSATIONS",
  },
  {
    number: "06",
    title: "Research & Project Support",
    description:
      "Researching Web3 products, narratives, ecosystems and market angles to help teams make better content and communication decisions.",
    capabilities: "RESEARCH • PROJECT SUPPORT • MARKET CONTEXT • WEB3",
  },
];

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroInner}>
          <p className="system-label">04 / SERVICES</p>
          <p className={styles.kicker}>CONTENT • NARRATIVE • COMMUNITY • WEB3 SUPPORT</p>
          <h1>Clearer ideas. Stronger narratives. Better community attention.</h1>
          <p className={styles.intro}>
            Sammy works with Web3 projects that need sharper communication, stronger positioning and content that actually connects with their audience.
          </p>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.servicesInner}>
          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <article className={styles.card} key={service.number}>
                <div className={styles.cardTop}>
                  <p className={styles.serviceLabel}>SERVICE / {service.number}</p>
                  <span className={styles.serviceNumber} aria-hidden="true">{service.number}</span>
                </div>

                <div className={styles.cardBody}>
                  <h2>{service.title}</h2>
                  <p className={styles.description}>{service.description}</p>
                  <p className={styles.capabilities}>{service.capabilities}</p>
                  <a
                    className={styles.serviceLink}
                    href="https://t.me/sammygrace110"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DISCUSS SERVICE ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div className={styles.cta}>
            <h2>Need help making your project easier to understand and harder to ignore?</h2>
            <p>
              Sammy works across content, ghostwriting, community, research, narrative and Space hosting.
            </p>
            <a
              className="primary-button"
              href="https://t.me/sammygrace110"
              target="_blank"
              rel="noreferrer"
            >
              TELL SAMMY ABOUT YOUR PROJECT →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
