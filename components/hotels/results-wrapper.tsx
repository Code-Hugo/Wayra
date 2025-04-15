"use client"

import { motion, AnimatePresence } from "framer-motion"
import { HotelCard, type HotelProps } from "@/components/hotels/hotel-card"
import { HotelSkeleton } from "@/components/hotels/hotel-skeleton"

interface ResultsWrapperProps {
  hotels: HotelProps[]
  isLoading: boolean
  showResults: boolean
}

export function ResultsWrapper({ hotels, isLoading, showResults }: ResultsWrapperProps) {
  if (!showResults && !isLoading) return null

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-12 md:mt-16" layout>
      <AnimatePresence>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {isLoading
            ? // Show skeletons while loading
              Array.from({ length: 3 }).map((_, index) => <HotelSkeleton key={`skeleton-${index}`} />)
            : // Show actual hotel results
              hotels.map((hotel, index) => <HotelCard key={hotel.id} hotel={hotel} index={index} />)}
        </div>
      </AnimatePresence>
    </motion.div>
  )
}
