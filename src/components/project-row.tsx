import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { Badge } from "./badge";
import { ProjectPlaceholder } from "./project-placeholder";
import {
  UnderReconstructionBadge,
  UnderReconstructionOverlay,
} from "./under-reconstruction-badge";
import { LikeButton } from "./like-button";
import { ArrowRightIcon } from "./icons";

export function ProjectRow({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  const href = `/projects/${project.slug}`;
  const locked = project.underReconstruction;

  const media = (
    <div className="relative transition-transform duration-300 group-hover:-translate-y-1">
      {project.image ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      ) : (
        <ProjectPlaceholder color={project.color} className="aspect-[16/10] w-full" />
      )}
      {locked && <UnderReconstructionOverlay />}
    </div>
  );

  return (
    <div className="group grid grid-cols-1 items-center gap-6 py-10 sm:grid-cols-2 sm:gap-10 lg:gap-16">
      {locked ? (
        <div className={reverse ? "sm:order-last" : ""}>{media}</div>
      ) : (
        <Link href={href} className={`block ${reverse ? "sm:order-last" : ""}`}>
          {media}
        </Link>
      )}
      <div className="flex flex-col items-start gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
          <span className="small-text">{project.year}</span>
          {locked && <UnderReconstructionBadge />}
        </div>
        {locked ? (
          <h3 className="h3">{project.name}</h3>
        ) : (
          <Link href={href}>
            <h3 className="h3 transition-colors group-hover:text-primary">
              {project.name}
            </h3>
          </Link>
        )}
        <p className="body-text max-w-md">{project.shortDescription}</p>
        <div
          className={`mt-1 flex w-full flex-wrap items-center gap-4 ${locked ? "justify-end" : "justify-between"}`}
        >
          {!locked && (
            <Link
              href={href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              View Project
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          )}
          <LikeButton slug={project.slug} baseCount={project.likes} />
        </div>
      </div>
    </div>
  );
}
