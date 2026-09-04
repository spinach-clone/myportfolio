import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/button";
import { PageLoader } from "@/components/page-loader";
import { Reveal } from "@/components/reveal";
import { Stepper } from "@/components/stepper";
import { AboutSkeleton } from "@/components/skeletons";
import {
  ChevronDownIcon,
  DownloadIcon,
  CertificateIcon,
  TrophyIcon,
  SchoolIcon,
  CalendarIcon,
  StarIcon,
  BookIcon,
} from "@/components/icons";
import { HoverPreview } from "@/components/hover-preview";
import {
  profile,
  processSteps,
  education,
  certifications,
  achievements,
  tools,
} from "@/lib/profile";

export const metadata: Metadata = {
  title: "About — Christo Rey Espina",
  description:
    "Learn about Christo Rey Espina's background, process, and the tools behind the work.",
};

export default function AboutPage() {
  return (
    <PageLoader skeleton={<AboutSkeleton />}>
      <div className="mx-auto max-w-5xl px-6 pt-16 pb-24 sm:pt-20">
        <article>
          <Reveal>
            <p className="small-text mb-4 font-medium text-primary">
              More about me.
            </p>
            <h1 className="h1">A Product Builder in the Making.</h1>

            <div className="mt-6 flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-black/10">
                <Image
                  src="/profile.jpg"
                  alt=""
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <p className="small-text">
                <span className="font-semibold text-text-primary">
                  {profile.name}
                </span>{" "}
                · {profile.location}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="relative mt-10">
            <Image
              src="/cr-logo.svg"
              alt=""
              width={400}
              height={400}
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -bottom-16 -z-10 h-48 w-48 opacity-10 sm:-right-20 sm:-bottom-20 sm:h-64 sm:w-64"
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] border-4 border-white bg-primary/8 shadow-2xl sm:aspect-[16/10]">
              <Image
                src="/profile-landscape.png"
                alt="Christo Rey Espina"
                fill
                sizes="(min-width: 1024px) 672px, 100vw"
                quality={95}
                preload
                className="object-cover object-top"
              />
            </div>
          </Reveal>

          <Reveal delay={150} className="mt-10">
            <p className="body-text text-lg leading-relaxed">
              I&apos;m a fourth-year BS Information Technology student
              passionate about building digital products that are both
              functional and easy to use. I work across UI/UX design and
              full-stack web and mobile development, using tools like React,
              React Native, Figma, and Supabase to turn ideas into working
              applications. I enjoy learning by building, solving problems,
              and refining ideas through design and development. I&apos;m now
              looking for an internship where I can bring that mindset to a
              real team and continue growing as a UI/UX, Product Design, or
              Software/Web Developer.
            </p>

            <details className="group mt-6 rounded-2xl border border-black/10 bg-surface p-6 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-primary">
                I have a longer attention span
                <ChevronDownIcon className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="body-text mt-4 flex flex-col gap-4 leading-relaxed">
                <p>
                  I&apos;ve always enjoyed the process of taking an idea and
                  figuring out how to make it work. What started as school
                  projects gradually became something I genuinely
                  enjoy—designing interfaces, writing the code behind them,
                  solving problems along the way, and seeing an idea become
                  something people can actually interact with.
                </p>
                <p>
                  Being able to work across both design and development has
                  also shaped how I approach projects. I don&apos;t see
                  design and development as separate steps where one simply
                  hands work over to the other. I like understanding both
                  sides: thinking about how an experience should feel and
                  work, while also considering how it can realistically be
                  built.
                </p>
                <p>
                  Most of my experience so far has come from school and
                  personal projects. Through them, I&apos;ve worked with
                  technologies such as React, React Native, Supabase, and
                  Laravel, while using Figma to explore interfaces and user
                  experiences before bringing them to life. Each project has
                  given me a chance to experiment, make mistakes, rethink
                  decisions, and understand that the first solution is rarely
                  the best one.
                </p>
                <p>
                  That mindset is also why I&apos;m looking for an
                  internship. I want to take what I&apos;ve learned from
                  building on my own and apply it in a real team—where I can
                  contribute what I already know, learn from people with more
                  experience, and understand what it really takes to build
                  products that are useful, thoughtful, and well-made.
                </p>
              </div>
            </details>
          </Reveal>
        </article>

        <div className="mt-16 max-w-2xl">
          <Reveal>
            <h2 className="h2">How I work.</h2>
          </Reveal>
          <div className="mt-8">
            <Stepper steps={processSteps} size="md" titleAs="h3" titleClassName="h3 text-lg!" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2">
          <Reveal>
            <h2 className="h2 text-2xl!">Education</h2>
            <ul className="mt-6 flex flex-col gap-5">
              {education.map((item) => {
                const body = (
                  <>
                    <p className="font-semibold text-text-primary">
                      {item.degree}
                    </p>
                    <div className="mt-2 flex flex-col gap-1.5">
                      <span className="body-text flex items-start gap-2">
                        <SchoolIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {item.school}
                      </span>
                      <span className="body-text flex items-start gap-2">
                        <CalendarIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {item.period}
                      </span>
                      {item.honors && (
                        <span className="body-text flex items-start gap-2">
                          <StarIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {item.honors}
                        </span>
                      )}
                      {item.coursework && (
                        <span className="body-text flex items-start gap-2">
                          <BookIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          Coursework: {item.coursework}
                        </span>
                      )}
                    </div>
                  </>
                );
                return item.image ? (
                  <HoverPreview
                    key={item.school}
                    as="li"
                    src={item.image}
                    alt={`${item.degree} recognition`}
                    className="cursor-pointer"
                  >
                    {body}
                  </HoverPreview>
                ) : (
                  <li key={item.school}>{body}</li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="h2 text-2xl!">Certifications</h2>
            <ul className="mt-6 flex flex-col gap-3">
              {certifications.map((cert) =>
                cert.image ? (
                  <HoverPreview
                    key={cert.title}
                    as="li"
                    src={cert.image}
                    alt={cert.title}
                    fit="contain"
                    className="body-text flex cursor-pointer items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CertificateIcon className="h-3.5 w-3.5" />
                    </span>
                    {cert.title}
                  </HoverPreview>
                ) : (
                  <li
                    key={cert.title}
                    className="body-text flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CertificateIcon className="h-3.5 w-3.5" />
                    </span>
                    {cert.title}
                  </li>
                ),
              )}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <h2 className="h2 text-2xl!">Achievements</h2>
          <ul className="mt-6 flex flex-col gap-3">
            {achievements.map((achievement) =>
              achievement.image ? (
                <HoverPreview
                  key={achievement.text}
                  as="li"
                  src={achievement.image}
                  alt={achievement.text}
                  className="body-text flex cursor-pointer items-start gap-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <TrophyIcon className="h-3.5 w-3.5" />
                  </span>
                  {achievement.text}
                </HoverPreview>
              ) : (
                <li
                  key={achievement.text}
                  className="body-text flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <TrophyIcon className="h-3.5 w-3.5" />
                  </span>
                  {achievement.text}
                </li>
              ),
            )}
          </ul>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="h2 text-2xl!"> Tools I have experience with.</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-black/10 bg-surface px-4 py-2 text-sm font-medium text-text-primary"
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16 flex flex-col items-start gap-4 rounded-2xl bg-primary/5 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="h3">Want the full picture?</h3>
            <p className="body-text mt-1">
              Download my resume for the complete work history.
            </p>
          </div>
          <Button href="/resume.pdf" external>
            View Resume
            <DownloadIcon className="h-4 w-4" />
          </Button>
        </Reveal>
      </div>
    </PageLoader>
  );
}
