type Variant = "default" | "accent" | "ghost";

type Props = {
  href: string;
  label: string;
  variant?: Variant;
  disabled?: boolean;
};

/**
 * Buttons for the warm-dark theme.
 * - accent : gold outline + translucent fill — primary action
 * - default: whisper border — secondary action
 * - ghost  : underline-on-hover — tertiary
 */
export function ExternalLinkButton({
  href,
  label,
  variant = "default",
  disabled,
}: Props) {
  if (disabled) {
    return (
      <span className="inline-flex cursor-not-allowed items-center justify-center border border-white/[0.06] px-5 py-2.5 font-serif text-[12px] tracking-[0.24em] text-[#4a4440]">
        {label}
      </span>
    );
  }

  const cls =
    variant === "accent"
      ? "border-[rgba(201,169,98,0.4)] bg-[rgba(201,169,98,0.08)] text-[#d9be83] hover:border-[rgba(201,169,98,0.7)] hover:bg-[rgba(201,169,98,0.16)]"
      : variant === "ghost"
        ? "border-transparent text-[#a39e98] hover:text-[#eae6de]"
        : "border-white/[0.1] text-[#a39e98] hover:border-white/[0.24] hover:text-[#eae6de]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center border px-5 py-2.5 font-serif text-[12px] tracking-[0.24em] transition ${cls}`}
    >
      {label}
    </a>
  );
}
