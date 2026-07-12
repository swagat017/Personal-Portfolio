"use client";

import { motion } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1] as const;

function ChartFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full w-full flex items-center justify-center bg-surface">
      <div className="grid-texture absolute inset-0 opacity-[0.35]" />
      <svg
        viewBox="0 0 320 200"
        className="relative w-[86%] h-[76%]"
        aria-hidden="true"
      >
        {children}
      </svg>
    </div>
  );
}

// CNN — real per-epoch training loss from the project README (1.3788 → 0.1688)
const cnnLoss = [1.3788, 0.9544, 0.7674, 0.6382, 0.5258, 0.4322, 0.3467, 0.2708, 0.2086, 0.1688];

export function LossCurveChart() {
  const max = Math.max(...cnnLoss);
  const points = cnnLoss.map((v, i) => {
    const x = 10 + (i / (cnnLoss.length - 1)) * 300;
    const y = 170 - (v / max) * 140;
    return `${x},${y}`;
  });
  const path = `M${points.join(" L")}`;
  const areaPath = `${path} L310,170 L10,170 Z`;

  return (
    <ChartFrame>
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1="10" y1={30 + f * 140} x2="310" y2={30 + f * 140} className="stroke-border-soft" strokeWidth="1" />
      ))}
      <motion.path
        d={areaPath}
        fill="var(--violet)"
        opacity={0.08}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
      />
      <motion.path
        d={path}
        stroke="var(--violet)"
        strokeWidth={2.5}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, ease: easeOut }}
      />
      <text x="10" y="188" className="fill-slate font-mono" fontSize="9">epoch 1</text>
      <text x="270" y="188" className="fill-slate font-mono" fontSize="9">epoch 10</text>
      <text x="248" y="24" className="fill-violet font-mono" fontSize="10">74.87% acc</text>
    </ChartFrame>
  );
}

// CreditWise — real accuracy figures: baseline 86.5% -> engineered 88%
export function BarCompareChart() {
  const bars = [
    { label: "Baseline", value: 86.5 },
    { label: "Engineered", value: 88 },
  ];
  const max = 100;
  return (
    <ChartFrame>
      <line x1="10" y1="170" x2="310" y2="170" className="stroke-border-soft" strokeWidth="1" />
      {bars.map((b, i) => {
        const barW = 70;
        const x = 60 + i * 140;
        const h = (b.value / max) * 130;
        return (
          <g key={b.label}>
            <motion.rect
              x={x}
              width={barW}
              y={170}
              rx={6}
              fill={i === 1 ? "var(--violet)" : "var(--violet-soft)"}
              opacity={i === 1 ? 1 : 0.55}
              initial={{ height: 0, y: 170 }}
              whileInView={{ height: h, y: 170 - h }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: easeOut }}
            />
            <text x={x + barW / 2} y={170 - h - 10} textAnchor="middle" className="fill-ink font-mono" fontSize="11">
              {b.value}%
            </text>
            <text x={x + barW / 2} y={186} textAnchor="middle" className="fill-slate font-mono" fontSize="9">
              {b.label}
            </text>
          </g>
        );
      })}
    </ChartFrame>
  );
}

// SmartCart — 4 clusters in PCA space (illustrative distribution, real cluster count)
const clusterSeed: { x: number; y: number; c: number }[] = [
  { x: 60, y: 60, c: 0 }, { x: 75, y: 45, c: 0 }, { x: 50, y: 75, c: 0 }, { x: 85, y: 65, c: 0 }, { x: 65, y: 90, c: 0 },
  { x: 220, y: 50, c: 1 }, { x: 240, y: 65, c: 1 }, { x: 205, y: 40, c: 1 }, { x: 235, y: 35, c: 1 },
  { x: 90, y: 150, c: 2 }, { x: 110, y: 165, c: 2 }, { x: 70, y: 165, c: 2 }, { x: 100, y: 180, c: 2 },
  { x: 240, y: 155, c: 3 }, { x: 260, y: 140, c: 3 }, { x: 225, y: 170, c: 3 }, { x: 255, y: 175, c: 3 }, { x: 270, y: 155, c: 3 },
];
const clusterColors = ["var(--violet)", "var(--violet-soft)", "var(--slate)", "var(--violet-strong)"];

export function ClusterScatterChart() {
  return (
    <ChartFrame>
      {clusterSeed.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={5}
          fill={clusterColors[p.c]}
          opacity={0.85}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.85, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.03, ease: easeOut }}
        />
      ))}
      <text x="16" y="18" className="fill-slate font-mono" fontSize="9">PCA-2D</text>
      <text x="240" y="18" className="fill-violet font-mono" fontSize="10">k = 4</text>
    </ChartFrame>
  );
}

// ANN — dual metrics: regression R^2 0.93, classification 91.7%
export function DualMetricChart() {
  const metrics = [
    { label: "Regression R²", value: 0.93, display: "0.93" },
    { label: "Classification", value: 0.917, display: "91.7%" },
  ];
  const radius = 34;
  const circumference = 2 * Math.PI * radius;

  return (
    <ChartFrame>
      {metrics.map((m, i) => {
        const cx = 100 + i * 130;
        const cy = 100;
        return (
          <g key={m.label}>
            <circle cx={cx} cy={cy} r={radius} fill="none" className="stroke-border-soft" strokeWidth={8} />
            <motion.circle
              cx={cx}
              cy={cy}
              r={radius}
              fill="none"
              stroke={i === 0 ? "var(--violet)" : "var(--violet-soft)"}
              strokeWidth={8}
              strokeLinecap="round"
              strokeDasharray={circumference}
              transform={`rotate(-90 ${cx} ${cy})`}
              initial={{ strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset: circumference * (1 - m.value) }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: i * 0.2, ease: easeOut }}
            />
            <text x={cx} y={cy + 5} textAnchor="middle" className="fill-ink font-mono" fontSize="15" fontWeight={600}>
              {m.display}
            </text>
            <text x={cx} y={cy + radius + 22} textAnchor="middle" className="fill-slate font-mono" fontSize="9">
              {m.label}
            </text>
          </g>
        );
      })}
    </ChartFrame>
  );
}

export function ProjectVisual({ chart }: { chart: "loss-curve" | "bar-compare" | "cluster-scatter" | "dual-metric" }) {
  switch (chart) {
    case "loss-curve":
      return <LossCurveChart />;
    case "bar-compare":
      return <BarCompareChart />;
    case "cluster-scatter":
      return <ClusterScatterChart />;
    case "dual-metric":
      return <DualMetricChart />;
  }
}
