"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { personal } from "@/lib/data";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name"),
  email: z.string().trim().email("Enter a valid email"),
  message: z.string().trim().min(10, "Message should be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const contactItems = [
  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/[^\d+]/g, "")}` },
  { icon: MapPin, label: "Location", value: personal.location, href: undefined },
  { icon: GithubIcon, label: "GitHub", value: "github.com/swagat017", href: personal.github },
  { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/swagat-nepal", href: personal.linkedin },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    const subject = encodeURIComponent(`Portfolio contact from ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
    window.location.assign(`mailto:${personal.email}?subject=${subject}&body=${body}`);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-28 sm:py-32 bg-surface/40">
      <Container>
        <SectionHeading
          index="06"
          label="Contact"
          title="Let's talk"
          description="Open to internships and AI/ML roles. Reach out directly or send a message below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
          <Reveal>
            <ul className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-xl border border-border-soft bg-paper px-5 py-4 transition-colors hover:border-violet/50">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-tint text-violet">
                      <Icon className="h-[18px] w-[18px]" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[11px] text-slate">{item.label}</p>
                      <p className="text-sm text-ink truncate">{item.value}</p>
                    </div>
                  </div>
                );
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-2xl border border-border-soft bg-paper p-6 sm:p-8 space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm text-ink mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  {...register("name")}
                  className="w-full rounded-lg border border-border-soft bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-slate/70 focus:border-violet outline-none transition-colors"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-ink mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  {...register("email")}
                  className="w-full rounded-lg border border-border-soft bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-slate/70 focus:border-violet outline-none transition-colors"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-ink mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  {...register("message")}
                  className="w-full resize-none rounded-lg border border-border-soft bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-slate/70 focus:border-violet outline-none transition-colors"
                  placeholder="What would you like to talk about?"
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-full bg-violet px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-violet-strong hover:-translate-y-0.5 disabled:opacity-60 cursor-pointer"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Opening email…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </button>
              <p className="text-xs text-slate">
                This opens your email client with the message pre-filled. No data is stored.
              </p>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
