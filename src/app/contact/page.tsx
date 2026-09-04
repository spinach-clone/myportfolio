import type { Metadata } from "next";
import {
  ChevronDownIcon,
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  PhoneIcon,
} from "@/components/icons";
import { FloatingLogo } from "@/components/floating-logo";
import { ContactForm } from "./contact-form";
import { PageLoader } from "@/components/page-loader";
import { Reveal } from "@/components/reveal";
import { ContactSkeleton } from "@/components/skeletons";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Contact — Christo Rey Espina",
  description: "Get in touch with Christo Rey Espina about a project or opportunity.",
};

const contactDetails = [
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    Icon: PhoneIcon,
  },
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: EmailIcon,
  },
  {
    label: "LinkedIn",
    value: profile.linkedin.replace("https://", ""),
    href: profile.linkedin,
    Icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: profile.github.replace("https://", ""),
    href: profile.github,
    Icon: GitHubIcon,
  },
];

const faqs = [
  {
    question: "Are you currently looking for an internship?",
    answer:
      "Yes. I'm currently looking for opportunities in UI/UX, Product Design, Software Development, or Web Development where I can contribute while continuing to learn and grow.",
  },
  {
    question: "What kind of roles are you interested in?",
    answer:
      "I'm particularly interested in UI/UX and Product Design, as well as front-end, full-stack, and web/mobile development roles.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "I primarily work with React, React Native, JavaScript, Supabase, Laravel, Tailwind CSS, and Figma. I'm also comfortable learning new tools and technologies when a project calls for them.",
  },
  {
    question: "What have you worked on so far?",
    answer:
      "Most of my experience comes from academic and personal projects. I've worked on web and mobile applications involving areas such as food donation, crowdfunding, AI-assisted interview practice, and smart meal planning.",
  },
  {
    question: "How can I get in touch with you?",
    answer:
      "You can use the contact form above to send me a message. If you leave your email, I'll be able to get back to you directly.",
  },
];

export default function ContactPage() {
  return (
    <PageLoader skeleton={<ContactSkeleton />}>
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="relative">
          <FloatingLogo className="right-0 -top-6 hidden sm:block lg:top-0 lg:right-4" />

          <Reveal>
            <p className="small-text mb-4 font-medium text-primary">Contact</p>
            <h1 className="h1 max-w-xl">Let&apos;s Work Together.</h1>
            <p className="body-text mt-4 max-w-lg text-lg">
              Whether it’s an internship opportunity, a role, or simply a conversation, I’d love to hear from you. Send me a message and I’ll get back to you.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {contactDetails.map(({ label, value, href, Icon }, index) => (
                <Reveal key={label} delay={index * 80}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-surface p-4 transition-colors hover:border-primary/40"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block small-text">{label}</span>
                      <span className="block font-medium text-text-primary group-hover:text-primary">
                        {value}
                      </span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={240} className="rounded-2xl bg-primary/5 p-5">
              <p className="small-text">Based in</p>
              <p className="mt-1 font-medium text-text-primary">
                {profile.location} &middot; {profile.timezone}
              </p>
            </Reveal>
          </div>

          <Reveal
            delay={120}
            className="rounded-2xl border border-black/10 bg-surface p-6 sm:p-8"
          >
            <ContactForm />
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="small-text mb-4 font-medium text-primary">FAQs</p>
            <h2 className="h2">Things people usually ask.</h2>
            <p className="body-text mt-4 max-w-lg">
              A few answers to questions that don&apos;t really fit anywhere else
              in this portfolio.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 60}>
                <details className="group rounded-2xl border border-black/10 bg-surface p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-text-primary">
                    {faq.question}
                    <ChevronDownIcon className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="body-text mt-3">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </PageLoader>
  );
}
