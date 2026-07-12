"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ProjectVisual } from "@/components/ui/project-visuals";
import { GithubIcon } from "@/components/ui/social-icons";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group rounded-2xl border border-border-soft bg-surface overflow-hidden transition-colors hover:border-violet/50">
      <div className="h-48 sm:h-56 overflow-hidden">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
          <ProjectVisual chart={project.chart} />
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-lg text-ink font-medium">
            {project.title}
          </h3>
          <span className="shrink-0 font-mono text-[11px] text-violet bg-violet-tint rounded-full px-2.5 py-1">
            {project.metric.value}
          </span>
        </div>

        <p className="mt-3 text-sm text-slate leading-relaxed">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] text-slate border border-border-soft rounded-full px-2.5 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-ink hover:text-violet transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
            View code
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="inline-flex items-center gap-1.5 text-sm text-slate hover:text-violet transition-colors ml-auto cursor-pointer"
          >
            {open ? "Less detail" : "More detail"}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-5 pt-5 border-t border-border-soft space-y-4">
                <div>
                  <p className="font-mono text-[11px] text-violet mb-1.5">
                    Problem Solved
                  </p>
                  <p className="text-sm text-ink/85 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] text-violet mb-1.5">
                    Challenges
                  </p>
                  <p className="text-sm text-ink/85 leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] text-violet mb-1.5">
                    Key Learnings
                  </p>
                  <p className="text-sm text-ink/85 leading-relaxed">
                    {project.learnings}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
