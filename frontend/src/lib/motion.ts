import type { Variants } from "framer-motion";

const easeInOut = [0.42, 0, 0.58, 1];
const softSpring = { type: "spring", stiffness: 160, damping: 24, mass: 0.9 };

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

export const fadeUp = (y = 24, duration = 0.6): Variants => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: easeInOut },
  },
});

export const fadeDown = (y = 24, duration = 0.6): Variants => ({
  hidden: { opacity: 0, y: -y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: easeInOut },
  },
});

export const fadeLeft = (x = 24, duration = 0.6): Variants => ({
  hidden: { opacity: 0, x: -x },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration, ease: easeInOut },
  },
});

export const fadeRight = (x = 24, duration = 0.6): Variants => ({
  hidden: { opacity: 0, x },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration, ease: easeInOut },
  },
});

export const scaleIn = (scale = 0.95, duration = 0.5): Variants => ({
  hidden: { opacity: 0, scale },
  show: {
    opacity: 1,
    scale: 1,
    transition: { ...softSpring, duration, ease: easeInOut },
  },
});
