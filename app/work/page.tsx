import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <PageShell
      eyebrow="03 / WORK"
      title="Selected work"
      description="Projects, roles and live token proof will be added in the Work phase."
    />
  );
}
