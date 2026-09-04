import Link from "next/link";
import { Folder } from "./folder";

type FolderCardProps = {
  title: string;
  subtitle: string;
  href: string;
  color: string;
  className?: string;
  scaleClassName: string;
  zIndex: number;
  isHovered: boolean;
  isDimmed: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
};

export function FolderCard({
  title,
  subtitle,
  href,
  color,
  className = "",
  scaleClassName,
  zIndex,
  isHovered,
  isDimmed,
  onHoverStart,
  onHoverEnd,
}: FolderCardProps) {
  return (
    <Link
      href={href}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onFocus={onHoverStart}
      onBlur={onHoverEnd}
      style={{
        zIndex: isHovered ? 50 : zIndex,
        opacity: isDimmed ? 0.4 : 1,
        filter: isHovered
          ? `drop-shadow(0 0 22px ${color}99) drop-shadow(0 0 44px ${color}55)`
          : "none",
      }}
      className={`group absolute transition-[opacity,filter] duration-300 ease-out ${className}`}
    >
      <div className="relative">
        <Folder color={color} className={scaleClassName} />
        <span className="pointer-events-none absolute inset-x-0 bottom-[14%] flex flex-col items-center px-2 text-white [text-shadow:0_1px_3px_rgb(0_0_0_/_0.25)]">
          <span className="font-heading text-sm font-bold sm:text-base lg:text-lg">
            {title}
          </span>
          <span className="text-[11px] text-white/85 sm:text-xs">{subtitle}</span>
        </span>
      </div>
    </Link>
  );
}
