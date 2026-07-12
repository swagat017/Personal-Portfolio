"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { skills } from "@/lib/data";

function SkillBar({ name, level }: { name: string; level: number }) {
  const pct = (level / 5) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-sm text-ink">{name}</span>
        <span className="font-mono text-xs text-slate">{level}/5</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-surface-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-violet-soft to-violet"
        />
      </div>
    </div>
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
                <div className="space-y-5">
                  {group.skills.map((s) => (
                    <SkillBar key={s.name} name={s.name} level={s.level} />
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
