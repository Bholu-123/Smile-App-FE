import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { staggerContainer, fadeInUp } from '@/animations/transitions'

export default function ParallaxHero() {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -80])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])

  return (
    <motion.div ref={ref} style={{ y, opacity }} className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 to-indigo-500 px-8 py-20 text-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-3xl text-center"
      >
        <motion.h1 variants={fadeInUp} className="text-4xl font-bold tracking-tight md:text-6xl">
          Bring your product to life with motion
        </motion.h1>
        <motion.p variants={fadeInUp} className="mt-4 text-lg text-indigo-100">
          A modern, animated UI starter with React, Tailwind CSS, and Framer Motion.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <Link
            to="/features"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary-700 shadow-sm transition hover:shadow-md"
          >
            Explore Features
          </Link>
          <Link
            to="/contact"
            className="rounded-full bg-primary-700/30 px-5 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/40 backdrop-blur transition hover:bg-primary-700/40"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>

      <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
    </motion.div>
  )
}
