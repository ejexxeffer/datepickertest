import { describe, it, expect } from 'vitest'
import { daysInMonth } from '@/components/DatePicker/utils/daysInMonth'

describe('daysInMonth', () => {
  it('daysInMonth of february is right', async () => {
    expect(daysInMonth(2024, 1)).toEqual(29)
    expect(daysInMonth(2022, 1)).toEqual(28)
  })
  it('daysInMonth of other month', async () => {
    expect(daysInMonth(2024, 2)).toEqual(31)
    expect(daysInMonth(2024, 3)).toEqual(30)
  })
})
