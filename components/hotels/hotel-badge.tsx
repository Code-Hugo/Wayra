import { Badge } from "@/components/ui/badge"

interface HotelBadgeProps {
  brand: string
}

export function HotelBadge({ brand }: HotelBadgeProps) {
  return (
    <Badge variant="outline" className="rounded-none font-normal text-xs px-2 py-0.5 bg-white">
      {brand}
    </Badge>
  )
}
