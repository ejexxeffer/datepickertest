import { describe, it, expect } from 'vitest'
import { saveDayChose } from '@/components/DatePicker/utils/saveDayChose'

describe('saveDayChose', () => {
  it('func return right day', async () => {
    expect(
      saveDayChose(
        [
          [
            { id: 1, value: 28 },
            { id: 8, value: 4 },
            { id: 15, value: 11 },
            { id: 22, value: 18 },
            { id: 29, value: 25 }
          ],
          [
            { id: 2, value: 29 },
            { id: 9, value: 5 },
            { id: 16, value: 12 },
            { id: 23, value: 19 },
            { id: 30, value: 26 }
          ],
          [
            { id: 3, value: 30 },
            { id: 10, value: 6 },
            { id: 17, value: 13 },
            { id: 24, value: 20 },
            { id: 31, value: 27 }
          ],
          [
            { id: 4, value: 31 },
            { id: 11, value: 7 },
            { id: 18, value: 14 },
            { id: 25, value: 21 },
            { id: 32, value: 28 }
          ],
          [
            { id: 5, value: 1 },
            { id: 12, value: 8 },
            { id: 19, value: 15 },
            { id: 26, value: 22 },
            { id: 33, value: 29 }
          ],
          [
            { id: 6, value: 2 },
            { id: 13, value: 9 },
            { id: 20, value: 16 },
            { id: 27, value: 23 },
            { id: 34, value: 1 }
          ],
          [
            { id: 7, value: 3 },
            { id: 14, value: 10 },
            { id: 21, value: 17 },
            { id: 28, value: 24 },
            { id: 35, value: 2 }
          ]
        ],
        3
      )
    ).toEqual({ id: 7, value: 3 })
  })
  it('func is not return wrong result', async () => {
    expect(
      saveDayChose(
        [
          [
            { id: 1, value: 28 },
            { id: 8, value: 4 },
            { id: 15, value: 11 },
            { id: 22, value: 18 },
            { id: 29, value: 25 }
          ],
          [
            { id: 2, value: 29 },
            { id: 9, value: 5 },
            { id: 16, value: 12 },
            { id: 23, value: 19 },
            { id: 30, value: 26 }
          ],
          [
            { id: 3, value: 30 },
            { id: 10, value: 6 },
            { id: 17, value: 13 },
            { id: 24, value: 20 },
            { id: 31, value: 27 }
          ],
          [
            { id: 4, value: 31 },
            { id: 11, value: 7 },
            { id: 18, value: 14 },
            { id: 25, value: 21 },
            { id: 32, value: 28 }
          ],
          [
            { id: 5, value: 1 },
            { id: 12, value: 8 },
            { id: 19, value: 15 },
            { id: 26, value: 22 },
            { id: 33, value: 29 }
          ],
          [
            { id: 6, value: 2 },
            { id: 13, value: 9 },
            { id: 20, value: 16 },
            { id: 27, value: 23 },
            { id: 34, value: 1 }
          ],
          [
            { id: 7, value: 3 },
            { id: 14, value: 10 },
            { id: 21, value: 17 },
            { id: 28, value: 24 },
            { id: 35, value: 2 }
          ]
        ],
        3
      )
    ).not.toEqual({ id: 6, value: 3 })
  })
})
