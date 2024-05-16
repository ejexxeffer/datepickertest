import { describe, it, expect } from 'vitest'
import { previousNext } from '@/components/DatePicker/utils/previousNext'

describe('previousNext', () => {
  it('empty slots', async () => {
    expect(previousNext([0, 0], 2024, 1)).toEqual([[0], [0]])
  })
  it('empty slots other date', async () => {
    expect(previousNext([0, 0], 2022, 0)).toEqual([[0], [0]])
  })
  it('empty slots is 3,3', async () => {
    expect(previousNext([3, 3], 2024, 1)).toEqual([
      [29, 30, 31],
      [1, 2, 3]
    ])
  })
  it('empty slots is 3,3 and month is 0', async () => {
    expect(previousNext([3, 3], 2024, 0)).toEqual([
      [29, 30, 31],
      [1, 2, 3]
    ])
  })
  it('empty slots is 4,0', async () => {
    expect(previousNext([4, 0], 2024, 1)).toEqual([[28, 29, 30, 31], [0]])
  })
  it('empty slots is 0,2', async () => {
    expect(previousNext([0, 2], 2024, 1)).toEqual([[0], [1, 2]])
  })
  it('empty slots 4,2', async () => {
    expect(previousNext([4, 2], 2024, 1)).toEqual([
      [28, 29, 30, 31],
      [1, 2]
    ])
  })
})
