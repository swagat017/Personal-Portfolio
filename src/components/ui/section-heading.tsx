export function SectionHeading({
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-14 max-w-2xl">
      <p className="font-mono text-sm text-violet mb-4">
        {label}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-slate leading-relaxed">{description}</p>
      )}
    </div>
  );
}
