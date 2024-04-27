import type { Locales } from './UtilTypes'

export const weekDaysArr = (isoWeek: boolean, lang: Locales): string[] => {
  const { format } = new Intl.DateTimeFormat(lang, { weekday: 'short' })
  return [...Array<string>(7).keys()].map((day) => {
    return format(new Date(2024, 3, 21 + day + Number(isoWeek)))
  })
}
