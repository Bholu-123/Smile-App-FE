import React from 'react'
import { motion, useInView } from 'framer-motion'

interface Props extends React.HTMLAttributes<HTMLElement> {
  delay?: number
}

export default function AnimatedSection({ children, className = '', delay = 0, ...rest }: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  )
}
