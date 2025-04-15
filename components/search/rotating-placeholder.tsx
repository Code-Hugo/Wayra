"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function RotatingPlaceholder() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0)

  const examplePrompts = [
    "3 nights in NYC next week, Marriott points, near downtown",
    "Chicago weekend trip in June, walkable to restaurants, under $300/night",
    "San Francisco business trip, Hilton Honors, close to convention center",
    "Miami beach vacation, ocean view, luxury hotel with good pool",
  ]

  useEffect(() => {
    // Rotate example prompts every 5 seconds
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % examplePrompts.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-6 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={placeholderIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="text-xs md:text-sm text-black/60 text-center px-4"
        >
          Try: "{examplePrompts[placeholderIndex]}"
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
