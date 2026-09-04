import Link from "next/link";
import type { Project } from "@/lib/projects";
import { Badge } from "./badge";
import { ArrowRightIcon } from "./icons";

export function DesignShowcaseRow({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  const href = `/projects/${project.slug}`;
  const isReadyEmbed =
    project.prototypeUrl?.includes("embed.figma.com") ||
    project.prototypeUrl?.includes("figma.com/embed");
  const embedSrc = project.prototypeUrl
    ? isReadyEmbed
      ? project.prototypeUrl
      : `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(project.prototypeUrl)}`
    : undefined;

  return (
    <div className="grid grid-cols-1 items-center gap-8 py-10 sm:grid-cols-[280px_1fr] sm:gap-12 lg:grid-cols-[320px_1fr]">
      <div className={`mx-auto ${reverse ? "sm:order-last" : ""}`}>
        <div className="relative mx-auto h-[560px] w-[280px] overflow-hidden rounded-[2.5rem] border-[6px] border-black/90 bg-black shadow-2xl lg:h-[640px] lg:w-[320px]">
          {embedSrc ? (
            <iframe
              src={embedSrc}
              title={`${project.name} prototype`}
              className="h-full w-full"
              allow="fullscreen"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-primary/10 px-6 text-center text-sm text-text-secondary">
              Prototype coming soon
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-start gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <h3 className="h3">{project.name}</h3>
        <p className="body-text max-w-md">{project.shortDescription}</p>
        <Link
          href={href}
          className="group inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-primary"
        >
          View Case Study
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
