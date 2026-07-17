"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { skills } from "@/lib/data";

function SkillTag({ name }: { name: string }) {
  return (
    <span className="inline-block rounded-full border border-border-soft bg-surface-2 px-3.5 py-1.5 text-sm text-ink transition-colors hover:border-violet hover:text-violet">
      {name}
    </span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-28 sm:py-32 bg-surface/40">
      <Container>
        <SectionHeading
          index="02"
          label="Skills"
          title="Tools I reach for"
          description="Grouped the way I actually use them - from core programming to the ML and DL libraries behind each project below."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {skills.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.06}>
              <div className="rounded-2xl border border-border-soft bg-paper p-6 sm:p-7 h-full">
                <p className="font-mono text-xs text-violet mb-5 uppercase tracking-wide">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((s) => (
                    <SkillTag key={s.name} name={s.name} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
