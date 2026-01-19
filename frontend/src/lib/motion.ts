import type { Variants } from "framer-motion";

export const staggerContainer = (
  stagger = 0.12,
  delayChildren = 0
): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const fadeUp = (y = 24, duration = 0.6): Variants => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: "easeOut" },
  },
});

export const fadeDown = (y = 24, duration = 0.6): Variants => ({
  hidden: { opacity: 0, y: -y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: "easeOut" },
  },
});

export const fadeLeft = (x = 24, duration = 0.6): Variants => ({
  hidden: { opacity: 0, x: -x },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration, ease: "easeOut" },
  },
});

export const fadeRight = (x = 24, duration = 0.6): Variants => ({
  hidden: { opacity: 0, x },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration, ease: "easeOut" },
  },
});

export const scaleIn = (scale = 0.95, duration = 0.5): Variants => ({
  hidden: { opacity: 0, scale },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration, ease: "easeOut" },
  },
});
