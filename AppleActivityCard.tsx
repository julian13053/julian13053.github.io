"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ActivityData {
  label: string;
  value: number; // Prozentualer Fortschritt
  color: string;
  size: number;
  current: number;
  target: number;
  unit: string;
}

interface CircleProgressProps {
  data: ActivityData;
  index: number;
}

const CircleProgress = ({ data, index }: CircleProgressProps) => {
  const strokeWidth = 16;
  const radius = (data.size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = ((100 - Math.min(data.value, 100)) / 100) * circumference;

  const gradientId = `gradient-${data.label.toLowerCase()}`;
  const gradientUrl = `url(#${gradientId})`;

  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
    >
      <div className="relative">
        <svg
          aria-label={`${data.label} Stats Progress - ${data.value}%`}
          className="-rotate-90 transform"
          height={data.size}
          viewBox={`0 0 ${data.size} ${data.size}`}
          width={data.size}
        >
          <title>{`${data.label} Stats Progress - ${data.value}%`}</title>

          <defs>
            <linearGradient id={gradientId} x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: data.color, stopOpacity: 1 }} />
              <stop
                offset="100%"
                style={{
                  stopColor:
                    data.color === "#3B82F6"
                      ? "#60A5FA"
                      : data.color === "#06B6D4"
                        ? "#67E8F9"
                        : "#A855F7",
                  stopOpacity: 1,
                }}
              />
            </linearGradient>
          </defs>

          <circle
            className="text-slate-200 dark:text-slate-800"
            cx={data.size / 2}
            cy={data.size / 2}
            fill="none"
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />

          <motion.circle
            animate={{ strokeDashoffset: progress }}
            cx={data.size / 2}
            cy={data.size / 2}
            fill="none"
            initial={{ strokeDashoffset: circumference }}
            r={radius}
            stroke={gradientUrl}
            strokeDasharray={circumference}
            strokeLinecap="round"
            strokeWidth={strokeWidth}
            style={{
              filter: "drop-shadow(0 0 6px rgba(0,0,0,0.15))",
            }}
            transition={{
              duration: 1.8,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default function BlogStatsCard({
  postsCount = 0,
  totalWords = 0,
  targetPosts = 50,
  targetWords = 50000,
  className,
}: {
  postsCount?: number;
  totalWords?: number;
  targetPosts?: number;
  targetWords?: number;
  className?: string;
}) {
  const readTimeMin = Math.round(totalWords / 180);
  const targetReadTime = Math.round(targetWords / 180);

  const activities: ActivityData[] = [
    {
      label: "ARTIKEL",
      value: Math.round((postsCount / targetPosts) * 100),
      color: "#3B82F6", // Blue
      size: 200,
      current: postsCount,
      target: targetPosts,
      unit: "POSTS",
    },
    {
      label: "WÖRTER",
      value: Math.round((totalWords / targetWords) * 100),
      color: "#06B6D4", // Cyan
      size: 160,
      current: totalWords,
      target: targetWords,
      unit: "WÖRTER",
    },
    {
      label: "LESEZEIT",
      value: Math.round((readTimeMin / targetReadTime) * 100),
      color: "#8B5CF6", // Purple
      size: 120,
      current: readTimeMin,
      target: targetReadTime,
      unit: "MIN",
    },
  ];

  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-3xl rounded-3xl p-8 bg-white dark:bg-slate-900 shadow-xl border border-slate-200/60 dark:border-slate-800",
        className
      )}
    >
      <div className="flex flex-col items-center gap-8">
        <motion.h2
          animate={{ opacity: 1, y: 0 }}
          className="font-black text-2xl text-slate-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          📊 Content Activity Rings
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative h-[200px] w-[200px] flex items-center justify-center">
            {activities.map((activity, index) => (
              <CircleProgress data={activity} index={index} key={activity.label} />
            ))}
          </div>

          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {activities.map((activity) => (
              <div className="flex flex-col" key={activity.label}>
                <span className="font-bold text-xs tracking-wider text-slate-500 uppercase">
                  {activity.label}
                </span>
                <span
                  className="font-extrabold text-2xl"
                  style={{ color: activity.color }}
                >
                  {activity.current.toLocaleString("de-DE")} / {activity.target.toLocaleString("de-DE")}
                  <span className="ml-1.5 text-sm font-semibold text-slate-500">
                    {activity.unit}
                  </span>
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
