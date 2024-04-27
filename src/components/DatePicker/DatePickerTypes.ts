interface IDay {
  id: number
  value: number | null
}
export interface IDate {
  id: number
  value: Date
}
export type TCalendarArr = IDay[][]
export type Locales = 'en-US' | 'en' | 'ru'
