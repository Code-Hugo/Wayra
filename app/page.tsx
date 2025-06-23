"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { LayoutShell } from "@/components/layout/layout-shell"
import { SearchForm } from "@/components/search/search-form"
import { ResultsWrapper } from "@/components/hotels/results-wrapper"
import type { HotelProps } from "@/components/hotels/hotel-card"
import mockHotels from "@/data/mock-hotels"

export default function Wayra() {
  const [query, setQuery] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hotels, setHotels] = useState<HotelProps[]>([])

  const handleSearch = async (searchQuery: string) => {
    const trimmed = searchQuery.trim()
    if (trimmed === query && showResults) return

    setQuery(trimmed)
    setIsLoading(true)

    setTimeout(() => {
      const results = mockHotels.filter((h) =>
        h.city.toLowerCase().includes(trimmed.toLowerCase())
      )
      setHotels(results)
      setIsLoading(false)
      setShowResults(true)
    }, 800)
  }

  return (
    <LayoutShell>
      <motion.div className={`transition-all duration-500 ${showResults ? "" : "mt-[10vh] md:mt-[15vh]"}`} layout>
        <SearchForm onSearch={handleSearch} isLoading={isLoading} showResults={showResults} initialQuery={query} />

        <ResultsWrapper hotels={hotels} isLoading={isLoading} showResults={showResults} />
      </motion.div>
    </LayoutShell>
  )
}
