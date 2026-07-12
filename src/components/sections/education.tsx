import { GraduationCap, Award } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { education, certifications } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="py-28 sm:py-32 bg-surface/40">
      <Container>
        <SectionHeading index="04" label="Education" title="Academic background" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-16">
          <div className="relative pl-8 sm:pl-10">
            <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-border-soft" />
            <div className="space-y-12">
              {education.map((item, i) => (
                <Reveal key={item.institution} delay={i * 0.1}>
                  <div className="relative">
                    <div className="absolute -left-8 sm:-left-10 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-violet ring-4 ring-paper">
                      <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    </div>
                    <p className="font-mono text-xs text-violet mb-1">
                      {item.duration}
                    </p>
                    <h3 className="font-display text-lg text-ink font-medium">
                      {item.institution}
                    </h3>
                    <p className="text-sm text-slate mt-0.5">{item.degree}</p>
                    <p className="mt-3 text-sm text-ink/80 leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-border-soft bg-paper p-6 sm:p-7">
              <div className="flex items-center gap-2.5 mb-5">
                <Award className="h-4 w-4 text-violet" />
                <p className="font-mono text-xs text-violet uppercase tracking-wide">
                  Certifications
                </p>
              </div>
              <div className="space-y-4">
                {certifications.map((c) => (
                  <div key={c.name} className="flex items-start gap-3">
                    <GraduationCap className="h-4 w-4 text-slate mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-ink font-medium">{c.name}</p>
                      <p className="text-xs text-slate mt-0.5">
                        {c.issuer} · {c.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
