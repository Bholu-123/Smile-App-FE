import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'

export default function Contact() {
  const [sent, setSent] = React.useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setTimeout(() => setSent(true), 600)
  }

  return (
    <div className="space-y-8">
      <AnimatedSection>
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">We\'d love to hear from you.</p>
      </AnimatedSection>

      <AnimatedSection>
        {!sent ? (
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-md space-y-4 rounded-xl border border-gray-200 p-6 dark:border-gray-800"
          >
            <div>
              <label className="block text-sm font-medium">Name</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:border-gray-700 dark:bg-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:border-gray-700 dark:bg-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.005 }}
                rows={4}
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:border-gray-700 dark:bg-gray-900"
              />
            </div>
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-primary-700"
            >
              Send Message
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="mx-auto flex max-w-md flex-col items-center rounded-xl border border-green-200 bg-green-50 p-8 text-green-900 dark:border-green-900/40 dark:bg-green-950 dark:text-green-100"
          >
            <motion.svg
              initial={{ rotate: -90, pathLength: 0 }}
              animate={{ rotate: 0, pathLength: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-12 w-12"
            >
              <motion.path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
            <div className="mt-4 text-lg font-semibold">Message sent!</div>
            <button onClick={() => setSent(false)} className="mt-2 text-sm underline opacity-80 hover:opacity-100">Send another</button>
          </motion.div>
        )}
      </AnimatedSection>
    </div>
  )
}
