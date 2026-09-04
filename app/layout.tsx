import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import {
  IBM_Plex_Mono,
  Instrument_Serif,
  Inter,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const editorial = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sammycryptto.fun"),
  title: {
    default: "Sammy Crypto | Web3 Content, Community & Research",
    template: "%s | Sammy Crypto",
  },
  description:
    "Sammy Crypto is a Web3 content creator, ghostwriter, DeFi advocate and X Space host working across content, community, research and project narratives.",
  applicationName: "Sammy Crypto",
  openGraph: {
    title: "Sammy Crypto",
    description:
      "Web3 content, ghostwriting, community, research, narratives and X Space hosting.",
    url: "/",
    siteName: "Sammy Crypto",
    images: [
      {
        url: "/sammy-pfp.webp",
        width: 1200,
        height: 1200,
        alt: "Sammy Crypto",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sammy Crypto",
    description:
      "Web3 content, ghostwriting, community, research, narratives and X Space hosting.",
    images: ["/sammy-pfp.webp"],
    creator: "@samcryptto",
  },
};

const themeBootScript = `
(function () {
  try {
    var saved = localStorage.getItem('sammy-theme');
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = saved === 'light' || saved === 'dark' ? saved : (systemDark ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
  } catch (_) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className={`${heading.variable} ${body.variable} ${mono.variable} ${editorial.variable}`}>
        <div className="site-frame">
          <SiteHeader />
          <main className="site-main">{children}</main>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
