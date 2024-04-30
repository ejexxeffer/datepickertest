import type { TCalendarArr } from './UtilTypes'
import { daysInMonth } from './daysInMonth'
import { getDayWeek } from './getDayWeek'

export const calcArray = (
  year?: number,
  month?: number,
  weekStarted?: boolean,
  previousNextArr?: number[][]
): TCalendarArr => {
  const result: TCalendarArr = [[{ id: 1, value: null }]]
  for (let i = 0; i < 7; i++) {
    result[i] = []
    for (let j = 0; j < 6; j++) {
      result[i][j] = { id: 0, value: null }
    }
  }
  if (
    month !== undefined &&
    year &&
    weekStarted !== undefined &&
    previousNextArr !== undefined
  ) {
    const day = getDayWeek(year, month, 1, weekStarted)
    const daysInMonthAct = daysInMonth(year, month)
    let counter = 1
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (i * 7 + (j + 1) < 7 && i === 0) {
          result[j][i] = {
            id: i * 7 + (j + 1),
            value: previousNextArr[0][j] ? previousNextArr[0][j] : 0
          }
        }
        if (counter > daysInMonthAct && i >= 4) {
          result[j][i] = {
            id: i * 7 + (j + 1),
            value: previousNextArr[1][counter - daysInMonthAct - 1]
              ? previousNextArr[1][counter - daysInMonthAct - 1]
              : 0
          }
          counter++
        }
        if (counter <= daysInMonthAct && (j >= day || i > 0)) {
          result[j][i] = {
            id: i * 7 + (j + 1),
            value: counter
          }
          counter++
        }
      }
    }
  }
  return result
}
