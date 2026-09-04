import type { Metadata } from "next";
import { HomeExperience } from "@/components/home-experience";

export const metadata: Metadata = { title: "Home" };

export default function HomePage() {
  return <HomeExperience />;
}
