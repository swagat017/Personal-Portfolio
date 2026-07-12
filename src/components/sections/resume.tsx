"use client";

import { useState } from "react";
import { ZoomIn, ZoomOut, RotateCcw, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { personal } from "@/lib/data";

const MIN_ZOOM = 0.7;
const MAX_ZOOM = 1.8;
const STEP = 0.15;

export function Resume() {
  const [zoom, setZoom] = useState(1);

  return (
    <section id="resume" className="py-28 sm:py-32">
      <Container>
        <SectionHeading
          index="05"
          label="Resume"
          title="Resume"
          description="Viewable directly below — use the controls to zoom in on any section."
        />

        <Reveal>
          <div className="rounded-2xl border border-border-soft bg-surface overflow-hidden">
            <div className="flex items-center justify-between border-b border-border-soft px-4 sm:px-6 py-3">
              <p className="font-mono text-xs text-slate">
                {personal.name.toLowerCase().replace(" ", "_")}_resume.pdf
              </p>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  aria-label="Zoom out"
                  onClick={() => setZoom((z) => Math.max(MIN_ZOOM, +(z - STEP).toFixed(2)))}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border-soft text-ink hover:border-violet hover:text-violet transition-colors cursor-pointer"
                >
                  <ZoomOut className="h-3.5 w-3.5" />
                </button>
                <span className="font-mono text-xs text-slate w-10 text-center">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  type="button"
                  aria-label="Zoom in"
                  onClick={() => setZoom((z) => Math.min(MAX_ZOOM, +(z + STEP).toFixed(2)))}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border-soft text-ink hover:border-violet hover:text-violet transition-colors cursor-pointer"
                >
                  <ZoomIn className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  aria-label="Reset zoom"
                  onClick={() => setZoom(1)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border-soft text-ink hover:border-violet hover:text-violet transition-colors cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open resume in a new tab"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border-soft text-ink hover:border-violet hover:text-violet transition-colors ml-1"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="relative w-full h-[70vh] sm:h-[80vh] overflow-auto bg-surface-2/40">
              <div
                className="origin-top-left transition-transform duration-200 ease-out"
                style={{
                  transform: `scale(${zoom})`,
                  width: `${100 / zoom}%`,
                  height: `${100 / zoom}%`,
                }}
              >
                <iframe
                  src={`${personal.resumeUrl}#toolbar=0&navpanes=0`}
                  title={`${personal.name} resume`}
                  className="w-full h-[70vh] sm:h-[80vh] border-0"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
