import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import { staggerContainer, fadeInUp } from '@/animations/transitions'

const tabs = [
  { id: 'transitions', label: 'Transitions', content: 'Curated page and element transitions using spring and cubic-bezier easings.' },
  { id: 'variants', label: 'Variants', content: 'Reusable variants for consistent motion across your UI.' },
  { id: 'a11y', label: 'A11y', content: 'Built with reduced-motion users in mind.' },
]

export default function Features() {
  const [active, setActive] = React.useState('transitions')

  return (
    <div className="space-y-10">
      <AnimatedSection>
        <h1 className="text-3xl font-bold">Features</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Explore the motion building blocks included in this starter.</p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex gap-2 rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition ${active === t.id ? 'bg-white shadow dark:bg-gray-900' : 'opacity-70 hover:opacity-100'}`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="relative mt-4 min-h-[80px]">
          <AnimatePresence mode="wait">
            {tabs.map(t => (
              t.id === active && (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-md border border-gray-200 bg-white p-4 text-sm dark:border-gray-800 dark:bg-gray-900"
                >
                  {t.content}
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {[1,2,3,4].map(i => (
            <motion.li key={i} variants={fadeInUp} className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <div className="font-medium">Staggered item {i}</div>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Each item animates in sequence for a polished entrance.</p>
            </motion.li>
          ))}
        </motion.ul>
      </AnimatedSection>
    </div>
  )
}
