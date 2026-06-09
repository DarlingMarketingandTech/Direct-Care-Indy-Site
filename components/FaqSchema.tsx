import { getDpcFaqFlatList } from "@/lib/content/what-is-dpc-faq";

function formatFaqAnswer(answer: string, bullets?: readonly string[]): string {
  if (!bullets?.length) return answer;
  return `${answer} ${bullets.join(". ")}.`;
}

export function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: getDpcFaqFlatList().map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: formatFaqAnswer(item.answer, item.bullets),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}
