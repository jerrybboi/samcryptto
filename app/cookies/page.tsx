import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Cookies & Local Storage" };

const sections = [
  {
    title: "1. Advertising Cookies",
    paragraphs: [
      "This website does not currently intentionally use advertising or marketing cookies.",
      "There are currently no advertising pixels or personalized advertising systems intentionally installed on the website.",
    ],
  },
  {
    title: "2. Analytics",
    paragraphs: [
      "The website does not currently intentionally use third-party visitor analytics for advertising or behavioral profiling.",
      "If analytics tools are introduced later, this page will be updated to reflect how they are used.",
    ],
  },
  {
    title: "3. Local Storage",
    paragraphs: [
      "The website may use local browser storage to remember preferences such as whether you selected light mode or dark mode.",
      "This allows the website to maintain your selected appearance when you return.",
    ],
  },
  {
    title: "4. Essential Technical Technologies",
    paragraphs: [
      "The website and its hosting infrastructure may use technical storage, request information or similar technologies where necessary to deliver, secure and operate the website.",
      "These technologies may be managed by hosting or infrastructure providers.",
    ],
  },
  {
    title: "5. Third-Party Websites",
    paragraphs: [
      "This website contains links to external platforms such as Telegram, X, DEX Screener and project websites.",
      "Those services may use their own cookies, tracking technologies or local storage after you visit them.",
      "Their use of those technologies is governed by their own policies.",
    ],
  },
  {
    title: "6. Managing Browser Storage",
    paragraphs: [
      "You can remove cookies and locally stored website data through your browser settings.",
      "Removing stored preferences may cause the website to forget settings such as your selected theme.",
    ],
  },
  {
    title: "7. Future Changes",
    paragraphs: [
      "If the website later introduces analytics, advertising, additional tracking technologies or other cookie-based features, this page will be updated accordingly.",
      "Where consent is legally required, an appropriate consent mechanism can also be introduced.",
    ],
  },
  {
    title: "8. Contact",
    paragraphs: [
      "Questions about cookies or browser storage can be sent to:",
      "Cryptocrewhub123@gmail.com",
    ],
  },
];

export default function CookiesPage() {
  return (
    <LegalPage
      title="COOKIES & LOCAL STORAGE"
      updated="Last updated: September 2026"
      intro={[
        "This page explains how the Sammy Crypt portfolio website currently uses browser storage and similar technologies.",
      ]}
      sections={sections}
    />
  );
}
