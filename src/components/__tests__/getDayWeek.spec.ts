import { describe, it, expect } from 'vitest'
import { getDayWeek } from '@/components/DatePicker/utils/getDayWeek'

describe('getDayWeek', () => {
  it('get first day on month by day of week', async () => {
    expect(getDayWeek(2024, 1, 1, 0)).toEqual(4)
  })
  it('get last day on month by day of week', async () => {
    expect(getDayWeek(2024, 1, 29, 0)).toEqual(4)
  })
  it('get 20 day on month by day of week', async () => {
    expect(getDayWeek(2024, 1, 20, 0)).toEqual(2)
  })
})
