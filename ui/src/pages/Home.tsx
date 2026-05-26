import React from 'react'
import ParallaxHero from '@/components/ParallaxHero'
import AnimatedSection from '@/components/AnimatedSection'
import { motion } from 'framer-motion'
import { hoverCard } from '@/animations/transitions'

const features = [
  {
    title: 'Smooth Transitions',
    desc: 'Page transitions optimized for perceived performance and delight.',
  },
  {
    title: 'Reusable Animations',
    desc: 'Variants and transitions you can use across your app.',
  },
  {
    title: 'Motion Aware',
    desc: 'Respects reduced-motion preferences out-of-the-box.',
  },
]

export default function Home() {
  return (
    <div className="space-y-12">
      <ParallaxHero />

      <AnimatedSection className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={hoverCard}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-primary-200 dark:border-gray-800 dark:bg-gray-900"
          >
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
          </motion.div>
        ))}
      </AnimatedSection>

      <AnimatedSection className="rounded-2xl bg-gray-50 p-8 dark:bg-gray-800">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold">Get started today</h2>
            <p className="mt-1 text-gray-600 dark:text-gray-300">Install dependencies and run the dev server to explore.</p>
          </div>
          <a
            href="/features"
            className="rounded-full bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700"
          >
            View Features
          </a>
        </div>
      </AnimatedSection>
    </div>
  )
}
