"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HotelBadge } from "@/components/hotels/hotel-badge"

export interface HotelProps {
  id: string
  name: string
  price: string
  image: string
  brand: string
  reason: string
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
      <Card className="rounded-none border border-transparent hover:border-black/10 shadow-none overflow-hidden h-full flex flex-col transition-all duration-300">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={hotel.image || "/placeholder.svg"}
            alt={hotel.name}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <CardContent className="px-0 pt-6 pb-4 flex-grow">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium text-lg md:text-xl">{hotel.name}</h3>
            <HotelBadge brand={hotel.brand} />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
            <p className="text-black/60 text-sm">{hotel.reason}</p>
            <p className="font-light whitespace-nowrap">
              {hotel.price}
              <span className="text-xs text-black/60">/night</span>
            </p>
          </div>
        </CardContent>
        <CardFooter className="px-0 pt-0 mt-auto">
          <Button
            variant="outline"
            className="w-full h-11 rounded-full border-black/20 hover:border-black hover:bg-white text-black transition-all duration-200 transform active:scale-[0.98]"
          >
            Book this hotel
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
