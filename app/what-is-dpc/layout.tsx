import { whatIsDpcMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = whatIsDpcMetadata;

export default function WhatIsDpcLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
