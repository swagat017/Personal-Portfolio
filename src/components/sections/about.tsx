"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { about, personal } from "@/lib/data";

const stats = [
  { label: "ML Projects Shipped", value: "4" },
  { label: "Classifiers Compared", value: "3+" },
  { label: "Focus", value: "AI / ML" },
];

export function About() {
  return (
    <section id="about" className="py-28 sm:py-32">
      <Container>
        <SectionHeading
          index=""
          label="About"
          title="A little about how I got here"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <div className="relative mx-auto lg:mx-0 max-w-xs">
              <div className="absolute -inset-3 rounded-2xl bg-violet/10 blur-xl" />
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-border-soft bg-surface">
                <Image
                  src="/images/profile/personal2.jpeg"
                  alt={`${personal.name} working`}
                  fill
                  sizes="320px"
                  className="object-cover grayscale-[15%]"
                />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-border-soft bg-surface px-3 py-3 text-center"
                  >
                    <p className="font-display text-lg text-violet">{s.value}</p>
                    <p className="font-mono text-[10px] text-slate mt-1 leading-tight">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-ink/90 leading-relaxed text-[15px] sm:text-base">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
