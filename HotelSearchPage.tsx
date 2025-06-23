import mockHotels from '@/data/mock-hotels';
import MapComponent from '@/components/MapComponent';
import { HotelCard, HotelProps } from '@/components/hotels/hotel-card';

export default function HotelSearchPage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 overflow-y-scroll p-4">
        {mockHotels.map((hotel: HotelProps, index: number) => (
          <HotelCard key={hotel.id} hotel={hotel} index={index} />
        ))}
      </div>
      <div className="w-1/2 sticky top-0 h-screen">
        <MapComponent hotels={mockHotels} />
      </div>
    </div>
  );
} 