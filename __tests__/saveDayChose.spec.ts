import { describe, it, expect } from 'vitest'
import { saveDayChose } from '@/components/DatePicker/utils/saveDayChose'
const rightData = [
  [
    { id: 1, value: 28 },
    { id: 8, value: 5 },
    { id: 15, value: 12 },
    { id: 22, value: 19 },
    { id: 29, value: 26 },
    { id: 36, value: 2 }
  ],
  [
    { id: 2, value: 29 },
    { id: 9, value: 6 },
    { id: 16, value: 13 },
    { id: 23, value: 20 },
    { id: 30, value: 27 },
    { id: 37, value: 3 }
  ],
  [
    { id: 3, value: 30 },
    { id: 10, value: 7 },
    { id: 17, value: 14 },
    { id: 24, value: 21 },
    { id: 31, value: 28 },
    { id: 38, value: 4 }
  ],
  [
    { id: 4, value: 1 },
    { id: 11, value: 8 },
    { id: 18, value: 15 },
    { id: 25, value: 22 },
    { id: 32, value: 29 },
    { id: 39, value: 5 }
  ],
  [
    { id: 5, value: 2 },
    { id: 12, value: 9 },
    { id: 19, value: 16 },
    { id: 26, value: 23 },
    { id: 33, value: 30 },
    { id: 40, value: 6 }
  ],
  [
    { id: 6, value: 3 },
    { id: 13, value: 10 },
    { id: 20, value: 17 },
    { id: 27, value: 24 },
    { id: 34, value: 31 },
    { id: 41, value: 7 }
  ],
  [
    { id: 7, value: 4 },
    { id: 14, value: 11 },
    { id: 21, value: 18 },
    { id: 28, value: 25 },
    { id: 35, value: 1 },
    { id: 42, value: 8 }
  ]
]
const nullData = [
  [
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null }
  ],
  [
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null }
  ],
  [
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null }
  ],
  [
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null }
  ],
  [
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null }
  ],
  [
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null }
  ],
  [
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null }
  ]
]
describe('saveDayChose', () => {
  it('func(1) return id: 4 day 1', async () => {
    expect(saveDayChose(rightData, 1)).toEqual({ id: 4, value: 1 })
  })
  it('func(1) is not return wrong result', async () => {
    expect(saveDayChose(rightData, 1)).not.toEqual({ id: 35, value: 1 })
  })
  it('func(2) return id: 5 day 2', async () => {
    expect(saveDayChose(rightData, 2)).toEqual({ id: 5, value: 2 })
  })
  it('func(2) is not return wrong result', async () => {
    expect(saveDayChose(rightData, 2)).not.toEqual({ id: 36, value: 2 })
  })
  it('func(3) return id: 6 day 3', async () => {
    expect(saveDayChose(rightData, 3)).toEqual({ id: 6, value: 3 })
  })
  it('func(3) is not return wrong result', async () => {
    expect(saveDayChose(rightData, 3)).not.toEqual({ id: 37, value: 3 })
  })
  it('func(4) return id: 7 day 4', async () => {
    expect(saveDayChose(rightData, 4)).toEqual({ id: 7, value: 4 })
  })
  it('func(4) is not return wrong result', async () => {
    expect(saveDayChose(rightData, 4)).not.toEqual({ id: 38, value: 4 })
  })
  it('func(5) return id: 8 day 5', async () => {
    expect(saveDayChose(rightData, 5)).toEqual({ id: 8, value: 5 })
  })
  it('func(5) is not return wrong result', async () => {
    expect(saveDayChose(rightData, 5)).not.toEqual({ id: 39, value: 5 })
  })
  it('func(6) return id: 9 day 6', async () => {
    expect(saveDayChose(rightData, 6)).toEqual({ id: 9, value: 6 })
  })
  it('func(6) is not return wrong result', async () => {
    expect(saveDayChose(rightData, 6)).not.toEqual({ id: 40, value: 6 })
  })
  it('func(7) return id: 10 day 7', async () => {
    expect(saveDayChose(rightData, 7)).toEqual({ id: 10, value: 7 })
  })
  it('func(7) is not return wrong result', async () => {
    expect(saveDayChose(rightData, 7)).not.toEqual({ id: 41, value: 7 })
  })
  it('func(8) return id: 11 day 8', async () => {
    expect(saveDayChose(rightData, 8)).toEqual({ id: 11, value: 8 })
  })
  it('func(8) is not return wrong result', async () => {
    expect(saveDayChose(rightData, 8)).not.toEqual({ id: 42, value: 8 })
  })
  it('func(9) return id: 12 day 9', async () => {
    expect(saveDayChose(rightData, 9)).toEqual({ id: 12, value: 9 })
  })
  it('func(9) is not return wrong result', async () => {
    expect(saveDayChose(rightData, 9)).not.toEqual({ id: 43, value: 9 })
  })
  it('func(10) return id: 13 day 10', async () => {
    expect(saveDayChose(rightData, 10)).toEqual({ id: 13, value: 10 })
  })
  it('func(11) return id: 14 day 11', async () => {
    expect(saveDayChose(rightData, 11)).toEqual({ id: 14, value: 11 })
  })
  it('func(12) return id: 15 day 12', async () => {
    expect(saveDayChose(rightData, 12)).toEqual({ id: 15, value: 12 })
  })
  it('func(13) return id: 16 day 13', async () => {
    expect(saveDayChose(rightData, 13)).toEqual({ id: 16, value: 13 })
  })
  it('func(14) return id: 17 day 14', async () => {
    expect(saveDayChose(rightData, 14)).toEqual({ id: 17, value: 14 })
  })
  it('func(15) return id: 18 day 15', async () => {
    expect(saveDayChose(rightData, 15)).toEqual({ id: 18, value: 15 })
  })
  it('func(16) return id: 19 day 16', async () => {
    expect(saveDayChose(rightData, 16)).toEqual({ id: 19, value: 16 })
  })
  it('func(17) return id: 20 day 17', async () => {
    expect(saveDayChose(rightData, 17)).toEqual({ id: 20, value: 17 })
  })
  it('func(18) return id: 21 day 18', async () => {
    expect(saveDayChose(rightData, 18)).toEqual({ id: 21, value: 18 })
  })
  it('func(19) return id: 22 day 19', async () => {
    expect(saveDayChose(rightData, 19)).toEqual({ id: 22, value: 19 })
  })
  it('func(20) return id: 23 day 20', async () => {
    expect(saveDayChose(rightData, 20)).toEqual({ id: 23, value: 20 })
  })
  it('func(21) return id: 24 day 21', async () => {
    expect(saveDayChose(rightData, 21)).toEqual({ id: 24, value: 21 })
  })
  it('func(22) return id: 25 day 22', async () => {
    expect(saveDayChose(rightData, 22)).toEqual({ id: 25, value: 22 })
  })
  it('func(23) return id: 26 day 23', async () => {
    expect(saveDayChose(rightData, 23)).toEqual({ id: 26, value: 23 })
  })
  it('func(24) return id: 27 day 24', async () => {
    expect(saveDayChose(rightData, 24)).toEqual({ id: 27, value: 24 })
  })
  it('func(25) return id: 28 day 25', async () => {
    expect(saveDayChose(rightData, 25)).toEqual({ id: 28, value: 25 })
  })
  it('func(26) return id: 29 day 26', async () => {
    expect(saveDayChose(rightData, 26)).toEqual({ id: 29, value: 26 })
  })
  it('func(27) return id: 30 day 27', async () => {
    expect(saveDayChose(rightData, 27)).toEqual({ id: 30, value: 27 })
  })
  it('func(27) is not return wrong result', async () => {
    expect(saveDayChose(rightData, 27)).not.toEqual({ id: 0, value: 27 })
  })
  it('func(28) return id: 31 day 28', async () => {
    expect(saveDayChose(rightData, 28)).toEqual({ id: 31, value: 28 })
  })
  it('func(28) is not return wrong result', async () => {
    expect(saveDayChose(rightData, 28)).not.toEqual({ id: 1, value: 28 })
  })
  it('func(29) return id: 32 day 29', async () => {
    expect(saveDayChose(rightData, 29)).toEqual({ id: 32, value: 29 })
  })
  it('func(29) is not return wrong result', async () => {
    expect(saveDayChose(rightData, 29)).not.toEqual({ id: 2, value: 29 })
  })
  it('func(30) return id: 33 day 30', async () => {
    expect(saveDayChose(rightData, 30)).toEqual({ id: 33, value: 30 })
  })
  it('func(30) is not return wrong result', async () => {
    expect(saveDayChose(rightData, 30)).not.toEqual({ id: 3, value: 30 })
  })
  it('func(31) return id: 32 day 31', async () => {
    expect(saveDayChose(rightData, 31)).toEqual({ id: 34, value: 31 })
  })
})
describe('saveDayChose check on null', () => {
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 1)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 2)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 3)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 4)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 5)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 6)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 7)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 8)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 9)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 10)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 11)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 12)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 13)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 14)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 15)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 16)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 17)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 18)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 19)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 20)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 21)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 22)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 23)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 24)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 25)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 26)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 27)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 28)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 29)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 30)).toEqual(undefined)
  })
  it('func return undefined from null', async () => {
    expect(saveDayChose(nullData, 31)).toEqual(undefined)
  })
})
