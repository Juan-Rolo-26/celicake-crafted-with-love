import type { Variants } from "framer-motion";

const easeInOut = [0.22, 1, 0.36, 1];

export const staggerContainer = (
  stagger = 0.12,
  delayChildren = 0
): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren,
      when: "beforeChildren",
    },
  },
});

export const fadeUp = (y = 24, duration = 0.9): Variants => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: easeInOut },
  },
});

export const fadeDown = (y = 24, duration = 0.9): Variants => ({
  hidden: { opacity: 0, y: -y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: easeInOut },
  },
});

export const fadeLeft = (x = 24, duration = 0.9): Variants => ({
  hidden: { opacity: 0, x: -x },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration, ease: easeInOut },
  },
});

export const fadeRight = (x = 24, duration = 0.9): Variants => ({
  hidden: { opacity: 0, x },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration, ease: easeInOut },
  },
});

export const scaleIn = (scale = 0.96, duration = 0.8): Variants => ({
  hidden: { opacity: 0, scale },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration, ease: easeInOut },
  },
});
