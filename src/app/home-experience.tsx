"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/button";
import { ScratchImage } from "@/components/scratch-image";
import { ProjectCard } from "@/components/project-card";
import { SocialLinks } from "@/components/social-links";
import { FolderCard } from "@/components/folder-card";
import { IconOrb } from "@/components/icon-orb";
import { RotatingHeroText } from "@/components/rotating-hero-text";
import { GradientBackdrop } from "@/components/gradient-backdrop";
import { BentoGallery } from "@/components/bento-gallery";
import { Highlight } from "@/components/highlight";
import { WorkTimeline } from "@/components/work-timeline";
import { Reveal } from "@/components/reveal";
import { HomeSkeleton } from "@/components/skeletons";
import {
  ArrowRightIcon,
  CheckBadgeIcon,
  CodeIcon,
  EmailIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  PenIcon,
  RefreshIcon,
  SearchIcon,
} from "@/components/icons";
import { getFeaturedProjects } from "@/lib/projects";
import { profile } from "@/lib/profile";
import { useDelayedReady } from "@/hooks/use-delayed-ready";

const PROFILE_IMAGE_SRC = "/profile.jpg";
const PROFILE_IMAGE_ALT_SRC = "/profile2.png";

const folders = [
  {
    key: "projects",
    title: "Projects",
    subtitle: "See the work",
    href: "/projects",
    color: "#4F46E5",
    position: "left-0 top-2 -rotate-12",
    zIndex: 10,
    scale: "[--folder-scale:2.4] sm:[--folder-scale:3.2] lg:[--folder-scale:4]",
  },
  {
    key: "about",
    title: "About",
    subtitle: "My story",
    href: "/about",
    color: "#6C63FF",
    position: "left-1/2 top-0 -translate-x-1/2",
    zIndex: 20,
    scale:
      "[--folder-scale:2.7] sm:[--folder-scale:3.6] lg:[--folder-scale:4.6]",
    emphasized: true,
  },
  {
    key: "contacts",
    title: "Contacts",
    subtitle: "Say hello",
    href: "/contact",
    color: "#A29BFE",
    position: "right-0 top-2 rotate-12",
    zIndex: 10,
    scale: "[--folder-scale:2.4] sm:[--folder-scale:3.2] lg:[--folder-scale:4]",
  },
] as const;

const socialOrbs = [
  {
    key: "github",
    icon: <GitHubIcon className="h-5 w-5" />,
    label: "GitHub",
    message: "Where the magic happens. And the bugs.",
    glow: "#C7C2FF",
    href: profile.github,
    className: "top-[-26%] left-[-4%]",
    floatDuration: 3.4,
    floatDelay: 0,
  },
  {
    key: "gmail",
    icon: <EmailIcon className="h-5 w-5 text-[#F2685A]" />,
    label: "Gmail",
    message: "You could just say hi.",
    glow: "#FFB3A7",
    href: `mailto:${profile.email}`,
    className: "top-[12%] left-[-19%]",
    floatDuration: 4,
    floatDelay: 0.4,
  },
  {
    key: "instagram",
    icon: <InstagramIcon className="h-5 w-5" />,
    label: "Instagram",
    message: "A little less code, a little more me.",
    glow: "linear-gradient(45deg,#ffd9a0,#ffb3d1,#d9bdf0,#b9c6f7)",
    href: profile.instagram,
    className: "top-[-12%] right-[-8%]",
    floatDuration: 3.8,
    floatDelay: 0.2,
  },
  {
    key: "linkedin",
    icon: <LinkedInIcon className="h-5 w-5 text-[#4DA3FF]" />,
    label: "LinkedIn",
    message: "For my professional propaganda.",
    glow: "#AFD8FF",
    href: profile.linkedin,
    className: "top-[18%] right-[-22%]",
    floatDuration: 4.2,
    floatDelay: 0.6,
  },
] as const;

const howIWork = [
  {
    number: "01",
    title: "Research",
    icon: <SearchIcon className="h-full w-full" />,
    lead: "I understand the people, their needs, and the problem before I start solving it.",
    body: "I take the time to ask questions, observe how people work, and uncover what actually needs to be improved.",
  },
  {
    number: "02",
    title: "Design",
    icon: <PenIcon className="h-full w-full" />,
    lead: "I turn what I learn into a simple and thoughtful experience.",
    body: "I explore different ideas, shape the user journey, and create designs that make the solution easier to understand.",
  },
  {
    number: "03",
    title: "Build",
    icon: <CodeIcon className="h-full w-full" />,
    lead: "I bring my ideas to life through purposeful development.",
    body: "I translate the design into a working product while making sure the experience stays as close to the original intent as possible.",
  },
  {
    number: "04",
    title: "Test",
    icon: <CheckBadgeIcon className="h-full w-full" />,
    lead: "I put my work in front of users and learn from how they actually use it.",
    body: "Seeing where they struggle or succeed helps me spot things I might have overlooked on my own.",
  },
  {
    number: "05",
    title: "Iterate",
    icon: <RefreshIcon className="h-full w-full" />,
    lead: "I refine what I build based on what I learn and keep making it better.",
    body: "I use feedback and what I observe to make thoughtful changes instead of assuming the first version is the best one.",
  },
];

