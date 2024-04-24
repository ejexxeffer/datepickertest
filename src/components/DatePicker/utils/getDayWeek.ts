export const getDayWeek = (
  year: number,
  month: number,
  dayOfMonth: number,
  startOfWeek: boolean
): number => {
  const day = new Date(year, month, dayOfMonth).getDay()
  return day > 0 ? day - Number(startOfWeek) : 6
}
