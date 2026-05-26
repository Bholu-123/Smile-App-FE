import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import AnimatedNavbar from '@/components/AnimatedNavbar'
import Home from '@/pages/Home'
import Features from '@/pages/Features'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import { pageTransition, pageVariants } from '@/animations/transitions'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              transition={pageTransition}
              className="min-h-screen"
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/features"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              transition={pageTransition}
              className="min-h-screen"
            >
              <Features />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              transition={pageTransition}
              className="min-h-screen"
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              transition={pageTransition}
              className="min-h-screen"
            >
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <AnimatedNavbar />
      <main className="mx-auto max-w-7xl px-6 py-8">
        <AnimatedRoutes />
      </main>
    </div>
  )
}
