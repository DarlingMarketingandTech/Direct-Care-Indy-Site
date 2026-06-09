export function PricingDisclaimer({ inverted = false }: { inverted?: boolean }) {
  return (
    <p
      className={`text-center text-sm ${inverted ? "text-primary-foreground/80" : "text-muted-foreground"}`}
    >
      Pricing subject to change. Contact Direct Care Indy for current rates and
      enrollment details.
    </p>
  );
}
