import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons";
import {
  profile,
  processSteps,
  education,
  certifications,
  achievements,
  tools,
} from "@/lib/profile";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "ATS-Friendly Resume — Christo Rey Espina",
  description:
    "A single-page, scannable summary of Christo Rey Espina's background, projects, and skills.",
};

export default function AtsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-primary"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back to portfolio
      </Link>

      <header className="mt-6 border-b border-black/10 pb-6">
        <h1 className="text-3xl font-bold text-text-primary">{profile.name}</h1>
        <p className="mt-1 text-lg text-text-secondary">{profile.title}</p>
        <p className="mt-3 text-sm text-text-secondary">
          {profile.phone} | {profile.email} |{" "}
          {profile.linkedin.replace("https://", "")} |{" "}
          {profile.github.replace("https://", "")} | {profile.location}
        </p>
      </header>

      <section className="mt-8">
        <h2 className="small-text font-bold tracking-wide text-primary uppercase">
          Summary
        </h2>
        <p className="mt-2 text-base leading-relaxed text-text-primary">
          {profile.summary}
        </p>
      </section>

      <section className="mt-8">
        <h2 className="small-text font-bold tracking-wide text-primary uppercase">
          Skills
        </h2>
        <p className="mt-2 text-base leading-relaxed text-text-primary">
          {tools.join(", ")}
        </p>
      </section>

      <section className="mt-8">
        <h2 className="small-text font-bold tracking-wide text-primary uppercase">
          Projects
        </h2>
        <ul className="mt-3 flex flex-col gap-5">
          {projects.map((project) => (
            <li key={project.slug}>
              <h3 className="font-semibold text-text-primary">
                {project.name} — {project.role} ({project.year})
              </h3>
              <p className="mt-1 text-base leading-relaxed text-text-primary">
                {project.description}
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                Tech: {project.techStack.join(", ")}
              </p>
              {(project.liveUrl || project.githubUrl) && (
                <p className="mt-1 text-sm text-text-secondary">
                  {project.liveUrl && <>Live: {project.liveUrl}</>}
                  {project.liveUrl && project.githubUrl && "  |  "}
                  {project.githubUrl && <>Code: {project.githubUrl}</>}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="small-text font-bold tracking-wide text-primary uppercase">
          Approach
        </h2>
        <ol className="mt-3 flex flex-col gap-2">
          {processSteps.map((step, index) => (
            <li key={step.title} className="text-base leading-relaxed text-text-primary">
              {index + 1}. <strong>{step.title}:</strong> {step.description}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="small-text font-bold tracking-wide text-primary uppercase">
          Education
        </h2>
        <ul className="mt-3 flex flex-col gap-1">
          {education.map((item) => (
            <li key={item.school} className="text-base text-text-primary">
              {item.degree} — {item.school} ({item.period})
              {item.honors && (
                <span className="block text-sm text-text-secondary">
                  {item.honors}
                </span>
              )}
              {item.coursework && (
                <span className="block text-sm text-text-secondary">
                  Coursework: {item.coursework}
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="small-text font-bold tracking-wide text-primary uppercase">
          Certifications
        </h2>
        <ul className="mt-3 flex flex-col gap-1">
          {certifications.map((cert) => (
            <li key={cert.title} className="text-base text-text-primary">
              {cert.title}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="small-text font-bold tracking-wide text-primary uppercase">
          Achievements
        </h2>
        <ul className="mt-3 flex flex-col gap-1">
          {achievements.map((achievement) => (
            <li key={achievement.text} className="text-base text-text-primary">
              {achievement.text}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10 border-t border-black/10 pt-6">
        <a
          href="/resume.pdf"
          download
          className="text-sm font-semibold text-primary hover:underline"
        >
          Download PDF resume
        </a>
      </div>
    </div>
  );
}
