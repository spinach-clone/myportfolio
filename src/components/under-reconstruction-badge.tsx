import { ConstructionIcon } from "./icons";

export function UnderReconstructionBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600 ${className}`}
    >
      <ConstructionIcon className="h-3.5 w-3.5" />
      Under Reconstruction
    </span>
  );
}

export function UnderReconstructionOverlay({
  size = "md",
}: {
  size?: "sm" | "md" | "lg";
}) {
  const badge = size === "lg" ? "h-16 w-16" : size === "sm" ? "h-10 w-10" : "h-12 w-12";
  const icon = size === "lg" ? "h-7 w-7" : size === "sm" ? "h-4 w-4" : "h-5 w-5";
  const label = size === "sm" ? "text-xs" : "text-sm";

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/55 text-center text-white backdrop-blur-[1px]">
      <span
        className={`flex items-center justify-center rounded-full bg-white/15 ${badge}`}
      >
        <ConstructionIcon className={icon} />
      </span>
      <p className={`font-semibold ${label}`}>Under Reconstruction</p>
    </div>
  );
}
