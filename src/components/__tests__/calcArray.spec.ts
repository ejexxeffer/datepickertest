import { describe, it, expect } from 'vitest'
import { calcArray } from '@/components/DatePicker/utils/calcArray'

describe('calcArray', () => {
  it('atrributes is empty', async () => {
    expect(calcArray()[0]).toMatchObject([
      { id: 0, value: null },
      { id: 0, value: null },
      { id: 0, value: null },
      { id: 0, value: null },
      { id: 0, value: null }
    ])
    expect(calcArray()[1]).toMatchObject([
      { id: 0, value: null },
      { id: 0, value: null },
      { id: 0, value: null },
      { id: 0, value: null },
      { id: 0, value: null }
    ])
    expect(calcArray()[2]).toMatchObject([
      { id: 0, value: null },
      { id: 0, value: null },
      { id: 0, value: null },
      { id: 0, value: null },
      { id: 0, value: null }
    ])
    expect(calcArray()[3]).toMatchObject([
      { id: 0, value: null },
      { id: 0, value: null },
      { id: 0, value: null },
      { id: 0, value: null },
      { id: 0, value: null }
    ])
    expect(calcArray()[4]).toMatchObject([
      { id: 0, value: null },
      { id: 0, value: null },
      { id: 0, value: null },
      { id: 0, value: null },
      { id: 0, value: null }
    ])
    expect(calcArray()[5]).toMatchObject([
      { id: 0, value: null },
      { id: 0, value: null },
      { id: 0, value: null },
      { id: 0, value: null },
      { id: 0, value: null }
    ])
    expect(calcArray()[6]).toMatchObject([
      { id: 0, value: null },
      { id: 0, value: null },
      { id: 0, value: null },
      { id: 0, value: null },
      { id: 0, value: null }
    ])
  })
  it('week is started on Sunday', async () => {
    expect(
      calcArray(2024, 1, false, [
        [28, 29, 30, 31],
        [1, 2]
      ])[0]
    ).toMatchObject([
      { id: 1, value: 28 },
      { id: 8, value: 4 },
      { id: 15, value: 11 },
      { id: 22, value: 18 },
      { id: 29, value: 25 }
    ])
    expect(
      calcArray(2024, 1, false, [
        [28, 29, 30, 31],
        [1, 2]
      ])[1]
    ).toMatchObject([
      { id: 2, value: 29 },
      { id: 9, value: 5 },
      { id: 16, value: 12 },
      { id: 23, value: 19 },
      { id: 30, value: 26 }
    ])
    expect(
      calcArray(2024, 1, false, [
        [28, 29, 30, 31],
        [1, 2]
      ])[2]
    ).toMatchObject([
      { id: 3, value: 30 },
      { id: 10, value: 6 },
      { id: 17, value: 13 },
      { id: 24, value: 20 },
      { id: 31, value: 27 }
    ])
    expect(
      calcArray(2024, 1, false, [
        [28, 29, 30, 31],
        [1, 2]
      ])[3]
    ).toMatchObject([
      { id: 4, value: 31 },
      { id: 11, value: 7 },
      { id: 18, value: 14 },
      { id: 25, value: 21 },
      { id: 32, value: 28 }
    ])
    expect(
      calcArray(2024, 1, false, [
        [28, 29, 30, 31],
        [1, 2]
      ])[4]
    ).toMatchObject([
      { id: 5, value: 1 },
      { id: 12, value: 8 },
      { id: 19, value: 15 },
      { id: 26, value: 22 },
      { id: 33, value: 29 }
    ])
    expect(
      calcArray(2024, 1, false, [
        [28, 29, 30, 31],
        [1, 2]
      ])[5]
    ).toMatchObject([
      { id: 6, value: 2 },
      { id: 13, value: 9 },
      { id: 20, value: 16 },
      { id: 27, value: 23 },
      { id: 34, value: 1 }
    ])
    expect(
      calcArray(2024, 1, false, [
        [28, 29, 30, 31],
        [1, 2]
      ])[6]
    ).toMatchObject([
      { id: 7, value: 3 },
      { id: 14, value: 10 },
      { id: 21, value: 17 },
      { id: 28, value: 24 },
      { id: 35, value: 2 }
    ])
  })
  it('week is started on Monday', async () => {
    expect(
      calcArray(2024, 1, true, [
        [29, 30, 31],
        [1, 2, 3]
      ])[0]
    ).toMatchObject([
      { id: 1, value: 29 },
      { id: 8, value: 5 },
      { id: 15, value: 12 },
      { id: 22, value: 19 },
      { id: 29, value: 26 }
    ])
    expect(
      calcArray(2024, 1, true, [
        [29, 30, 31],
        [1, 2, 3]
      ])[1]
    ).toMatchObject([
      { id: 2, value: 30 },
      { id: 9, value: 6 },
      { id: 16, value: 13 },
      { id: 23, value: 20 },
      { id: 30, value: 27 }
    ])
    expect(
      calcArray(2024, 1, true, [
        [29, 30, 31],
        [1, 2, 3]
      ])[2]
    ).toMatchObject([
      { id: 3, value: 31 },
      { id: 10, value: 7 },
      { id: 17, value: 14 },
      { id: 24, value: 21 },
      { id: 31, value: 28 }
    ])
    expect(
      calcArray(2024, 1, true, [
        [29, 30, 31],
        [1, 2, 3]
      ])[3]
    ).toMatchObject([
      { id: 4, value: 1 },
      { id: 11, value: 8 },
      { id: 18, value: 15 },
      { id: 25, value: 22 },
      { id: 32, value: 29 }
    ])
    expect(
      calcArray(2024, 1, true, [
        [29, 30, 31],
        [1, 2, 3]
      ])[4]
    ).toMatchObject([
      { id: 5, value: 2 },
      { id: 12, value: 9 },
      { id: 19, value: 16 },
      { id: 26, value: 23 },
      { id: 33, value: 1 }
    ])
    expect(
      calcArray(2024, 1, true, [
        [29, 30, 31],
        [1, 2, 3]
      ])[5]
    ).toMatchObject([
      { id: 6, value: 3 },
      { id: 13, value: 10 },
      { id: 20, value: 17 },
      { id: 27, value: 24 },
      { id: 34, value: 2 }
    ])
    expect(
      calcArray(2024, 1, true, [
        [29, 30, 31],
        [1, 2, 3]
      ])[6]
    ).toMatchObject([
      { id: 7, value: 4 },
      { id: 14, value: 11 },
      { id: 21, value: 18 },
      { id: 28, value: 25 },
      { id: 35, value: 3 }
    ])
  })
})
