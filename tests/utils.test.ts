import { describe, it, expect } from 'vitest'
import { cn } from '../lib/utils'

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
