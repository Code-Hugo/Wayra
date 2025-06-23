import { describe, it, expect } from 'vitest'
import { cn, detectCity, parseSearchQuery } from '../lib/utils'

describe('cn utility', () => {
  it('merges class names and ignores falsy values', () => {
    const result = cn('p-2', false && 'hidden', 'text-center')
    expect(result).toBe('p-2 text-center')
  })

  it('deduplicates tailwind classes', () => {
    const result = cn('p-2', 'p-2', 'text-sm')
    expect(result).toBe('p-2 text-sm')
  })
})

describe('detectCity utility', () => {
  it('finds a city in a query string', () => {
    const city = detectCity('Looking for hotels in Barcelona for tonight')
    expect(city).toBe('Barcelona')
  })

  it('is case insensitive', () => {
    const city = detectCity('madrid weekend trip')
    expect(city).toBe('Madrid')
  })

  it('returns undefined when no city is found', () => {
    const city = detectCity('some random place')
    expect(city).toBeUndefined()
  })
})

describe('parseSearchQuery utility', () => {
  it('extracts city and price from query', () => {
    const result = parseSearchQuery('London next week under $200')
    expect(result.city).toBe('London')
    expect(result.maxPrice).toBe(200)
  })

  it('handles missing price', () => {
    const result = parseSearchQuery('Barcelona for two nights')
    expect(result.city).toBe('Barcelona')
    expect(result.maxPrice).toBeUndefined()
  })
})
