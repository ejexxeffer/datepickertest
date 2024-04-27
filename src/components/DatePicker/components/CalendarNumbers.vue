<script setup lang="ts">
import type { TCalendarArr } from '@/components/DatePicker/DatePickerTypes'
import { ref } from 'vue'
interface IDate {
  id: number
  value: Date
}
interface IDay {
  id: number
  value: number | null
}
const props = withDefaults(
  defineProps<{
    arrays: TCalendarArr
    dateChosen: IDate
    emptySlots: number[]
    daysAct: number
    isEnabled?: boolean
    isShow?: boolean
    lang?: string
  }>(),
  {
    isEnabled: true,
    isShow: true,
    lang: 'en'
  }
)
const newDate = (value: IDay): Date => {
  if (value.id < 8 && Number(value.value) > 20 && value.value !== null) {
    console.log('fired', value)
    let d = new Date(
      props.dateChosen.value.getFullYear(),
      props.dateChosen.value.getMonth(),
      0
    )
    d.setDate(Number(value.value))
    return d
  }
  if (value.id > 28 && Number(value.value) < 20 && value.value !== null) {
    console.log('pepe')
    return new Date(
      props.dateChosen.value.getFullYear(),
      props.dateChosen.value.getMonth() + 1,
      Number(value.value)
    )
  }
  return new Date(
    props.dateChosen.value.getFullYear(),
    props.dateChosen.value.getMonth(),
    Number(value.value)
  )
}
defineEmits<{
  (e: 'date', value: IDate): void
}>()
</script>

<template>
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
          value.id === dateChosen.id
            ? `border-2 border-solid border-blue-400`
            : '',
          value.id <= emptySlots[0] ? 'text-slate-400' : '',
          emptySlots[0] + daysAct + emptySlots[1] - value.id < emptySlots[1]
            ? 'text-slate-400'
            : ''
        ]"
        :key="value.id"
        @click="
          () => {
            if (value.value) {
              let d = newDate(value)
              $emit('date', { id: value.id, value: d })
            }
          }
        "
      >
        {{ value.value }}
      </div>
    </div>
  </div>
</template>
setDateChosen
