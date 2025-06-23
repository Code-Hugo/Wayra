import { describe, it, expect } from 'vitest'
import { cn, detectCity } from '../lib/utils'

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
