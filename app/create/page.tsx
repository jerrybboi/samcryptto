import type { Metadata } from "next";
import { CreateArchive } from "./create-archive";

export const metadata: Metadata = { title: "Create" };

export default function CreatePage() {
  return <CreateArchive />;
}
