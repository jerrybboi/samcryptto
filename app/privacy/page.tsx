import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Privacy Policy" };

const sections = [
  {
    title: "1. Information Collected Directly",
    paragraphs: [
      "The website currently does not require:",
    ],
    bullets: [
      "user accounts",
      "registration",
      "login",
      "payment information",
      "an on-site inquiry form",
      "profile creation",
    ],
    afterBullets: [
      "The website therefore does not currently ask visitors to directly submit personal information through the site itself.",
    ],
  },
  {
    title: "2. Information You Choose to Provide",
    paragraphs: [
      "If you contact Sammy through Telegram, X or email, you may voluntarily provide information such as:",
    ],
    bullets: [
      "your name",
      "email address",
      "Telegram or social media account",
      "company or project name",
      "project information",
      "service requirements",
      "other information you choose to include in your message",
    ],
    afterBullets: [
      "That information is used to respond to your inquiry and discuss possible work, collaboration or communication.",
    ],
  },
  {
    title: "3. Hosting and Technical Information",
    paragraphs: [
      "The website is hosted through third-party infrastructure.",
      "Hosting providers may automatically process technical information needed to operate, secure and deliver the website.",
      "This may include information such as:",
    ],
    bullets: [
      "IP address",
      "browser type",
      "device information",
      "request information",
      "timestamps",
      "technical logs",
    ],
    afterBullets: [
      "This information may be processed by the hosting provider according to its own privacy practices.",
    ],
  },
  {
    title: "4. Theme Preference",
    paragraphs: [
      "The website allows visitors to switch between light and dark appearance.",
      "Your selected theme may be stored locally in your browser so the website can remember your preference.",
      "This information is used only for the website experience and is not intended to identify you personally.",
    ],
  },
  {
    title: "5. Third-Party Services",
    paragraphs: [
      "This website links to external services such as:",
    ],
    bullets: [
      "Telegram",
      "X",
      "Vercel",
      "DEX Screener",
      "project websites",
      "other Web3 platforms and services",
    ],
    afterBullets: [
      "When you visit or interact with an external service, that service may collect or process information according to its own privacy policy.",
      "Sammy Crypt does not control the privacy practices of third-party platforms.",
    ],
  },
  {
    title: "6. Email Communications",
    paragraphs: [
      "If you contact Sammy by email, your email address, message and any information you provide may be retained for the purpose of replying to you, maintaining professional records or continuing a business conversation.",
    ],
  },
  {
    title: "7. Future Contact Form",
    paragraphs: [
      "The website may introduce an on-site project inquiry form in the future.",
      "If that feature is added, this Privacy Policy will be updated before or when the form becomes active to explain what information is collected, why it is collected and how it is handled.",
    ],
  },
  {
    title: "8. Data Sharing",
    paragraphs: [
      "Sammy Crypt does not sell personal information collected through direct professional communications.",
      "Information may be processed by service providers when necessary to operate communications, hosting or website functionality.",
    ],
  },
  {
    title: "9. Data Retention",
    paragraphs: [
      "Information voluntarily provided through email, Telegram, X or other communication channels may be retained for as long as reasonably necessary for the conversation, professional relationship, record keeping or related business purposes.",
    ],
  },
  {
    title: "10. Your Choices",
    paragraphs: [
      "You may choose not to provide personal information through the communication methods linked on this website.",
      "If you have previously contacted Sammy and want to ask about information you provided, you can reach out by email.",
    ],
  },
  {
    title: "11. Changes to This Policy",
    paragraphs: [
      "This Privacy Policy may be updated as the website develops or new services are introduced.",
      "The latest version will appear on this page.",
    ],
  },
  {
    title: "12. Contact",
    paragraphs: [
      "For privacy questions, contact:",
      "Cryptocrewhub123@gmail.com",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="PRIVACY POLICY"
      updated="Last updated: September 2026"
      intro={[
        "Sammy Crypt respects the privacy of visitors to this website.",
        "This Privacy Policy explains what information may be processed when you use the Sammy Crypt portfolio website and how your information may be handled when you choose to contact Sammy.",
      ]}
      sections={sections}
    />
  );
}
