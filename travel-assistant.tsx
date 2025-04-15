"use client"

import { useState } from "react"
import Image from "next/image"
import { CalendarIcon, MapPin, Users, Star, Search, Hotel, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export default function TravelAssistant() {
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
    }, 1500)
  }

  const hotels = [
    {
      name: "Grand Hyatt Downtown",
      price: "$249",
      image: "/placeholder.svg?height=200&width=350",
      brand: "Hyatt",
      reason: "Great for World of Hyatt points. Walking distance to convention center.",
    },
    {
      name: "Marriott Waterfront",
      price: "$279",
      image: "/placeholder.svg?height=200&width=350",
      brand: "Marriott",
      reason: "Excellent Bonvoy earning potential. Beautiful harbor views.",
    },
    {
      name: "Hilton Garden Inn",
      price: "$189",
      image: "/placeholder.svg?height=200&width=350",
      brand: "Hilton",
      reason: "Best value for Hilton Honors members. Close to public transit.",
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 p-4 sm:p-6 md:p-8">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-center mb-8">
          <Sparkles className="w-5 h-5 mr-2 text-emerald-400" />
          <h1 className="text-2xl font-medium tracking-tight">AI Travel Assistant</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Inputs */}
          <div className="space-y-6 p-6 bg-zinc-800/50 backdrop-blur-sm rounded-xl border border-zinc-700/50 shadow-xl">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Plan Your Stay</h2>
              <p className="text-zinc-400">Get personalized hotel recommendations in North America powered by AI.</p>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="destination" className="text-zinc-300 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  Destination
                </Label>
                <div className="relative">
                  <Input
                    id="destination"
                    placeholder="Enter city, region, or landmark"
                    className="bg-zinc-800 border-zinc-700 focus:border-emerald-500 focus:ring-emerald-500/20 pl-10 h-12"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-500" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-zinc-300 flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-emerald-400" />
                  Stay Dates
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal h-12 bg-zinc-800 border-zinc-700 hover:bg-zinc-700/50 hover:border-zinc-600",
                        !dateRange.from && "text-zinc-500",
                      )}
                    >
                      {dateRange.from ? (
                        dateRange.to ? (
                          <>
                            {dateRange.from.toLocaleDateString()} - {dateRange.to.toLocaleDateString()}
                          </>
                        ) : (
                          dateRange.from.toLocaleDateString()
                        )
                      ) : (
                        <span>Select date range</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-zinc-800 border-zinc-700">
                    <Calendar
                      mode="range"
                      selected={dateRange}
                      onSelect={setDateRange}
                      initialFocus
                      numberOfMonths={2}
                      className="bg-zinc-800 text-zinc-100"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="trip-type" className="text-zinc-300 flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-400" />
                  Trip Type
                </Label>
                <Select>
                  <SelectTrigger
                    id="trip-type"
                    className="bg-zinc-800 border-zinc-700 focus:border-emerald-500 focus:ring-emerald-500/20 h-12"
                  >
                    <SelectValue placeholder="Select trip type" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700">
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="leisure">Leisure</SelectItem>
                    <SelectItem value="family">Family</SelectItem>
                    <SelectItem value="event">Event</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="loyalty" className="text-zinc-300 flex items-center gap-2">
                  <Star className="w-4 h-4 text-emerald-400" />
                  Loyalty Program Preference
                </Label>
                <Select>
                  <SelectTrigger
                    id="loyalty"
                    className="bg-zinc-800 border-zinc-700 focus:border-emerald-500 focus:ring-emerald-500/20 h-12"
                  >
                    <SelectValue placeholder="Select loyalty program (optional)" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700">
                    <SelectItem value="hilton">Hilton Honors</SelectItem>
                    <SelectItem value="marriott">Marriott Bonvoy</SelectItem>
                    <SelectItem value="hyatt">World of Hyatt</SelectItem>
                    <SelectItem value="ihg">IHG One Rewards</SelectItem>
                    <SelectItem value="none">No Preference</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferences" className="text-zinc-300 flex items-center gap-2">
                  <Hotel className="w-4 h-4 text-emerald-400" />
                  What Matters Most
                </Label>
                <Textarea
                  id="preferences"
                  placeholder="e.g. loyalty points, walkability, price, view"
                  className="resize-none bg-zinc-800 border-zinc-700 focus:border-emerald-500 focus:ring-emerald-500/20 min-h-[80px]"
                />
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <Switch id="eco-friendly" />
                <Label htmlFor="eco-friendly" className="text-zinc-300">
                  Show eco-friendly options only
                </Label>
              </div>

              <Button
                size="lg"
                className="w-full mt-4 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 border-0 shadow-lg shadow-emerald-900/20"
                onClick={handleSearch}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
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
          <div className="space-y-6 p-6 bg-zinc-800/50 backdrop-blur-sm rounded-xl border border-zinc-700/50 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-emerald-400" />
                AI-Recommended Hotels
              </h2>
              {showResults && (
                <Badge variant="outline" className="bg-zinc-700/50 text-emerald-400 border-emerald-800">
                  3 matches found
                </Badge>
              )}
            </div>

            {isLoading ? (
              <div className="space-y-4">
                {[0, 1, 2].map((index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <div className="h-48 bg-zinc-700/50 animate-pulse"></div>
                    <div className="p-4 space-y-3">
                      <div className="h-6 bg-zinc-700/50 rounded animate-pulse w-2/3"></div>
                      <div className="h-4 bg-zinc-700/50 rounded animate-pulse w-1/4"></div>
                      <div className="h-4 bg-zinc-700/50 rounded animate-pulse w-full"></div>
                      <div className="h-10 bg-zinc-700/50 rounded animate-pulse w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : !showResults ? (
              <div className="flex flex-col items-center justify-center h-[500px] text-center text-zinc-400">
                <Hotel className="w-12 h-12 mb-4 text-zinc-600" />
                <p>Enter your travel details to get personalized recommendations</p>
              </div>
            ) : (
              <div className="space-y-6">
                <AnimatePresence>
                  {hotels.map((hotel, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.15 }}
                      className="group"
                    >
                      <Card className="overflow-hidden bg-zinc-800/80 border-zinc-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/10 hover:border-zinc-600/80 hover:-translate-y-1">
                        <div className="relative h-48">
                          <Image
                            src={hotel.image || "/placeholder.svg"}
                            alt={hotel.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <Badge className="absolute top-3 right-3 bg-black/70 text-white border-0 backdrop-blur-sm">
                            {hotel.brand}
                          </Badge>
                        </div>
                        <CardContent className="p-5">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="font-semibold text-lg text-white">{hotel.name}</h3>
                            <div className="text-right">
                              <p className="font-medium text-emerald-400 text-lg">
                                {hotel.price}
                                <span className="text-sm text-zinc-400">/night</span>
                              </p>
                            </div>
                          </div>
                          <p className="text-zinc-300 text-sm leading-relaxed">{hotel.reason}</p>
                        </CardContent>
                        <CardFooter className="p-5 pt-0">
                          <Button
                            variant="outline"
                            className="w-full border-zinc-700 hover:bg-zinc-700/50 hover:text-emerald-400 transition-all duration-300 group-hover:border-emerald-600/50"
                          >
                            View Details
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
