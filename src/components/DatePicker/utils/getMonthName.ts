import type { Locales } from './UtilTypes'

export const getMonthName = (
  year: number,
  month: number,
  lang: Locales
): string => {
  const { format } = new Intl.DateTimeFormat(lang, { month: 'short' })
  return format(new Date(year, month))
}
