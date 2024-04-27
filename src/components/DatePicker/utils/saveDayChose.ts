import type { IDay, TCalendarArr } from './UtilTypes'

export const saveDayChose = (arrays: TCalendarArr, day: number) => {
  let rightDay: IDay | undefined = undefined
  let i = 0
  while (!rightDay) {
    rightDay = arrays[i].find(({ id, value }) => {
      if (id < 8 && Number(value) < 21 && value !== null) {
        return value === day
      }
      if (id > 8 && Number(value) > 21 && value !== null) {
        return value === day
      }
    })
    i++
  }
  console.log('day', day)
  console.log('rightDay', rightDay)
  return rightDay
}
