export const getDayWeek = (
  year: number,
  month: number,
  day: number,
  isoWeek: boolean
): number => {
  //!! isn't actural 'day of week' this is only for calendarArr offset
  const d = new Date(year, month, day).getDay()
  return d > 0 ? d - Number(isoWeek) : 6 * Number(isoWeek)
}
