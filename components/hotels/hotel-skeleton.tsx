"use client"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function HotelSkeleton() {
  return (
    <Card className="rounded-none border-none shadow-none overflow-hidden">
      <div className="relative aspect-[4/3] bg-black/5 animate-pulse"></div>
      <CardContent className="px-0 pt-6 pb-4">
        <div className="flex justify-between items-start mb-4">
          <div className="h-6 bg-black/5 rounded-full w-2/3 animate-pulse"></div>
          <div className="h-5 bg-black/5 rounded-full w-1/5 animate-pulse"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-black/5 rounded-full w-full animate-pulse"></div>
          <div className="h-4 bg-black/5 rounded-full w-4/5 animate-pulse"></div>
        </div>
      </CardContent>
      <CardFooter className="px-0 pt-4">
        <div className="h-10 bg-black/5 rounded-full w-full animate-pulse"></div>
      </CardFooter>
    </Card>
  )
}
