import Link from "next/link";
import type { Project } from "@/lib/projects";
import { Badge } from "./badge";
import { ProjectPlaceholder } from "./project-placeholder";
import {
  UnderReconstructionBadge,
  UnderReconstructionOverlay,
} from "./under-reconstruction-badge";
import { ArrowRightIcon } from "./icons";

export function ProjectCard({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  const href = `/projects/${project.slug}`;

  return (
    <div className="group grid grid-cols-1 items-center gap-6 py-10 sm:grid-cols-2 sm:gap-10 lg:gap-16">
      {(() => {
        const media = (
          <div className="relative overflow-hidden rounded-2xl transition-transform duration-300 group-hover:-translate-y-1">
            {project.image ? (
              // eslint-disable-next-line @next/next/no-img-element -- sized to the image's own aspect ratio so the container grows to fit it, instead of a fixed box that crops or letterboxes it
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className="block h-auto w-full"
              />
            ) : (
              <ProjectPlaceholder
                color={project.color}
                className="aspect-[16/10] w-full"
              />
            )}
            {project.underReconstruction && <UnderReconstructionOverlay />}
          </div>
        );

        return project.underReconstruction ? (
          <div className={reverse ? "sm:order-last" : ""}>{media}</div>
        ) : (
          <Link href={href} className={`block ${reverse ? "sm:order-last" : ""}`}>
            {media}
          </Link>
        );
      })()}
      <div className="flex flex-col items-start gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
          {project.underReconstruction && <UnderReconstructionBadge />}
        </div>
        {project.underReconstruction ? (
          <h3 className="h3">{project.name}</h3>
        ) : (
          <Link href={href}>
            <h3 className="h3 transition-colors group-hover:text-primary">
              {project.name}
            </h3>
          </Link>
        )}
        <p className="body-text max-w-md">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
        {!project.underReconstruction && (
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-primary"
          >
            View Case Study
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  );
}
