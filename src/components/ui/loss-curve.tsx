"use client";

import { motion } from "framer-motion";

/**
 * The site's signature element: a loss curve that draws itself in,
 * echoing the training-loss plots that appear in the actual projects
 * below. Used once under the hero headline, and again (flipped/muted)
 * as a section divider — never as generic decoration.
 */
export function LossCurve({
  className = "",
  width = 280,
  height = 40,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  const path = "M0,4 C30,6 45,10 60,18 C80,28 95,34 120,36 C160,38.5 220,39.5 280,39.8";

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d={path}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        pathLength={1}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1], delay: 0.4 }}
      />
    </svg>
  );
}
