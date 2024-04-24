<script setup lang="ts">
import DatePicker from '@/components/DatePicker/DatePicker.vue'
import { ref } from 'vue'
const day = ref<number>(0)
const setDay = (value: number) => {
  day.value = value
}
const date = ref<Date>(new Date(2024, 1))
const start = ref<boolean>(false)
const setStart = (value?: boolean) => {
  start.value = !start.value
}
</script>

<template>
  <header>
    <h1 data-test="app">This is The datepicker</h1>
  </header>

  <main>
    <p v-if="day">This day was choosen: {{ day }}</p>
    <button
      class="h-6 w-32 bg-slate-600"
      @click="
        () => {
          setStart()
          console.log(start)
        }
      "
    >
      change week
    </button>
    <DatePicker
      @left="console.log('this is left')"
      @right="console.log('this is right')"
      @day="
        (value) => {
          setDay(value)
          console.log('day', value)
        }
      "
      :isoWeek="start"
      :date="date"
    />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
