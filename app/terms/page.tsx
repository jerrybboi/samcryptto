import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Terms of Use" };

const sections = [
  {
    title: "1. About This Website",
    paragraphs: [
      "This website is the personal portfolio of Sammy Crypt.",
      "It is used to showcase selected work, writing, project experience, services and professional interests within Web3, cryptocurrency, DeFi, community, research and related areas.",
      "The website also provides ways to contact Sammy through platforms such as Telegram, X and email.",
    ],
  },
  {
    title: "2. Portfolio Content",
    paragraphs: [
      "The content displayed on this website is provided for portfolio, informational and professional purposes.",
      "This may include writing samples, project descriptions, campaign results, market information, links, graphics and references to projects Sammy has worked with.",
      "Some project names, logos, trademarks, images and other materials belong to their respective owners.",
      "Their inclusion in this portfolio does not transfer ownership of those materials to Sammy Crypt.",
    ],
  },
  {
    title: "3. Intellectual Property",
    paragraphs: [
      "Unless otherwise stated, original website copy, design, personal branding and original content created by Sammy Crypt remain the property of Sammy Crypt.",
      "You may view and share links to the website for personal or informational purposes.",
      "You may not reproduce, republish, impersonate, misrepresent or commercially exploit substantial portions of the website without permission.",
    ],
  },
  {
    title: "4. Acceptable Use",
    paragraphs: ["You agree not to use this website:"],
    bullets: [
      "for unlawful or fraudulent purposes",
      "to impersonate Sammy Crypt or another person",
      "to attempt to interfere with the security or operation of the website",
      "to copy or misuse portfolio materials in a misleading way",
      "to falsely represent a relationship, partnership or endorsement involving Sammy Crypt",
    ],
  },
  {
    title: "5. Third-Party Links",
    paragraphs: [
      "This website contains links to third-party platforms and websites, including Telegram, X, project websites, blockchain tools, DEX platforms and other external services.",
      "Sammy Crypt does not control these third-party services and is not responsible for their content, availability, security, policies or practices.",
      "Visiting an external website is done at your own discretion.",
    ],
  },
  {
    title: "6. Project Information",
    paragraphs: [
      "Information about projects, tokens, communities and previous work may change over time.",
      "Market values, project status, token information, links and other details may become outdated after publication.",
      "Where live market information is displayed, it may rely on third-party data sources and is not guaranteed to be perfectly accurate or continuously available.",
    ],
  },
  {
    title: "7. No Automatic Business Relationship",
    paragraphs: [
      "Contacting Sammy Crypt through this website, Telegram, X or email does not automatically create a client relationship, partnership, employment relationship or contractual agreement.",
      "Any professional engagement must be separately discussed and agreed upon.",
    ],
  },
  {
    title: "8. Availability",
    paragraphs: [
      "Sammy Crypt may update, modify, remove or reorganize any part of this website at any time.",
      "There is no guarantee that every page, link, feature or third-party service will always remain available.",
    ],
  },
  {
    title: "9. Limitation of Liability",
    paragraphs: [
      "To the extent permitted by applicable law, Sammy Crypt is not responsible for losses or damages arising from reliance on website content, third-party links, market information or external services referenced on this website.",
    ],
  },
  {
    title: "10. Changes to These Terms",
    paragraphs: [
      "These Terms of Use may be updated when the website, services or legal requirements change.",
      "The latest version will be published on this page.",
    ],
  },
  {
    title: "11. Contact",
    paragraphs: [
      "Questions about these Terms of Use can be sent to:",
      "Cryptocrewhub123@gmail.com",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="TERMS OF USE"
      updated="Last updated: September 2026"
      intro={[
        "Welcome to the Sammy Crypt portfolio website. These Terms of Use govern your access to and use of this website.",
        "By accessing or using this website, you agree to these terms. If you do not agree with them, please do not use the website.",
      ]}
      sections={sections}
    />
  );
}
