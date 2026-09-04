export function GradientBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute -top-24 right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-primary-light/30 blur-3xl" />
      <div className="absolute bottom-[-10rem] left-1/3 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
    </div>
  );
}
