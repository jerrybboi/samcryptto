import type { Metadata } from "next";
import { HomeExperience } from "@/components/home-experience";

export const metadata: Metadata = {
  title: { absolute: "Home | Sammy Crypto" },
};

export default function HomePage() {
  return <HomeExperience />;
}

