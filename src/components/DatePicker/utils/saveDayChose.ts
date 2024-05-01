import type { IDay, TCalendarArr } from './UtilTypes'

export const saveDayChose = (arrays: TCalendarArr, day: number) => {
  let rightDay: IDay | undefined = undefined
  let i = 0
  while (!rightDay && i < arrays.length) {
    rightDay = arrays[i].find(({ id, value }) => {
      if (id < 8 && Number(value) < 8 && value !== null) {
        return value === day
      }
      if (id > 7 && id < 29 && value !== null) {
        return value === day
      }
      if (id > 28 && value !== null && Number(value) > 20) {
        return value === day
      }
      if (value === null) {
        return value === day
      }
    })
    i++
  }
  return rightDay
}
