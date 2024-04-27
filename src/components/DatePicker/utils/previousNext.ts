import { daysInMonth } from './daysInMonth'

export const previousNext = (
  slots: number[],
  year: number,
  month: number
): number[][] => {
  const result: number[][] = [[0], [0]]
  if (slots[0]) {
    let previous = daysInMonth(year, month > 0 ? month - 1 : 11)
    for (let i = slots[0] - 1; i >= 0; i--) {
      result[0][i] = previous
      previous = previous - 1
    }
  }
  if (slots[1]) {
    for (let i = 0; i < slots[1]; i++) {
      result[1][i] = i + 1
    }
  }
  return result
}
