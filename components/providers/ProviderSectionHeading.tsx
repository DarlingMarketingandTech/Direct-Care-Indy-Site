export function ProviderSectionHeading({
  id,
  eyebrow,
  title,
  children,
  align = "center",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div
      id={id}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{eyebrow}</p>
      ) : null}
      <h2 className={`heading-2 text-foreground ${eyebrow ? "mt-2" : ""}`}>{title}</h2>
      {children ? (
        <div className="mt-4 space-y-4 text-muted-foreground">{children}</div>
      ) : null}
    </div>
  );
}
