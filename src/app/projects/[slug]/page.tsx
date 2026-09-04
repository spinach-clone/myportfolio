import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { LikeButton } from "@/components/like-button";
import { ProjectPlaceholder } from "@/components/project-placeholder";
import { PageLoader } from "@/components/page-loader";
import { Reveal } from "@/components/reveal";
import { ProjectDetailSkeleton } from "@/components/skeletons";
import {
  UnderReconstructionBadge,
  UnderReconstructionOverlay,
} from "@/components/under-reconstruction-badge";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  GitHubIcon,
} from "@/components/icons";
import {
  getAdjacentProjects,
  getProjectBySlug,
  projects,
} from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.name} — Christo Rey Espina`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  if (project.underReconstruction) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-primary"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            All projects
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
            <UnderReconstructionBadge />
          </div>

          <h1 className="h1 mt-4">{project.name}</h1>
          <p className="body-text mt-4 text-lg">{project.shortDescription}</p>
        </Reveal>

        <Reveal>
          <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-2xl border border-black/10">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.name} preview`}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover object-top"
              />
            ) : (
              <ProjectPlaceholder color={project.color} className="h-full w-full" />
            )}
            <UnderReconstructionOverlay size="lg" />
          </div>
        </Reveal>

        <Reveal className="mt-10 flex flex-col items-center gap-2 rounded-2xl bg-primary/5 p-8 text-center">
          <p className="h3">Please stand by.</p>
          <p className="body-text max-w-md">
            This case study is getting a rebuild. Check back soon, or head
            back to see everything else.
          </p>
          <Button href="/projects" variant="secondary" className="mt-4">
            Back to projects
          </Button>
        </Reveal>
      </div>
    );
  }

  const { previous, next } = getAdjacentProjects(slug);

  return (
    <PageLoader skeleton={<ProjectDetailSkeleton />}>
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-primary"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            All projects
          </Link>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <h1 className="h1 mt-4">{project.name}</h1>
          <p className="body-text mt-4 text-lg">{project.description}</p>

          <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-black/10 py-6 sm:grid-cols-4">
            <div>
              <dt className="small-text">Role</dt>
              <dd className="mt-1 font-medium text-text-primary">{project.role}</dd>
            </div>
            <div>
              <dt className="small-text">Year</dt>
              <dd className="mt-1 font-medium text-text-primary">{project.year}</dd>
            </div>
            <div>
              <dt className="small-text">Likes</dt>
              <dd className="mt-1">
                <LikeButton slug={project.slug} baseCount={project.likes} />
              </dd>
            </div>
            <div>
              <dt className="small-text">Links</dt>
              <dd className="mt-1 flex gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live demo"
                    className="text-text-primary hover:text-primary"
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub repository"
                    className="text-text-primary hover:text-primary"
                  >
                    <GitHubIcon className="h-4 w-4" />
                  </a>
                )}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal>
          {project.image ? (
            <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-2xl border border-black/10">
              <Image
                src={project.image}
                alt={`${project.name} hero section`}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover object-top"
              />
            </div>
          ) : (
            <ProjectPlaceholder
              color={project.color}
              className="mt-10 aspect-video w-full"
              label="Project screenshot"
            />
          )}
        </Reveal>

        <Reveal>
          <section className="mt-14">
            <h2 className="h2 text-2xl!">The problem</h2>
            <p className="body-text mt-4 text-base">{project.problem}</p>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-12">
            <h2 className="h2 text-2xl!">The solution</h2>
            <p className="body-text mt-4 text-base">{project.solution}</p>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-12">
            <h2 className="h2 text-2xl!">Process</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {(
                [
                  ["Research", project.process.research],
                  ["Design", project.process.design],
                  ["Development", project.process.development],
                ] as const
              ).map(([label, text]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-black/10 bg-surface p-5"
                >
                  <h3 className="font-heading text-sm font-bold text-primary">
                    {label}
                  </h3>
                  <p className="body-text mt-2">{text}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-12">
            <h2 className="h2 text-2xl!">Key features</h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="body-text flex items-start gap-2 rounded-xl bg-primary/5 px-4 py-3"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.screenshots && project.screenshots.length > 0 ? (
              project.screenshots.map((src, index) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-2xl border border-black/10"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- sized to each screenshot's own aspect ratio instead of a fixed square that would crop these portrait mobile screenshots */}
                  <img
                    src={src}
                    alt={`${project.name} screenshot ${index + 1}`}
                    className="block h-auto w-full"
                  />
                </div>
              ))
            ) : (
              <>
                <ProjectPlaceholder
                  color={project.color}
                  className="aspect-square w-full"
                  label="Screenshot"
                />
                <ProjectPlaceholder
                  color={project.color}
                  className="aspect-square w-full"
                  label="Screenshot"
                />
              </>
            )}
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-12">
            <h2 className="h2 text-2xl!">What I learned</h2>
            <p className="body-text mt-4 text-base">{project.learned}</p>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-12">
            <h2 className="h2 text-2xl!">Tech stack</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-black/10 bg-surface px-4 py-2 text-sm font-medium text-text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className="mt-12 flex flex-wrap gap-3">
          {project.liveUrl && (
            <Button href={project.liveUrl} external>
              Live demo
              <ExternalLinkIcon className="h-4 w-4" />
            </Button>
          )}
          {project.presentationUrl && (
            <Button href={project.presentationUrl} variant="secondary" external>
              View presentation
              <ExternalLinkIcon className="h-4 w-4" />
            </Button>
          )}
          {project.githubUrl && (
            <Button href={project.githubUrl} variant="secondary" external>
              View code
              <GitHubIcon className="h-4 w-4" />
            </Button>
          )}
        </Reveal>

        <Reveal className="mt-16 flex flex-col items-start gap-4 rounded-2xl bg-primary/5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="h3 text-lg!">Have a suggestion to improve it?</h3>
            <p className="body-text mt-1">I&apos;d love to hear it.</p>
          </div>
          <Button href="/contact" variant="secondary">
            Share feedback
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </Reveal>

        <nav className="mt-20 grid grid-cols-2 gap-4 border-t border-black/10 pt-8">
          <Link
            href={`/projects/${previous.slug}`}
            className="group flex flex-col gap-1"
          >
            <span className="small-text inline-flex items-center gap-1.5">
              <ArrowLeftIcon className="h-3.5 w-3.5" />
              Previous
            </span>
            <span className="font-semibold text-text-primary group-hover:text-primary">
              {previous.name}
            </span>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-col items-end gap-1 text-right"
          >
            <span className="small-text inline-flex items-center gap-1.5">
              Next
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </span>
            <span className="font-semibold text-text-primary group-hover:text-primary">
              {next.name}
            </span>
          </Link>
        </nav>
      </div>
    </PageLoader>
  );
}
