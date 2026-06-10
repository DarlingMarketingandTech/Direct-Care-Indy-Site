import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "The 2026 Indiana Birthday Rule: What Indianapolis Seniors Should Know | Direct Care Indy",
  description:
    "Learn how Indiana's Medigap Birthday Rule (HEA 1226) may allow Medicare Supplement plan changes during your birthday month—and how Direct Primary Care can complement your coverage. Individual results vary.",
  keywords: [
    "Indiana Medigap Birthday Rule",
    "HEA 1226",
    "Medicare Supplement Indianapolis",
    "HSA eligible DPC Medicare",
    "senior healthcare Indianapolis",
    "Medigap plan switching",
    "Guaranteed Issue window",
    "Medicare and Direct Primary Care",
  ],
  openGraph: {
    title: "The 2026 Indiana Birthday Rule: What Indianapolis Seniors Should Know",
    description:
      "Learn how Indiana's Medigap Birthday Rule (HEA 1226) may allow plan changes during your birthday month—and how DPC can complement Medicare coverage. Individual results vary.",
    type: "article",
    publishedTime: "2026-01-01T00:00:00Z",
    authors: ["Dr. James D. Pike, D.O."],
    images: [
      {
        url: "/images/marketing/senior-wellness.webp",
        width: 1200,
        height: 630,
        alt: "Indianapolis senior reviewing healthcare paperwork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The 2026 Indiana Birthday Rule: What Indianapolis Seniors Should Know",
    description:
      "How HEA 1226 may allow Medigap plan changes during your birthday month—and how DPC can complement Medicare. Individual results vary.",
    images: ["/images/marketing/senior-wellness.webp"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
