"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-black/5 py-4 md:py-6">
      <div className="container mx-auto px-4 max-w-6xl flex justify-between items-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="text-xl md:text-2xl font-light tracking-tight hover:opacity-80 transition-opacity">
            wayra
          </Link>
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs text-black/40"
        >
          AI-powered travel assistant
        </motion.span>
      </div>
    </header>
  )
}
