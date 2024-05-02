import { describe, it, expect } from 'vitest'
import { calcEmptySlots } from '@/components/DatePicker/utils/calcEmptySlots'

describe('calcEmptySlots', () => {
  it('calcEmptySlots is empty', async () => {
    expect(calcEmptySlots(29, 2024, 1, false, false, false)).toEqual([0, 0])
  })
  it('before only and week started on Sun', async () => {
    expect(calcEmptySlots(29, 2024, 1, false, true, false)).toEqual([4, 0])
  })
  it('after only and week started on Sun', async () => {
    expect(calcEmptySlots(29, 2024, 1, false, false, true)).toEqual([0, 2])
  })
  it('before and after and week started on Sun', async () => {
    expect(calcEmptySlots(29, 2024, 1, false, true, true)).toEqual([4, 9])
  })
  it('before only and week started on Mon', async () => {
    expect(calcEmptySlots(29, 2024, 1, true, true, false)).toEqual([3, 0])
  })
  it('after only and week started on Mon', async () => {
    expect(calcEmptySlots(29, 2024, 1, true, false, true)).toEqual([0, 3])
  })
  it('before and after and week started on Mon', async () => {
    expect(calcEmptySlots(29, 2024, 1, true, true, true)).toEqual([3, 10])
  })
})
