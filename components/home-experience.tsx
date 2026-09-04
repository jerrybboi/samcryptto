"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./home-experience.module.css";

const INTRO_SESSION_KEY = "sammy-intro-seen";

const loaderLines = [
  "Indexing archive...",
  "Loading narratives...",
  "Connecting communities...",
  "Preparing the signal...",
];

export function HomeExperience() {
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [loaderExiting, setLoaderExiting] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const alreadySeen = document.documentElement.dataset.sammyIntro === "seen";

    if (alreadySeen) {
      setLoaderVisible(false);
      return;
    }

    try {
      sessionStorage.setItem(INTRO_SESSION_KEY, "1");
    } catch (_) {
      // The intro still works if session storage is unavailable.
    }

    const statusTimer = window.setInterval(() => {
      setStatusIndex((current) => (current + 1) % loaderLines.length);
    }, 300);

    const exitTimer = window.setTimeout(() => setLoaderExiting(true), 1000);
    const hideTimer = window.setTimeout(() => {
      setLoaderVisible(false);
      document.documentElement.dataset.sammyIntro = "seen";
    }, 1250);

    return () => {
      window.clearInterval(statusTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className={styles.page}>
      {loaderVisible ? (
        <div className={`${styles.loader} ${loaderExiting ? styles.loaderExit : ""}`}>
          <div className={styles.loaderContent}>
            <div className={styles.loaderPortraitWrap} aria-hidden="true">
              <div className={styles.loaderRing} />
              <img className={styles.loaderPortrait} src="/sammy-pfp.webp" alt="" />
            </div>
            <p className={styles.loaderTitle}>LOADING SAMMY&apos;S PORTFOLIO</p>
            <p className={styles.loaderStatus} role="status" aria-live="polite">
              {loaderLines[statusIndex]}
            </p>
          </div>
        </div>
      ) : null}

      <section className={styles.hero}>
        <div className={styles.inner}>
          <p className="system-label">01 / HOME</p>

          <div className={styles.heroLayout}>
            <div className={styles.copy}>
              <p className={styles.identity}>DEFI ADVOCATE • CONTENT CREATOR • SPACE HOST</p>

              <h1 className={styles.title}>
                I turn Web3 ideas into narratives people understand, remember and connect with.
              </h1>

              <p className={styles.description}>
                Sammy Crypt works across Web3 content, ghostwriting, community, DeFi education and project narratives. He helps projects communicate clearly, build attention and stay connected to their communities.
              </p>

              <div className={styles.actions}>
                <a
                  className={`primary-button ${styles.primary}`}
                  href="https://t.me/sammygrace110"
                  target="_blank"
                  rel="noreferrer"
                >
                  MESSAGE ME ON TELEGRAM
                </a>
                <Link className={styles.secondary} href="/create">
                  EXPLORE ARCHIVE →
                </Link>
              </div>

              <div className={styles.capabilities} aria-label="Core capabilities">
                <span>CONTENT</span>
                <span>GHOSTWRITING</span>
                <span>COMMUNITY</span>
                <span>DEFI</span>
                <span>SPACE HOSTING</span>
                <span>NARRATIVE</span>
              </div>
            </div>

            <div className={styles.portraitFrame} aria-hidden="true">
              <img src="/sammy-pfp.webp" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
