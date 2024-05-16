<script setup lang="ts">
import DatePicker from '@/components/DatePicker/DatePicker.vue'
import { ref } from 'vue'
import type { Locales } from './components/DatePicker/DatePickerTypes'
// import DatePicker from 'datepickertest'
const day = ref<number>(0)
const date = ref<Date>(new Date(2024, 0, 1))
const start = ref<boolean>(false)
const setStart = () => {
  start.value = !start.value
}
const lang = ref<Locales>('en')
const setLang = () => {
  lang.value = lang.value === 'en' ? 'ru' : 'en'
}
</script>

<template>
  <header>
    <h1 data-test="app">This is The datepicker</h1>
  </header>

  <main>
    <p v-if="day">This day was choosen: {{ day }}</p>
    <button
      class="mr-5 h-6 w-28 bg-slate-600"
      @click="
        () => {
          setStart()
          console.log(start)
        }
      "
    >
      change week
    </button>
    <button
      class="h-6 w-28 bg-slate-600"
      @click="
        () => {
          setLang()
          console.log(lang)
        }
      "
    >
      change lang
    </button>
    <DatePicker
      :date="date"
      :lang="lang"
      :isoWeek="start"
      @date="
        (value) => {
          day = value.getDate()
          date = value
        }
      "
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
