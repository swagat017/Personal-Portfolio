"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { LossCurve } from "@/components/ui/loss-curve";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { personal } from "@/lib/data";

function useTypewriter(words: string[], speed = 65, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => i + 1);
      }, 0);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? t.slice(0, -1) : current.slice(0, t.length + 1)
          );
        },
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(personal.roles);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="grid-texture absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <Container className="relative grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-10 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-sm text-violet mb-5"
          >
            {"Hello, I'm"}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink leading-[1.05]"
          >
            {personal.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 h-9 flex items-center"
          >
            <span className="font-display text-xl sm:text-2xl text-slate">
              {typed}
              <span className="inline-block w-[2px] h-6 bg-violet ml-1 align-middle animate-pulse" />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-violet mt-6"
          >
            <LossCurve width={220} height={32} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-lg text-slate leading-relaxed"
          >
            {personal.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="#resume" variant="primary">
              View Resume
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
            <div className="flex items-center gap-1 ml-1">
              <Button
                href={personal.github}
                variant="ghost"
                external
                className="!px-2.5"
              >
                <GithubIcon className="h-[18px] w-[18px]" aria-label="GitHub" />
              </Button>
              <Button
                href={personal.linkedin}
                variant="ghost"
                external
                className="!px-2.5"
              >
                <LinkedinIcon className="h-[18px] w-[18px]" aria-label="LinkedIn" />
              </Button>
              <Button
                href={`mailto:${personal.email}`}
                variant="ghost"
                external
                className="!px-2.5"
              >
                <Mail className="h-[18px] w-[18px]" aria-label="Email" />
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-violet/15 blur-2xl" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-border-soft bg-surface">
            <Image
              src="/images/profile/profile-hero.webp"
              alt={`Portrait of ${personal.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 384px, 420px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-paper/40 via-transparent to-transparent dark:from-black/30" />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-xl border border-border-soft bg-surface px-4 py-2.5 shadow-lg backdrop-blur-sm">
            <p className="font-mono text-[11px] text-slate">Status</p>
            <p className="font-mono text-sm text-violet">Open to work</p>
          </div>
        </motion.div>
      </Container>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate hover:text-violet transition-colors"
        aria-label="Scroll to About section"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
