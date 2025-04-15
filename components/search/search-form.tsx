"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RotatingPlaceholder } from "@/components/search/rotating-placeholder"
import { TermsCheckbox } from "@/components/search/terms-checkbox"
import { useDebounce } from "@/hooks/use-debounce"

interface SearchFormProps {
  onSearch: (query: string) => void
  isLoading: boolean
  showResults: boolean
  initialQuery?: string
}

export function SearchForm({ onSearch, isLoading, showResults, initialQuery = "" }: SearchFormProps) {
  const [query, setQuery] = useState(initialQuery)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const debouncedSearch = useDebounce(onSearch, 2000)

  // Validate form and enable/disable submit
  useEffect(() => {
    setIsSubmitEnabled(query.trim().length > 0 && termsAccepted)
  }, [query, termsAccepted])

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Log search query (for future analytics)
  useEffect(() => {
    if (query.trim()) {
      console.log("Search query:", query)
    }
  }, [query])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isSubmitEnabled || isLoading) return

    // Call the debounced search function
    debouncedSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="space-y-4">
        <div className="relative">
          <Input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Where are you going, when, and what matters most?"
            className="h-16 px-6 text-base md:text-lg border-2 border-black/10 focus:border-black focus:ring-0 rounded-full transition-all duration-200"
            disabled={isLoading}
            aria-label="Travel search query"
          />
          {isLoading && (
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-black/40 animate-pulse"></div>
                <div
                  className="w-2 h-2 rounded-full bg-black/40 animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-black/40 animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          )}
        </div>

        <RotatingPlaceholder />

        {!showResults && (
          <motion.div
            className="space-y-4 pt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <TermsCheckbox checked={termsAccepted} onCheckedChange={setTermsAccepted} />

            <Button
              type="submit"
              className="w-auto mx-auto px-10 h-10 bg-black hover:bg-black/90 text-white rounded-full transition-all duration-200 transform active:scale-[0.98]"
              disabled={!isSubmitEnabled || isLoading}
            >
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center"
                  >
                    <svg
                      className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Finding perfect matches...
                  </motion.div>
                ) : (
                  <motion.span key="find" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    Find Hotels
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        )}
      </div>
    </form>
  )
}
