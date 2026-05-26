import React from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import { motion } from 'framer-motion'

const entries = [
  { date: '2023', title: 'The Idea', text: 'We set out to craft a delightful motion-first UI starter.' },
  { date: '2024', title: 'The Build', text: 'We brought together React, TailwindCSS and Framer Motion.' },
  { date: '2025', title: 'The Now', text: 'You can use it today to inspire and accelerate your UI work.' },
]

export default function About() {
  return (
    <div className="space-y-8">
      <AnimatedSection>
        <h1 className="text-3xl font-bold">About</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">A brief timeline of how this motion starter came to be.</p>
      </AnimatedSection>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
        <ul className="space-y-6">
          {entries.map((e, i) => (
            <AnimatedSection key={e.date} className="relative pl-10">
              <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-primary-600" />
              <div className="text-sm text-gray-500">{e.date}</div>
              <div className="text-lg font-semibold">{e.title}</div>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4 }}
                className="mt-1 text-gray-600 dark:text-gray-300"
              >
                {e.text}
              </motion.p>
            </AnimatedSection>
          ))}
        </ul>
      </div>
    </div>
  )
}
