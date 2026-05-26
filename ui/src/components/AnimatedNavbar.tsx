import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function AnimatedNavbar() {
  const [active, setActive] = React.useState<string | null>(null)

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200/60 dark:border-gray-800"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-4">
          <NavLink to="/" className="font-semibold text-lg tracking-tight">
            <span className="text-primary-600">Animated</span>UI
          </NavLink>
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.to} className="relative">
                <NavLink
                  to={item.to}
                  onMouseEnter={() => setActive(item.to)}
                  onMouseLeave={() => setActive(null)}
                  className={({ isActive }) =>
                    `px-1 py-1 text-sm font-medium transition-colors duration-200 ${
                      isActive ? 'text-primary-600' : 'text-gray-700 dark:text-gray-200'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative">
                      {item.label}
                      <AnimatePresence>
                        {(isActive || active === item.to) && (
                          <motion.span
                            layoutId="underline"
                            className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary-600"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            exit={{ opacity: 0, scaleX: 0 }}
                            transition={{ duration: 0.25 }}
                          />
                        )}
                      </AnimatePresence>
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}
