import type { Metadata } from "next";
import { employersMetadata } from "@/lib/metadata";

export const metadata: Metadata = employersMetadata;

export default function EmployersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

