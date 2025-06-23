export interface MockHotel {
  id: string;
  name: string;
  city: string;
  location: string;
  rating: number;
  price: number;
  description: string;
  image: string;
}

export const mockHotels: MockHotel[] = [
  {
    id: 'bcn1',
    name: 'Barcelona Center Hotel',
    city: 'Barcelona',
    location: 'Eixample',
    rating: 4.6,
    price: 180,
    description: 'Modern rooms in the heart of Barcelona with easy access to public transport.',
    image: 'https://source.unsplash.com/featured/?hotel,barcelona',
  },
  {
    id: 'bcn2',
    name: 'Sea View Barcelona',
    city: 'Barcelona',
    location: 'Barceloneta Beach',
    rating: 4.4,
    price: 210,
    description: 'Beachfront property with stunning Mediterranean views and great nightlife nearby.',
    image: 'https://source.unsplash.com/featured/?hotel,barcelona',
  },
  {
    id: 'mad1',
    name: 'Madrid Central Hotel',
    city: 'Madrid',
    location: 'Gran Vía',
    rating: 4.5,
    price: 160,
    description: 'Elegant hotel steps from shops and theaters in bustling Gran Vía.',
    image: 'https://source.unsplash.com/featured/?hotel,madrid',
  },
  {
    id: 'mad2',
    name: 'Royal Madrid Palace',
    city: 'Madrid',
    location: 'Centro',
    rating: 4.7,
    price: 220,
    description: 'Luxury accommodations with classic decor near the Royal Palace.',
    image: 'https://source.unsplash.com/featured/?hotel,madrid',
  },
  {
    id: 'val1',
    name: 'Valencia Sunset Resort',
    city: 'Valencia',
    location: 'City of Arts and Sciences',
    rating: 4.8,
    price: 200,
    description: 'Resort-style stay with pool and spa next to Valencia\'s famous attractions.',
    image: 'https://source.unsplash.com/featured/?hotel,valencia',
  },
  {
    id: 'val2',
    name: 'Old Town Valencia Inn',
    city: 'Valencia',
    location: 'Ciutat Vella',
    rating: 4.3,
    price: 130,
    description: 'Charming boutique hotel tucked away in Valencia\'s historic center.',
    image: 'https://source.unsplash.com/featured/?hotel,valencia',
  },
];

export default mockHotels;
