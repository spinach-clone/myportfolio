import { ImagePlaceholderIcon } from "./icons";

export function ProjectPlaceholder({
  color = "#6C63FF",
  className = "",
  label,
}: {
  color?: string;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl ${className}`}
      style={{
        background: `linear-gradient(135deg, ${color}33 0%, ${color}14 100%)`,
      }}
    >
      <div
        className="flex flex-col items-center gap-2 text-center"
        style={{ color }}
      >
        <ImagePlaceholderIcon className="h-8 w-8" />
        <span className="small-text text-inherit!">
          {label ?? "Image placeholder"}
        </span>
      </div>
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `radial-gradient(${color}55 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
        }}
      />
    </div>
  );
}
