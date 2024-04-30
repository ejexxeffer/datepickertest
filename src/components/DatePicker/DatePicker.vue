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
import { weekDaysArr } from './utils/weekDaysArr'

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
//emtits depricated need to change for one emit with Date
const emit = defineEmits<{
  (e: 'date', value: Date): void
}>()
const day = ref<number>(0)
const month = ref<number>(0)
const year = ref<number>(2022)
const savedDate = ref<Date>(new Date(props.date))
const dateChosen = ref<IDate>({ id: 0, value: new Date() })
const emptySlots = ref<number[]>([0, 0])
const previousNextArr = ref<number[][]>([[0], [0]])
const daysInMonthAct = ref<number>(0)
const weekDayNames = ref<string[]>(['none'])
const arrays = ref<TCalendarArr>(calcArray())
const setDateChosen = (value: IDate) => {
  dateChosen.value = value
}
onMounted(() => {
  weekDayNames.value = weekDaysArr(props.isoWeek, props.lang)
  savedDate.value = props.date
  day.value = props.date.getDate()
  month.value = props.date.getMonth()
  year.value = props.date.getFullYear()
})
watch(
  () => props.isoWeek,
  () => {
    weekDayNames.value = weekDaysArr(props.isoWeek, props.lang)
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
// maybe this watcher don't need with right behaviour
watch(arrays, (newArrays) => {
  if (dateChosen.value.id !== saveDayChose(newArrays, day.value).id) {
    setDateChosen({
      id: saveDayChose(arrays.value, day.value).id,
      value: new Date(year.value, month.value, day.value)
    })
  }
})
</script>

<template>
  <DateInput
    :date="savedDate"
    @date="
      (value) => {
        savedDate = value
      }
    "
  />
  <WeekNames :week="weekDayNames" />
  <br />
  <CalendarNumbers
    :arrays="arrays"
    :date-chosen="dateChosen"
    :empty-slots="emptySlots"
    :daysAct="daysInMonthAct"
    @date="
      (value) => {
        setDateChosen(value)
        savedDate = value.value
      }
    "
  />
  <br />
  <br />
</template>
