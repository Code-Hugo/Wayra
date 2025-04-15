"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { CalendarIcon, MapPin, Search, Star, Sparkles, Wind } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Wayra() {
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  })
  const [showResults, setShowResults] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setShowResults(true)
    }, 1800)
  }

  const handleDateRangeSelect = (range: { from: Date | undefined; to?: Date | undefined } | undefined) => {
    if (range) {
      setDateRange({ from: range.from, to: range.to });
    }
  }

  const hotels = [
    {
      name: "The Ritz-Carlton",
      price: "$429",
      image: "/placeholder.svg?height=240&width=400",
      brand: "Marriott",
      reason: "Best for Marriott Bonvoy. Exceptional service with harbor views.",
    },
    {
      name: "Waldorf Astoria",
      price: "$389",
      image: "/placeholder.svg?height=240&width=400",
      brand: "Hilton",
      reason: "Perfect for Hilton Honors. Walking distance to downtown attractions.",
    },
    {
      name: "Park Hyatt",
      price: "$359",
      image: "/placeholder.svg?height=240&width=400",
      brand: "Hyatt",
      reason: "Ideal for World of Hyatt members. Renowned for its spa facilities.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-zinc-200 p-4 sm:p-6 md:p-8">
      <div className="container mx-auto max-w-7xl">
        <header className="flex items-center justify-between mb-12 pt-4">
          <div className="flex items-center">
            <Wind className="w-6 h-6 mr-2 text-indigo-400" />
            <h1 className="text-2xl font-light tracking-wide text-white">
              wayra<span className="text-indigo-400">.</span>
            </h1>
          </div>
          <div className="text-sm text-zinc-500">AI-powered travel</div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Inputs */}
          <div className="space-y-8 p-8 bg-[#121218] rounded-2xl border border-zinc-800/80 shadow-xl">
            <div className="space-y-2">
              <h2 className="text-3xl font-light tracking-tight text-white">Plan Your Stay</h2>
              <p className="text-zinc-400 text-lg">Get personalized hotel recommendations powered by AI.</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="destination" className="text-zinc-400 text-sm">
                  Where are you going?
                </Label>
                <div className="relative">
                  <Input
                    id="destination"
                    placeholder="Enter city or destination"
                    className="bg-[#18181F] border-zinc-800 focus:border-indigo-500/50 focus:ring-indigo-500/10 pl-10 h-14 text-lg rounded-xl transition-all duration-200"
                  />
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-zinc-400 text-sm">When are you traveling?</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal h-14 bg-[#18181F] border-zinc-800 hover:bg-[#1E1E26] hover:border-zinc-700 rounded-xl pl-10 relative text-lg",
                        !dateRange.from && "text-zinc-500",
                      )}
                    >
                      <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500" />
                      {dateRange.from ? (
                        dateRange.to ? (
                          <>
                            {dateRange.from.toLocaleDateString()} - {dateRange.to.toLocaleDateString()}
                          </>
                        ) : (
                          dateRange.from.toLocaleDateString()
                        )
                      ) : (
                        <span>Select dates</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 bg-[#18181F] border-zinc-800 rounded-xl shadow-2xl"
                    align="start"
                  >
                    <Calendar
                      mode="range"
                      selected={dateRange}
                      onSelect={handleDateRangeSelect}
                      initialFocus
                      numberOfMonths={2}
                      className="bg-[#18181F] text-zinc-200 rounded-xl p-4"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="loyalty" className="text-zinc-400 text-sm">
                  Preferred loyalty program
                </Label>
                <Select>
                  <SelectTrigger
                    id="loyalty"
                    className="bg-[#18181F] border-zinc-800 focus:border-indigo-500/50 focus:ring-indigo-500/10 h-14 text-lg rounded-xl pl-10 relative"
                  >
                    <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    <SelectValue placeholder="Select program (optional)" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#18181F] border-zinc-800 rounded-xl">
                    <SelectItem value="hilton">Hilton Honors</SelectItem>
                    <SelectItem value="marriott">Marriott Bonvoy</SelectItem>
                    <SelectItem value="hyatt">World of Hyatt</SelectItem>
                    <SelectItem value="ihg">IHG One Rewards</SelectItem>
                    <SelectItem value="none">No Preference</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferences" className="text-zinc-400 text-sm">
                  What matters most to you?
                </Label>
                <Textarea
                  id="preferences"
                  placeholder="e.g. loyalty points, walkability, price, view"
                  className="resize-none bg-[#18181F] border-zinc-800 focus:border-indigo-500/50 focus:ring-indigo-500/10 min-h-[100px] rounded-xl text-lg"
                />
              </div>

              <Button
                size="lg"
                className="w-full mt-6 h-14 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 border-0 shadow-lg shadow-indigo-900/30 rounded-xl text-lg font-normal transition-all duration-300"
                onClick={handleSearch}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                    Finding perfect matches
                  </div>
                ) : (
                  "Find Hotels"
                )}
              </Button>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-8 p-8 bg-[#121218] rounded-2xl border border-zinc-800/80 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-light text-white flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-indigo-400" />
                AI-Recommended Hotels
              </h2>
              {showResults && (
                <Badge variant="outline" className="bg-indigo-500/10 text-indigo-300 border-indigo-500/30 px-3 py-1">
                  3 perfect matches
                </Badge>
              )}
            </div>

            {isLoading ? (
              <div className="space-y-6">
                {[0, 1, 2].map((index) => (
                  <div key={index} className="rounded-xl overflow-hidden bg-[#18181F] border border-zinc-800">
                    <div className="h-56 bg-[#1E1E26] animate-pulse"></div>
                    <div className="p-5 space-y-4">
                      <div className="flex justify-between">
                        <div className="h-7 bg-[#1E1E26] rounded animate-pulse w-1/3"></div>
                        <div className="h-7 bg-[#1E1E26] rounded animate-pulse w-1/5"></div>
                      </div>
                      <div className="h-4 bg-[#1E1E26] rounded animate-pulse w-full"></div>
                      <div className="h-4 bg-[#1E1E26] rounded animate-pulse w-4/5"></div>
                      <div className="h-10 bg-[#1E1E26] rounded-lg animate-pulse w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : !showResults ? (
              <div className="flex flex-col items-center justify-center h-[500px] text-center text-zinc-500">
                <Search className="w-12 h-12 mb-4 text-zinc-700" />
                <p className="text-lg">Enter your travel details to get personalized recommendations</p>
              </div>
            ) : (
              <div className="space-y-6">
                <AnimatePresence>
                  {hotels.map((hotel, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="group"
                    >
                      <Card className="overflow-hidden bg-[#18181F] border-zinc-800 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-900/10 hover:border-zinc-700 rounded-xl">
                        <div className="relative h-56">
                          <Image
                            src={hotel.image || "/placeholder.svg"}
                            alt={hotel.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] to-transparent opacity-60"></div>
                          <Badge className="absolute top-4 right-4 bg-black/40 text-white border-0 backdrop-blur-md px-3 py-1">
                            {hotel.brand}
                          </Badge>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="font-medium text-xl text-white">{hotel.name}</h3>
                            <div className="text-right">
                              <p className="font-light text-indigo-300 text-xl">
                                {hotel.price}
                                <span className="text-sm text-zinc-500">/night</span>
                              </p>
                            </div>
                          </div>
                          <p className="text-zinc-400 text-base leading-relaxed">{hotel.reason}</p>
                        </CardContent>
                        <CardFooter className="p-6 pt-0">
                          <Button
                            variant="outline"
                            className="w-full border-zinc-800 bg-[#1A1A22] hover:bg-indigo-500/10 hover:text-indigo-300 hover:border-indigo-500/30 transition-all duration-300 rounded-lg h-12 text-base"
                          >
                            Select
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
