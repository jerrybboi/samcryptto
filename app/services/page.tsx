import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="04 / SERVICES"
      title="Services"
      description="Structured service modules will be populated from Sammy's confirmed capabilities."
    />
  );
}
