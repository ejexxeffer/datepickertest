<script setup lang="ts">
import type { IDate, Locales, TCalendarArr } from './DatePickerTypes'
import { calcArray } from './utils/calcArray'
import { daysInMonth } from './utils/daysInMonth'
import { onMounted, ref, watch } from 'vue'
import { previousNext } from './utils/previousNext'
import { calcEmptySlots } from './utils/calcEmptySlots'
import DateInput from './components/DateInput.vue'
import WeekNames from './components/WeekNames.vue'
import CalendarNumbers from './components/CalendarNumbers.vue'
import { saveDayChose } from './utils/saveDayChose'

const props = withDefaults(
  defineProps<{
    date: Date
    isoWeek?: boolean
    before?: boolean
    after?: boolean
    lang?: Locales
  }>(),
  {
    date: () => new Date(),
    isoWeek: true,
    before: true,
    after: true,
    lang: 'en'
  }
)
const emit = defineEmits<{
  (e: 'date', value: Date): void
}>()
const day = ref<number>(0)
const month = ref<number>(0)
const year = ref<number>(2022)
const savedLang = ref<Locales>('en')
const savedDate = ref<Date>(new Date(props.date))
const dateChosen = ref<IDate>({ id: 0, value: new Date() })
const emptySlots = ref<number[]>([0, 0])
const previousNextArr = ref<number[][]>([[0], [0]])
const daysInMonthAct = ref<number>(0)
const arrays = ref<TCalendarArr>(calcArray())
const setDateChosen = (value: IDate) => {
  dateChosen.value = value
}
onMounted(() => {
  savedDate.value = props.date
  day.value = props.date.getDate()
  month.value = props.date.getMonth()
  year.value = props.date.getFullYear()
  savedLang.value = props.lang
})
watch(
  () => props.isoWeek,
  () => {
    emptySlots.value = calcEmptySlots(
      daysInMonth(year.value, month.value),
      year.value,
      month.value,
      props.isoWeek,
      props.before,
      props.after
    )
  }
)
watch(
  () => props.date,
  () => {
    savedDate.value = props.date
    day.value = props.date.getDate()
    month.value = props.date.getMonth()
    year.value = props.date.getFullYear()
  },
  { deep: true }
)
watch(
  () => props.lang,
  () => {
    savedLang.value = props.lang
  }
)
watch(savedDate, (newSavedDate) => {
  day.value = newSavedDate.getDate()
  month.value = newSavedDate.getMonth()
  year.value = newSavedDate.getFullYear()
  daysInMonthAct.value = daysInMonth(
    newSavedDate.getFullYear(),
    newSavedDate.getMonth()
  )
  emptySlots.value = calcEmptySlots(
    daysInMonth(year.value, month.value),
    year.value,
    month.value,
    props.isoWeek,
    props.before,
    props.after
  )
  arrays.value = calcArray(
    newSavedDate.getFullYear(),
    newSavedDate.getMonth(),
    props.isoWeek,
    previousNextArr.value
  )
  emit('date', savedDate.value)
})
watch(emptySlots, (newEmptySlots) => {
  previousNextArr.value = previousNext(newEmptySlots, year.value, month.value)
  arrays.value = calcArray(
    year.value,
    month.value,
    props.isoWeek,
    previousNextArr.value
  )
})
watch(arrays, (newArrays) => {
  if (dateChosen.value.id !== Number(saveDayChose(newArrays, day.value)?.id)) {
    setDateChosen({
      id: Number(saveDayChose(newArrays, day.value)?.id),
      value: new Date(year.value, month.value, day.value)
    })
  }
})
</script>

<template>
  <DateInput
    :date="savedDate"
    :lang="savedLang"
    @date="
      (value) => {
        savedDate = value
      }
    "
  />
  <WeekNames :iso-week="$props.isoWeek" :lang="savedLang" />
  <br />
  <CalendarNumbers
    :arrays="arrays"
    :date-chosen="dateChosen"
    :empty-slots="emptySlots"
    :daysAct="daysInMonthAct"
    @date="
      (value) => {
        savedDate = value.value
      }
    "
  />
  <br />
  <br />
</template>
