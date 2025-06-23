"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export interface HotelProps {
  id: string
  name: string
  city: string
  location: string
  rating: number
  price: number
  description: string
  image: string
}

interface HotelCardProps {
  hotel: HotelProps
  index: number
}

export function HotelCard({ hotel, index }: HotelCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Card className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={hotel.image || "/placeholder.svg"}
            alt={hotel.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 2}
          />
        </div>
        <CardContent className="p-4 flex-grow space-y-2">
          <h3 className="font-medium text-lg md:text-xl">{hotel.name}</h3>
          <p className="text-sm text-black/60">{hotel.location}, {hotel.city}</p>
          <p className="text-sm text-black/80">{hotel.description}</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0 mt-auto flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{hotel.rating}</span>
          </div>
          <p className="font-semibold">€{hotel.price}</p>
          <Button size="sm" className="ml-auto rounded-full">Book</Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
