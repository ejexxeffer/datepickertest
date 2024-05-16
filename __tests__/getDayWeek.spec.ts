import { describe, it, expect } from 'vitest'
import { getDayWeek } from '@/components/DatePicker/utils/getDayWeek'

describe('getDayWeek', () => {
  it('get first day on month by day of week', async () => {
    expect(getDayWeek(2024, 1, 1, false)).toEqual(4)
  })
  it('get last day on month by day of week', async () => {
    expect(getDayWeek(2024, 1, 29, false)).toEqual(4)
  })
  it('get 20 day on month by day of week', async () => {
    expect(getDayWeek(2024, 1, 20, false)).toEqual(2)
  })
  it('get 26 day on month by day of week, that is equal 6', async () => {
    expect(getDayWeek(2024, 1, 25, true)).toEqual(6)
  })
})
