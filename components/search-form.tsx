"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchFormProps {
  onSearch: (query: string) => void
  isLoading: boolean
  showResults: boolean
  initialQuery?: string
}

export function SearchForm({ onSearch, isLoading, showResults, initialQuery = "" }: SearchFormProps) {
  const [query, setQuery] = useState(initialQuery)
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const examplePrompts = [
    "3 nights in NYC next week, Marriott points, near downtown",
    "Chicago weekend trip in June, walkable to restaurants, under $300/night",
    "San Francisco business trip, Hilton Honors, close to convention center",
    "Miami beach vacation, ocean view, luxury hotel with good pool",
  ]

  useEffect(() => {
    // Focus the input field when the component mounts
    inputRef.current?.focus()

    // Rotate example prompts every 5 seconds
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % examplePrompts.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="space-y-4">
        <Input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Where are you going, when, and what matters most?"
          className="h-16 px-6 text-base md:text-lg border-2 border-black/10 focus:border-black focus:ring-0 rounded-full transition-all duration-200"
          disabled={isLoading}
          aria-label="Travel search query"
        />
        <p className="text-xs md:text-sm text-black/60 text-center px-4">Try: "{examplePrompts[placeholderIndex]}"</p>
        {!showResults && (
          <div className="pt-4">
            <Button
              type="submit"
              className="w-full h-12 bg-black hover:bg-black/90 text-white rounded-full transition-all duration-200 transform active:scale-[0.98]"
              disabled={!query.trim() || isLoading}
            >
              {isLoading ? "Finding options..." : "Find Hotels"}
            </Button>
          </div>
        )}
      </div>
    </form>
  )
}
