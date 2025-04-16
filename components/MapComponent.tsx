'use client';

import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

interface Hotel {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

export default function MapComponent({ hotels }: { hotels: Hotel[] }) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapRef.current!,
      style: 'https://demotiles.maplibre.org/style.json',
      center: [2.1734, 41.3851],
      zoom: 11,
    });

    hotels.forEach(hotel => {
      new maplibregl.Marker()
        .setLngLat([hotel.longitude, hotel.latitude])
        .setPopup(new maplibregl.Popup().setText(hotel.name))
        .addTo(map);
    });

    return () => map.remove();
  }, [hotels]);

  return <div ref={mapRef} className="w-full h-full" />;
} 