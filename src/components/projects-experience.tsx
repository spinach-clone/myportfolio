"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/projects";
import { Reveal } from "./reveal";
import { ProjectRow } from "./project-row";
import { DesignShowcaseRow } from "./design-showcase-row";

const ALL_FILTER = "All";
const DESIGN_SHOWCASE_SLUGS = ["zura", "chew", "nutrio"];

export function ProjectsExperience({ projects }: { projects: Project[] }) {
  const builtProjects = useMemo(
    () => projects.filter((project) => !project.designOnly),
    [projects],
  );
  const designShowcase = useMemo(
    () =>
      DESIGN_SHOWCASE_SLUGS.map((slug) =>
        projects.find((project) => project.slug === slug),
      ).filter((project): project is Project => Boolean(project)),
    [projects],
  );

  const filters = useMemo(
    () => [
      ALL_FILTER,
      ...Array.from(new Set(builtProjects.flatMap((project) => project.tags))),
    ],
    [builtProjects],
  );
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);

  const filteredProjects =
    activeFilter === ALL_FILTER
      ? builtProjects
      : builtProjects.filter((project) => project.tags.includes(activeFilter));

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <p className="small-text mb-4 font-medium text-primary">Projects</p>
        <h1 className="h1">Things I&apos;ve built.</h1>
        <p className="body-text mt-4 max-w-lg text-lg">
          A selection of products I&apos;ve designed and shipped, spanning web
          apps, mobile apps, and everything the work required in between.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-primary text-white"
                  : "border border-black/10 text-text-secondary hover:border-primary/40 hover:text-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-4 flex flex-col divide-y divide-black/5">
        {filteredProjects.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 3) * 100}>
            <ProjectRow project={project} reverse={index % 2 === 1} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-24">
        <h2 className="h2">Things I&apos;ve designed.</h2>
        <p className="body-text mt-4 max-w-lg">
          Mobile app prototypes you can interact with right here — tap
          through each one, or view the full case study.
        </p>
      </Reveal>

      <div className="mt-4 flex flex-col divide-y divide-black/5">
        {designShowcase.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 3) * 100}>
            <DesignShowcaseRow project={project} reverse={index % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
