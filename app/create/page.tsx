import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Create" };

export default function CreatePage() {
  return (
    <PageShell
      eyebrow="02 / CREATE"
      title="Create archive"
      description="The content archive structure is reserved for Phase 3."
    />
  );
}
