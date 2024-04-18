<script setup lang="ts">
import type { IDay } from './utils/UtilTypes'
import type { TCalendarArr } from './DatePickerTypes'
import { calcArray } from './utils/calcArray'
import { daysInMonth } from './utils/daysInMonth'
import { onMounted, ref, watch } from 'vue'
import { previousNext } from './utils/previousNext'
import { calcEmptySlots } from './utils/calcEmptySlots'

const props = withDefaults(
  defineProps<{
    date: Date
    weekStarted?: 0 | 1
    before?: boolean
    after?: boolean
    lang?: string
  }>(),
  {
    before: true,
    after: true,
    weekStarted: 1,
    lang: 'en'
  }
)
const emit = defineEmits<{
  (e: 'left', value: number): void
  (e: 'right', value: number): void
  (e: 'day', value: number): void
}>()
const week = ref<string[]>(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])
const day = ref<number>(0)
const month = ref<number>(0)
const year = ref<number>(2022)
const dayChosen = ref<number>(0)
const emptySlots = ref<number[]>([0, 0])
const previousNextArr = ref<number[][]>([[0], [0]])
const daysInMonthAct = ref<number>(0)
const arrays = ref<TCalendarArr>(calcArray())
const setDayChosen = (value: number) => {
  dayChosen.value = value
}
onMounted(() => {
  day.value = props.date.getDate()
  month.value = props.date.getMonth()
  year.value = props.date.getFullYear()
  if (props.weekStarted === 0) {
    week.value = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  }
  if (props.weekStarted === 1) {
    week.value = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  }
})
watch(
  () => props.weekStarted,
  () => {
    if (props.weekStarted === 0) {
      week.value = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }
    if (props.weekStarted === 1) {
      week.value = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
    emptySlots.value = calcEmptySlots(
      daysInMonth(year.value, month.value),
      year.value,
      month.value,
      props.weekStarted,
      props.before,
      props.after
    )
  }
)
watch(
  () => props.date,
  () => {
    day.value = props.date.getDate()
    month.value = props.date.getMonth()
    year.value = props.date.getFullYear()
  }
)
watch(month, (newMonth) => {
  daysInMonthAct.value = daysInMonth(year.value, newMonth)
  emptySlots.value = calcEmptySlots(
    daysInMonth(year.value, month.value),
    year.value,
    month.value,
    props.weekStarted,
    props.before,
    props.after
  )
  arrays.value = calcArray(
    newMonth,
    year.value,
    props.weekStarted,
    previousNextArr.value
  )
})
watch(year, (newYear) => {
  daysInMonthAct.value = daysInMonth(newYear, month.value)
  emptySlots.value = calcEmptySlots(
    daysInMonth(year.value, month.value),
    year.value,
    month.value,
    props.weekStarted,
    props.before,
    props.after
  )
  arrays.value = calcArray(
    month.value,
    newYear,
    props.weekStarted,
    previousNextArr.value
  )
})
watch(emptySlots, (newEmptySlots) => {
  previousNextArr.value = previousNext(newEmptySlots, year.value, month.value)
  arrays.value = calcArray(
    month.value,
    year.value,
    props.weekStarted,
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
  <div class="flex justify-between">
    <button @click="$emit('left', month - 1)">left</button>
    <div class="flex justify-between gap-x-2">
      <p>{{ month }}</p>
      <p>{{ year }}</p>
    </div>
    <button @click="$emit('right', month + 1)">right</button>
  </div>
  <div class="flex justify-between" data-test="week">
    <p v-for="(value, i) in week" :key="i">{{ value }}</p>
  </div>
  <br />
  <div class="flex justify-between" data-test="day">
    <div
      v-for="(array, i) in arrays"
      :key="i"
      class="flex flex-col items-center"
    >
      <div
        v-for="value in array"
        class="box-border flex min-h-7 min-w-7 justify-center active:border-2 active:border-solid active:border-blue-400"
        :class="[
          value.id === dayChosen ? `border-2 border-solid border-blue-400` : '',
          value.id <= emptySlots[0] ? 'text-slate-400' : '',
          emptySlots[0] + daysInMonthAct + emptySlots[1] - value.id <
          emptySlots[1]
            ? 'text-slate-400'
            : ''
        ]"
        :key="value.id"
        @click="
          () => {
            setDayChosen(value.id)
            if (value.value) {
              $emit('day', value.value)
              console.log(value.value)
            }
          }
        "
      >
        {{ value.value }}
      </div>
    </div>
  </div>
  <br />
  <br />
</template>
