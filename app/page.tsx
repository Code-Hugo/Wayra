"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { LayoutShell } from "@/components/layout/layout-shell"
import { SearchForm } from "@/components/search/search-form"
import { ResultsWrapper } from "@/components/hotels/results-wrapper"
import type { HotelProps } from "@/components/hotels/hotel-card"

export default function Wayra() {
  const [query, setQuery] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hotels, setHotels] = useState<HotelProps[]>([])

  const handleSearch = async (searchQuery: string) => {
    // Don't re-search if the query is the same
    if (searchQuery === query && showResults) return

    setQuery(searchQuery)
    setIsLoading(true)

    // Log search for analytics
    console.log("Processing search:", searchQuery)

    // Simulate API call to get hotel recommendations
    setTimeout(() => {
      const results = getHotelRecommendations(searchQuery)
      console.log("Found matches:", results.length)

      setIsLoading(false)
      setShowResults(true)
      setHotels(results)
    }, 1800)
  }

  const getHotelRecommendations = (input: string): HotelProps[] => {
    // Simple logic to return different hotels based on the input
    if (input.toLowerCase().includes("chicago")) {
      return [
        {
          id: "1",
          name: "The Langham, Chicago",
          price: "$399",
          image: "/placeholder.svg?height=300&width=500",
          brand: "Langham",
          reason: "Luxury riverfront location with spacious rooms. Great for business travelers.",
        },
        {
          id: "2",
          name: "Chicago Athletic Association",
          price: "$329",
          image: "/placeholder.svg?height=300&width=500",
          brand: "Hyatt",
          reason: "Historic property across from Millennium Park with unique architecture.",
        },
        {
          id: "3",
          name: "The Peninsula Chicago",
          price: "$459",
          image: "/placeholder.svg?height=300&width=500",
          brand: "Peninsula",
          reason: "Five-star luxury on the Magnificent Mile with exceptional service.",
        },
      ]
    } else if (input.toLowerCase().includes("new york") || input.toLowerCase().includes("nyc")) {
      return [
        {
          id: "4",
          name: "The Beekman",
          price: "$389",
          image: "/placeholder.svg?height=300&width=500",
          brand: "Thompson",
          reason: "Historic downtown property with unique architecture and excellent dining.",
        },
        {
          id: "5",
          name: "1 Hotel Central Park",
          price: "$429",
          image: "/placeholder.svg?height=300&width=500",
          brand: "1 Hotels",
          reason: "Eco-friendly hotel near Central Park with natural design elements.",
        },
        {
          id: "6",
          name: "The Ritz-Carlton New York",
          price: "$549",
          image: "/placeholder.svg?height=300&width=500",
          brand: "Marriott",
          reason: "Luxury hotel in Midtown with exceptional service and amenities.",
        },
      ]
    } else {
      return [
        {
          id: "7",
          name: "The Ritz-Carlton",
          price: "$429",
          image: "/placeholder.svg?height=300&width=500",
          brand: "Marriott",
          reason: "Exceptional service with premium amenities and central location.",
        },
        {
          id: "8",
          name: "Waldorf Astoria",
          price: "$389",
          image: "/placeholder.svg?height=300&width=500",
          brand: "Hilton",
          reason: "Elegant luxury hotel with spacious rooms and excellent dining options.",
        },
        {
          id: "9",
          name: "Park Hyatt",
          price: "$359",
          image: "/placeholder.svg?height=300&width=500",
          brand: "Hyatt",
          reason: "Refined luxury with contemporary design and attentive service.",
        },
      ]
    }
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
