import type { Metadata } from "next";
import { PageLoader } from "@/components/page-loader";
import { ProjectsSkeleton } from "@/components/skeletons";
import { ProjectsExperience } from "@/components/projects-experience";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Christo Rey Espina",
  description: "A collection of web and mobile products designed and built by Christo Rey Espina.",
};

export default function ProjectsPage() {
  return (
    <PageLoader skeleton={<ProjectsSkeleton />}>
      <ProjectsExperience projects={projects} />
    </PageLoader>
  );
}
