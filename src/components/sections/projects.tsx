import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-28 sm:py-32">
      <Container>
        <SectionHeading
          index="03"
          label="Projects"
          title="Selected work"
          description="Four end-to-end projects spanning deep learning, classical ML, and unsupervised learning - each taken from raw data through to evaluated results."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
