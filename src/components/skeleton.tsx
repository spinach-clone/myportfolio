export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-md bg-black/10 motion-reduce:animate-none ${className}`}
    />
  );
}
