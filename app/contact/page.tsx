import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="06 / CONTACT"
      title="Start a conversation"
      description="Telegram is the primary contact path. The final contact experience will be built in its dedicated phase."
    />
  );
}
