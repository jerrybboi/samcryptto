import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="05 / ABOUT"
      title="About Sammy"
      description="Biography, ghostwriting positioning and verified proof will be added in the About phase."
    />
  );
}
