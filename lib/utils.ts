import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// List of cities that Wayra currently recognizes
export const knownCities = [
  "Barcelona",
  "Madrid",
  "London",
  "Valencia",
]

/**
 * Detects the first known city found in the provided query string.
 * Matching is case-insensitive.
 */
export function detectCity(query: string): string | undefined {
  return knownCities.find((city) =>
    query.toLowerCase().includes(city.toLowerCase())
  )
}

/**
 * Parses a search query to extract a known city and optional maximum price.
 */
export function parseSearchQuery(query: string): {
  city?: string
  maxPrice?: number
} {
  const city = detectCity(query)
  const match = query.match(/under\s*\$?(\d+)/i)
  const maxPrice = match ? parseInt(match[1], 10) : undefined

  return { city, maxPrice }
}
