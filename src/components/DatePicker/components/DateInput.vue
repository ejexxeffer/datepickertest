<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    date: Date
    controlsIsShow?: boolean
    inputIsEnabled?: boolean
    isShow?: boolean
    lang?: string
  }>(),
  {
    isShow: true,
    controlsIsShow: true,
    inputIsEnabled: true,
    lang: 'en'
  }
)
const emit = defineEmits<{
  (e: 'date', value: Date): void
}>()
const savedDate = ref<Date>(new Date(props.date))
onMounted(() => {
  savedDate.value.setDate(props.date.getDate())
  savedDate.value.setFullYear(props.date.getFullYear())
  savedDate.value.setMonth(props.date.getMonth())
})
watch(
  () => {
    props.date
  },
  () => {
    savedDate.value = props.date
    savedDate.value.setDate(props.date.getDate())
    savedDate.value.setFullYear(props.date.getFullYear())
    savedDate.value.setMonth(props.date.getMonth())
  },
  { deep: true }
)
const savedDateIncrement = () => {
  const newDate = new Date(
    savedDate.value.getFullYear(),
    savedDate.value.getMonth(),
    savedDate.value.getDate()
  )
  newDate.setMonth(newDate.getMonth() + 1, savedDate.value.getDate())
  savedDate.value = newDate
  emit('date', newDate)
}
const savedDateDicrement = () => {
  const newDate = new Date(
    savedDate.value.getFullYear(),
    savedDate.value.getMonth(),
    savedDate.value.getDate()
  )
  newDate.setMonth(newDate.getMonth() - 1, savedDate.value.getDate())
  savedDate.value = newDate
  emit('date', newDate)
}
</script>

<template>
  <div class="flex justify-between" data-test="head">
    <button
      @click="savedDateDicrement()"
      :class="[props.controlsIsShow ? 'text-cyan-600' : '']"
    >
      left
    </button>
    <div
      class="flex justify-between gap-x-2"
      :class="[props.inputIsEnabled ? 'text-cyan-600' : '']"
    >
      <p>{{ savedDate.getMonth() }}</p>
      <p>{{ savedDate.getFullYear() }}</p>
    </div>
    <button
      @click="savedDateIncrement()"
      :class="[props.controlsIsShow ? 'text-cyan-600' : '']"
    >
      right
    </button>
  </div>
</template>
