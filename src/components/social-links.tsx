import { EmailIcon, GitHubIcon, LinkedInIcon } from "./icons";
import { profile } from "@/lib/profile";

const socials = [
  { href: profile.github, label: "GitHub", Icon: GitHubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: EmailIcon },
];

export function SocialLinks({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const styles =
    variant === "dark"
      ? "border-white/15 text-footer-text-secondary hover:border-primary-light/60 hover:text-primary-light"
      : "border-black/10 text-text-secondary hover:border-primary/40 hover:text-primary";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={label}
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${styles}`}
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
