<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    week: string[]
    isShow?: boolean
    lang?: string
  }>(),
  {
    isShow: true,
    lang: 'en'
  }
)
</script>

<template>
  <div
    class="flex justify-between"
    data-test="week"
    :class="[props.isShow ? 'text-cyan-600' : '']"
  >
    <p v-for="(value, i) in week" :key="i">{{ value }}</p>
  </div>
</template>
