import { Variants, Transition } from 'framer-motion'

export const spring: Transition = {
  type: 'spring',
  stiffness: 260,
  damping: 20,
  mass: 0.9,
}

export const pageTransition: Transition = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1],
}

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 10, filter: 'blur(4px)' },
  enter: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -6, filter: 'blur(4px)' },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

export const hoverCard: Variants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -2 },
  tap: { scale: 0.98, y: 0 },
}
