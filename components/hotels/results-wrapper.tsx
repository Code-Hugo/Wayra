"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HotelCard, type HotelProps } from "@/components/hotels/hotel-card"
import { HotelSkeleton } from "@/components/hotels/hotel-skeleton"
import { Input } from "@/components/ui/input"

interface ResultsWrapperProps {
  hotels: HotelProps[]
  isLoading: boolean
  showResults: boolean
}

export function ResultsWrapper({ hotels, isLoading, showResults }: ResultsWrapperProps) {
  const [query, setQuery] = useState("")

  if (!showResults && !isLoading) return null

  const normalized = query.trim().toLowerCase()
  const filtered = hotels.filter((h) =>
    h.city.toLowerCase().includes(normalized)
  )

  console.log("Query:", query)
  console.log("Filtered results:", filtered)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-12 md:mt-16" layout>
      <div className="mb-6 max-w-sm">
        <Input
          placeholder="Filter by city"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <AnimatePresence>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <HotelSkeleton key={`skeleton-${index}`} />
              ))
            : filtered.length > 0 ? (
                filtered.map((hotel, index) => (
                  <HotelCard key={hotel.id} hotel={hotel} index={index} />
                ))
              ) : (
                <p className="col-span-full text-center text-sm text-black/60">
                  No hotels found for your search.
                </p>
              )}
        </div>
      </AnimatePresence>
    </motion.div>
  )
}
