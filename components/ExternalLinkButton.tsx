type Variant = "default" | "accent" | "ghost";

type Props = {
  href: string;
  label: string;
  variant?: Variant;
  disabled?: boolean;
};

/**
 * Notion-inspired buttons.
 * - accent : filled brand-brown, primary CTA
 * - default: translucent warm-gray, secondary action
 * - ghost  : transparent with underline-on-hover, tertiary action
 * Radius: 4px (micro) — Notion's hallmark for functional buttons.
 */
export function ExternalLinkButton({
  href,
  label,
  variant = "default",
  disabled,
}: Props) {
  if (disabled) {
    return (
      <span className="inline-flex cursor-not-allowed items-center justify-center rounded-[4px] border border-black/10 px-4 py-2 text-[14px] font-medium text-[#a39e98]">
        {label}
      </span>
    );
  }

  const cls =
    variant === "accent"
      ? "bg-[#523410] text-white hover:bg-[#3d2608]"
      : variant === "ghost"
        ? "bg-transparent text-[rgba(0,0,0,0.95)] hover:underline underline-offset-4"
        : "bg-black/[0.05] text-[rgba(0,0,0,0.95)] hover:bg-black/[0.08]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-[4px] px-4 py-2 text-[14px] font-semibold transition active:scale-[0.97] ${cls}`}
    >
      {label}
    </a>
  );
}
