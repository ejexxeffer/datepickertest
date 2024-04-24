<script setup lang="ts">
import type { TCalendarArr } from '@/components/DatePicker/DatePickerTypes'
interface IDay {
  id: number
  value: number | null
}
const props = withDefaults(
  defineProps<{
    arrays: TCalendarArr
    dayChosen: number
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
defineEmits<{
  (e: 'day', value: IDay): void
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
          value.id === dayChosen ? `border-2 border-solid border-blue-400` : '',
          value.id <= emptySlots[0] ? 'text-slate-400' : '',
          emptySlots[0] + daysAct + emptySlots[1] - value.id < emptySlots[1]
            ? 'text-slate-400'
            : ''
        ]"
        :key="value.id"
        @click="
          () => {
            if (value.value) {
              $emit('day', value)
            }
          }
        "
      >
        {{ value.value }}
      </div>
    </div>
  </div>
</template>
