"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function RotatingPlaceholder() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0)

  const examplePrompts = [
    "3 nights in Barcelona under $200 near Eixample",
    "Madrid weekend under $200 near Gran Vía",
    "Family stay in Valencia under $150 close to Ciutat Vella",
    "Beach vacation in Barcelona under $220 near Barceloneta",
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
