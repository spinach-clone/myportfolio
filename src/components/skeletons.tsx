import { Skeleton } from "./skeleton";

function StepperSkeleton({
  count,
  size = "sm",
}: {
  count: number;
  size?: "sm" | "md";
}) {
  const circle = size === "md" ? "h-9 w-9" : "h-8 w-8";
  const inset = size === "md" ? "top-[18px] bottom-[18px] left-[18px]" : "top-4 bottom-4 left-4";

  return (
    <div className="relative flex flex-col gap-6">
      <span className={`absolute w-0.5 -translate-x-1/2 rounded-full bg-black/10 ${inset}`} />
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="relative flex gap-4">
          <Skeleton className={`${circle} shrink-0 rounded-full`} />
          <div className="flex-1 space-y-2 pt-1">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

function WorkTimelineSkeleton({ count }: { count: number }) {
  return (
    <div className="relative flex flex-col gap-6">
      <span className="absolute top-7 bottom-7 left-7 w-0.5 -translate-x-1/2 rounded-full bg-black/10" />
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="relative flex gap-5 sm:gap-6">
          <Skeleton className="h-14 w-14 shrink-0 rounded-2xl" />
          <div className="flex-1 space-y-3 rounded-2xl border border-black/10 p-6">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectRowSkeleton({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="grid grid-cols-1 items-center gap-6 py-10 sm:grid-cols-2 sm:gap-10 lg:gap-16">
      <Skeleton
        className={`aspect-[16/10] w-full ${reverse ? "sm:order-last" : ""}`}
      />
      <div className="flex w-full flex-col items-start gap-3">
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-14 rounded-full" />
        </div>
        <Skeleton className="h-6 w-1/2" />
        <div className="w-full max-w-md space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <div className="flex w-full flex-wrap gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
        <Skeleton className="mt-1 h-4 w-28" />
      </div>
    </div>
  );
}

function DesignShowcaseRowSkeleton({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="grid grid-cols-1 items-center gap-8 py-10 sm:grid-cols-[280px_1fr] sm:gap-12 lg:grid-cols-[320px_1fr]">
      <Skeleton
        className={`mx-auto h-[560px] w-[280px] rounded-[2.5rem] lg:h-[640px] lg:w-[320px] ${reverse ? "sm:order-last" : ""}`}
      />
      <div className="flex flex-col items-start gap-3">
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-14 rounded-full" />
        </div>
        <Skeleton className="h-6 w-24" />
        <div className="w-full max-w-md space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <Skeleton className="mt-1 h-4 w-28" />
      </div>
    </div>
  );
}

export function HomeSkeleton() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden px-6 pt-16 pb-8 text-center sm:pt-20">
        <div className="relative mx-auto max-w-4xl">
          <div className="flex justify-start">
            <Skeleton className="h-9 w-40 rounded-[20px] rounded-bl-md sm:h-10 sm:w-48" />
          </div>
          <Skeleton className="mx-auto mt-3 h-10 w-[min(85vw,520px)] sm:mt-4 sm:h-16 sm:w-[min(70vw,620px)] lg:h-24 lg:w-[min(55vw,760px)]" />
        </div>

        <div className="relative mx-auto mt-20 max-w-4xl sm:mt-28">
          <div className="relative mx-auto h-[280px] w-full max-w-lg sm:h-[360px] sm:max-w-2xl lg:h-[430px] lg:max-w-3xl">
            <Skeleton className="absolute top-2 left-0 h-[190px] w-[150px] rounded-2xl sm:h-[250px] sm:w-[200px] lg:h-[300px] lg:w-[240px]" />
            <Skeleton className="absolute top-0 left-1/2 h-[220px] w-[170px] -translate-x-1/2 rounded-2xl sm:h-[290px] sm:w-[225px] lg:h-[350px] lg:w-[270px]" />
            <Skeleton className="absolute top-2 right-0 h-[190px] w-[150px] rounded-2xl sm:h-[250px] sm:w-[200px] lg:h-[300px] lg:w-[240px]" />
            <Skeleton className="absolute top-[-20%] left-[-4%] hidden h-11 w-11 rounded-full sm:block" />
            <Skeleton className="absolute top-[15%] left-[-19%] hidden h-11 w-11 rounded-full sm:block" />
            <Skeleton className="absolute top-[-9%] right-[-8%] hidden h-11 w-11 rounded-full sm:block" />
            <Skeleton className="absolute top-[21%] right-[-22%] hidden h-11 w-11 rounded-full sm:block" />
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="border-t border-black/5 bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-start gap-2">
              <Skeleton className="h-8 w-64" />
              <div className="mt-4 w-full max-w-md space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
              <Skeleton className="mt-6 h-11 w-32 rounded-full" />
            </div>
            <Skeleton className="mx-auto h-[340px] w-[270px] rounded-2xl sm:h-[400px] sm:w-[320px] lg:h-[460px] lg:w-[360px]" />
          </div>
        </div>
      </section>

      {/* Things I've built */}
      <section className="border-t border-black/5">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Skeleton className="mb-12 h-8 w-56" />
          <div className="flex flex-col divide-y divide-black/5">
            {Array.from({ length: 3 }).map((_, index) => (
              <ProjectRowSkeleton key={index} reverse={index % 2 === 1} />
            ))}
          </div>
          <div className="mt-10 flex justify-end">
            <Skeleton className="h-11 w-32 rounded-full" />
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="border-t border-black/5">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="mt-4 h-4 w-full max-w-md" />
          <div className="mt-10">
            <WorkTimelineSkeleton count={5} />
          </div>
        </div>
      </section>

      {/* Bento gallery */}
      <section className="border-t border-black/5 bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Skeleton className="mb-12 h-8 w-72" />
          <div className="grid grid-flow-row-dense grid-cols-2 auto-rows-[130px] gap-4 sm:grid-cols-4 sm:auto-rows-[150px]">
            {Array.from({ length: 7 }).map((_, index) => (
              <Skeleton
                key={index}
                className={
                  index === 0
                    ? "col-span-2 row-span-2"
                    : index === 3
                      ? "col-span-1 row-span-2"
                      : index === 4
                        ? "col-span-2 row-span-1"
                        : "col-span-1 row-span-1"
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-black/5">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24">
          <Skeleton className="mb-6 h-20 w-20 rounded-2xl sm:h-24 sm:w-24 lg:h-28 lg:w-28" />
          <Skeleton className="h-9 w-[min(70vw,320px)]" />
          <div className="mt-4 flex flex-col items-center gap-2">
            <Skeleton className="h-4 w-[min(80vw,380px)]" />
            <Skeleton className="h-4 w-[min(60vw,260px)]" />
          </div>
          <Skeleton className="mt-8 h-11 w-32 rounded-full" />
          <div className="mt-10 flex gap-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className="h-10 w-10 rounded-full" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function AboutSkeleton() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-16 pb-24 sm:pt-20">
      <div>
        <Skeleton className="h-4 w-24" />
        <Skeleton className="mt-4 h-10 w-full max-w-xl" />
        <div className="mt-6 flex items-center gap-3">
          <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
          <Skeleton className="h-4 w-56" />
        </div>
      </div>

      <Skeleton className="mt-10 aspect-[4/3] w-full rounded-[1.5rem] sm:aspect-[16/10]" />

      <div className="mt-10 max-w-2xl space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <Skeleton className="mt-6 h-16 w-full max-w-2xl rounded-2xl" />

      <div className="mt-16 max-w-2xl">
        <Skeleton className="h-8 w-40" />
        <div className="mt-10">
          <StepperSkeleton count={5} size="md" />
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2">
        <div className="space-y-4">
          <Skeleton className="h-7 w-32" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-7 w-40" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>

      <div className="mt-16">
        <Skeleton className="h-7 w-40" />
        <div className="mt-6 flex flex-col gap-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="h-5 w-full max-w-lg" />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <Skeleton className="h-7 w-48" />
        <div className="mt-6 flex flex-wrap gap-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} className="h-9 w-24 rounded-full" />
          ))}
        </div>
      </div>

      <Skeleton className="mt-16 h-28 w-full rounded-2xl" />
    </div>
  );
}

export function ProjectsSkeleton() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="mt-4 h-10 w-72" />
      <div className="mt-4 space-y-2">
        <Skeleton className="h-4 w-full max-w-lg" />
        <Skeleton className="h-4 w-2/3 max-w-md" />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {["w-12", "w-20", "w-16", "w-24", "w-16", "w-24"].map((width, index) => (
          <Skeleton key={index} className={`h-9 ${width} rounded-full`} />
        ))}
      </div>

      <div className="mt-4 flex flex-col divide-y divide-black/5">
        {Array.from({ length: 3 }).map((_, index) => (
          <ProjectRowSkeleton key={index} reverse={index % 2 === 1} />
        ))}
      </div>

      <div className="mt-24">
        <Skeleton className="h-8 w-64" />
        <div className="mt-4 space-y-2">
          <Skeleton className="h-4 w-full max-w-lg" />
        </div>
        <div className="mt-4 flex flex-col divide-y divide-black/5">
          {Array.from({ length: 3 }).map((_, index) => (
            <DesignShowcaseRowSkeleton key={index} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectDetailSkeleton() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Skeleton className="h-4 w-24" />

      <div className="mt-6 flex gap-2">
        <Skeleton className="h-5 w-16 rounded-full" />
        <Skeleton className="h-5 w-20 rounded-full" />
      </div>

      <Skeleton className="mt-4 h-9 w-2/3" />
      <div className="mt-4 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/2" />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6 border-y border-black/10 py-6 sm:grid-cols-4">
        <div className="space-y-2">
          <Skeleton className="h-3 w-12" />
          <Skeleton className="h-4 w-20" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-3 w-12" />
          <Skeleton className="h-4 w-20" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-3 w-12" />
          <Skeleton className="h-9 w-24 rounded-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-3 w-12" />
          <div className="flex gap-3">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-4" />
          </div>
        </div>
      </div>

      <Skeleton className="mt-10 aspect-video w-full" />

      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="mt-14 space-y-3">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      ))}

      <div className="mt-12 flex flex-wrap gap-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="h-9 w-20 rounded-full" />
        ))}
      </div>

      <div className="mt-16 flex flex-col items-start gap-4 rounded-2xl bg-primary/5 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <Skeleton className="h-5 w-56" />
          <Skeleton className="h-4 w-32" />
        </div>
        <Skeleton className="h-10 w-36 rounded-full" />
      </div>

      <div className="mt-20 grid grid-cols-2 gap-4 border-t border-black/10 pt-8">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
}

export function ContactSkeleton() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <Skeleton className="h-4 w-16" />
      <Skeleton className="mt-4 h-10 w-full max-w-xs" />
      <div className="mt-4 space-y-2">
        <Skeleton className="h-4 w-full max-w-lg" />
        <Skeleton className="h-4 w-2/3 max-w-md" />
      </div>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-2xl border border-black/10 bg-surface p-4"
              >
                <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-3 w-12" />
                  <Skeleton className="h-4 w-40" />
                </div>
              </div>
            ))}
          </div>
          <Skeleton className="h-20 w-full rounded-2xl" />
        </div>

        <div className="space-y-5 rounded-2xl border border-black/10 bg-surface p-6 sm:p-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-11 w-full rounded-xl" />
            </div>
          ))}
          <Skeleton className="h-11 w-36 rounded-full" />
        </div>
      </div>

      <div className="mt-20">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="mt-4 h-8 w-64" />
        <Skeleton className="mt-4 h-4 w-full max-w-lg" />
        <div className="mt-10 flex flex-col gap-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-14 w-full rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
