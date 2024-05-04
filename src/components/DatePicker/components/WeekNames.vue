<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { weekDaysArr } from '../utils/weekDaysArr'
import type { Locales } from './WeekNamesTypes'

const props = withDefaults(
  defineProps<{
    isoWeek: boolean
    isShow?: boolean
    lang: Locales
  }>(),
  {
    isoWeek: true,
    isShow: true
  }
)
const weekNames = ref<string[]>(['none'])
onMounted(() => {
  weekNames.value = weekDaysArr(props.isoWeek, props.lang)
})
watch(
  () => props.isoWeek,
  () => {
    weekNames.value = weekDaysArr(props.isoWeek, props.lang)
  }
)
watch(
  () => {
    props.lang
  },
  () => {
    weekNames.value = weekDaysArr(props.isoWeek, props.lang)
  },
  { deep: true }
)
</script>

<template>
  <div
    class="flex justify-between"
    data-test="week"
    :class="[props.isShow ? 'text-cyan-600' : '']"
  >
    <p v-for="(value, i) in weekNames" :key="i">{{ value }}</p>
  </div>
</template>
