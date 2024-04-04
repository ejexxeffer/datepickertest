export const getDayWeek = (
  year: number,
  month: number,
  dayOfMonth: number,
  startOfWeek: 0 | 1
): number => {
  const day = new Date(year, month, dayOfMonth).getDay()
  return day > 0 ? day - startOfWeek : 6
}
