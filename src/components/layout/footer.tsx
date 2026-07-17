import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { personal } from "@/lib/data";

const quickLinks = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-soft py-10">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm text-ink">
            {personal.name}
            <span className="text-violet">.</span>
          </p>
          <p className="font-mono text-xs text-slate mt-1">
            © {new Date().getFullYear()}. Built with intent, one commit at a time.
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-slate">
          {quickLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-violet transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title = "GitHub"
            className="text-slate hover:text-violet transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title = "LinkedIn"
            className="text-slate hover:text-violet transition-colors"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            title = "Email"
            className="text-slate hover:text-violet transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
