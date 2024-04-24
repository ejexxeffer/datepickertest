import { getDayWeek } from './getDayWeek'

export const calcEmptySlots = (
  daysInMonth: number,
  year: number,
  month: number,
  weekStarted: boolean,
  before: boolean,
  after: boolean
): number[] => {
  const firstDay = getDayWeek(year, month, 1, weekStarted)
  const lastDay = getDayWeek(year, month, daysInMonth, weekStarted)
  if (before && after) {
    return [firstDay, 6 - lastDay]
  }
  if (before) {
    return [firstDay, 0]
  }
  if (after) {
    return [0, 6 - lastDay]
  }
  return [0, 0]
}
