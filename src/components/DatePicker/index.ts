import type { App } from 'vue'
import DatePicker from './DatePicker.vue'
import '@/assets/main.css'

export default {
  install: (app: any) => {
    app.component('Datepicker', DatePicker)
  }
}
export * from '@/components/DatePicker'
export { DatePicker }
