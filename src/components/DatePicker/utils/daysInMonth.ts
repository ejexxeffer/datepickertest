export const daysInMonth = (year: number, month: number): number => {
  const days =
    year % 4 === 0 || year % 100 === 0 || year % 400 === 0 ? 366 : 365
  let daysInMonth = (month + 1) % 2 === 0 ? 30 : 31
  if (month === 1) {
    daysInMonth = days === 365 ? 28 : 29
  }
  return daysInMonth
}