export function HomeExperience() {
  const featuredProjects = getFeaturedProjects();
  const ready = useDelayedReady(500);
  const [hoveredFolder, setHoveredFolder] = useState<string | null>(null);

  if (!ready) {
    return <HomeSkeleton />;
  }

  return (
    <div className="relative animate-fade-in">
      {/* Section 1 — Intro */}
      <section className="relative overflow-hidden px-6 pt-16 pb-8 text-center sm:pt-20">
        <GradientBackdrop />

        <Reveal className="relative mx-auto max-w-4xl">
          <div className="flex justify-start ml-[-55px] mb-[15px] pl-[18%] sm:pl-[22%] lg:pl-[24%]">
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.7 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 420, damping: 18 }}
              className="relative z-10 mb-[10px] w-fit rounded-[20px] rounded-bl-md bg-primary-light px-4 py-2 text-base tracking-wide text-text-primary shadow-[0_6px_20px_-6px_rgba(108,99,255,0.45)] sm:mb-[-10px] sm:text-lg"
            >
              It&apos;s me, hi! I&apos;m
            </motion.div>
          </div>
          <h1 className="mt-0 font-heading text-[40px] leading-[0.95] font-extrabold tracking-tight text-text-primary uppercase sm:text-[64px] lg:text-[88px]">
            <RotatingHeroText />
          </h1>
        </Reveal>

        <Reveal
          delay={150}
          className="relative mx-auto mt-20 max-w-4xl sm:mt-28"
        >
          <div className="relative mx-auto h-[280px] w-full max-w-lg sm:h-[360px] sm:max-w-2xl lg:h-[430px] lg:max-w-3xl">
            {socialOrbs.map((orb) => (
              <IconOrb
                key={orb.key}
                icon={orb.icon}
                label={orb.label}
                message={orb.message}
                glow={orb.glow}
                href={orb.href}
                floatDuration={orb.floatDuration}
                floatDelay={orb.floatDelay}
                className={`hidden sm:block ${orb.className}`}
              />
            ))}

            {folders.map((folder) => (
              <FolderCard
                key={folder.key}
                title={folder.title}
                subtitle={folder.subtitle}
                href={folder.href}
                color={folder.color}
                className={folder.position}
                scaleClassName={folder.scale}
                zIndex={folder.zIndex}
                isHovered={hoveredFolder === folder.key}
                isDimmed={hoveredFolder !== null && hoveredFolder !== folder.key}
                onHoverStart={() => setHoveredFolder(folder.key)}
                onHoverEnd={() =>
                  setHoveredFolder((current) =>
                    current === folder.key ? null : current,
                  )
                }
              />
            ))}
          </div>
        </Reveal>
      </section>

      {/* Section 2 — About Me */}
      <section className="border-t border-black/5 bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="h2">
                <Highlight>A Little About Me.</Highlight>
              </h2>
              <p className="body-text mt-6 max-w-md text-lg">
                {profile.summary}
              </p>

              <Button href="/about" variant="secondary" className="mt-10">
                View More
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </Reveal>

            <Reveal delay={150} className="mx-auto">
              <ScratchImage
                topSrc={PROFILE_IMAGE_SRC}
                bottomSrc={PROFILE_IMAGE_ALT_SRC}
                alt="Christo Rey Espina"
                className="h-[340px] w-[270px] rounded-2xl sm:h-[400px] sm:w-[320px] lg:h-[460px] lg:w-[360px]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 3 — Projects */}
      <section className="border-t border-black/5">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Reveal className="mb-12">
            <h2 className="h2">
              <Highlight>Things I&apos;ve built.</Highlight>
            </h2>
          </Reveal>
          <div className="flex flex-col divide-y divide-black/5">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 3) * 100}>
                <ProjectCard project={project} reverse={index % 2 === 1} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex justify-end">
            <Button href="/projects" variant="secondary">
              View More
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Section 4 — How I Work */}
      <section className="border-t border-black/5">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Reveal>
            <h2 className="h2">
              <Highlight>How I work.</Highlight>
            </h2>
            <p className="body-text mt-4 max-w-md">
              A quick look at how I take a project from a rough idea to
              something real.
            </p>

            <div className="mt-10">
              <WorkTimeline steps={howIWork} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 5 — Bento gallery */}
      <section className="border-t border-black/5 bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Reveal className="mb-12">
            <h2 className="h2">
              <Highlight>A Few Moments Along the Way.</Highlight>
            </h2>
          </Reveal>
          <Reveal>
            <BentoGallery />
          </Reveal>
        </div>
      </section>

      {/* Section 6 — Contact */}
      <section className="border-t border-black/5">
        <Reveal className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center">
          <Image
            src="/cr-logo.svg"
            alt=""
            width={200}
            height={200}
            className="mb-6 h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28"
          />
          <h2 className="h2 max-w-xl">Let&apos;s Work Together</h2>
          <p className="body-text mt-4 max-w-md">
            I&apos;m looking for an opportunity to learn, contribute, and grow
            with a great team.
          </p>
          <Button href="/contact" className="mt-8">
            View More
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
          <SocialLinks className="mt-10" />
        </Reveal>
      </section>
    </div>
  );
}
