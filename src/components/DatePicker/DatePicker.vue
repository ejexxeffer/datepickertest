<script setup lang="ts">
import type { IDay } from './utils/UtilTypes'
import type { TCalendarArr } from './DatePickerTypes'
import { calcArray } from './utils/calcArray'
import { daysInMonth } from './utils/daysInMonth'
import { onMounted, ref, watch } from 'vue'
import { previousNext } from './utils/previousNext'
import { calcEmptySlots } from './utils/calcEmptySlots'
import DateInput from './components/DateInput.vue'
import WeekNames from './components/WeekNames.vue'
import CalendarNumbers from './components/CalendarNumbers.vue'

const props = withDefaults(
  defineProps<{
    date: Date
    isoWeek?: boolean
    before?: boolean
    after?: boolean
    lang?: string
  }>(),
  {
    isoWeek: true,
    before: true,
    after: true,
    lang: 'en'
  }
)
//emtits depricated need to change for one emit with Date
const emit = defineEmits<{
  (e: 'left', value: number): void
  (e: 'right', value: number): void
  (e: 'day', value: number): void
}>()
const day = ref<number>(0)
const month = ref<number>(0)
const year = ref<number>(2022)
const savedDate = ref<Date>(new Date())
const dayChosen = ref<number>(0)
const emptySlots = ref<number[]>([0, 0])
const previousNextArr = ref<number[][]>([[0], [0]])
const daysInMonthAct = ref<number>(0)
const namesArr = ref<string[]>(['none'])
const arrays = ref<TCalendarArr>(calcArray())
const setDayChosen = (value: number) => {
  dayChosen.value = value
}
onMounted(() => {
  if (!props.isoWeek) {
    namesArr.value = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  }
  if (props.isoWeek) {
    namesArr.value = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  }
  savedDate.value = props.date
  day.value = props.date.getDate()
  month.value = props.date.getMonth()
  year.value = props.date.getFullYear()
})
watch(
  () => props.isoWeek,
  () => {
    if (!props.isoWeek) {
      namesArr.value = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }
    if (props.isoWeek) {
      namesArr.value = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
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
    emit('day', day.value)
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
  if (!dayChosen.value) {
    let rightDay: IDay | undefined = undefined
    let i = 0
    while (!rightDay) {
      rightDay = newArrays[i].find(({ value }) => {
        return value === day.value
      })
      i++
    }
    setDayChosen(rightDay.id)
    emit('day', day.value)
  }
})
</script>

<template>
  <DateInput
    :date="$props.date"
    @date="
      (value) => {
        savedDate = value
      }
    "
  />
  <WeekNames :week="namesArr" />
  <br />
  <CalendarNumbers
    :arrays="arrays"
    :day-chosen="dayChosen"
    :empty-slots="emptySlots"
    :daysAct="daysInMonthAct"
    @day="
      (value) => {
        setDayChosen(value.id)
        if (value.value) {
          $emit('day', value.value)
        }
      }
    "
  />
  <br />
  <br />
</template>
