import type { IDay, TCalendarArr } from './UtilTypes'

export const saveDayChose = (arrays: TCalendarArr, day: number) => {
  let rightDay: IDay | undefined = undefined
  let i = 0
  while (!rightDay) {
    rightDay = arrays[i].find(({ value }) => {
      return value === day
    })
    i++
  }
  return rightDay
}
