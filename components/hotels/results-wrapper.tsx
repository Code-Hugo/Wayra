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
  const [filter, setFilter] = useState("")

  if (!showResults && !isLoading) return null

  const normalized = filter.trim().toLowerCase()
  const filteredHotels = hotels.filter((h) =>
    h.city.toLowerCase().includes(normalized)
  )

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-12 md:mt-16" layout>
      <div className="mb-6 max-w-sm">
        <Input
          placeholder="Filter by city"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <AnimatePresence>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <HotelSkeleton key={`skeleton-${index}`} />
              ))
            : filteredHotels.map((hotel, index) => (
                <HotelCard key={hotel.id} hotel={hotel} index={index} />
              ))}
        </div>
      </AnimatePresence>
    </motion.div>
  )
}
