import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import DatePicker from '@/components/DatePicker/DatePicker.vue'

describe('Datepicker', () => {
  // it('renders properly', () => {
  //   const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
  //   expect(wrapper.text()).toContain('Hello Vitest')
  // })
  it('renders properly', () => {
    const wrapper = mount(DatePicker, { props: { date: new Date(2024, 1) } })
    // const wrapper = mount(App)
    expect(wrapper.get('[data-test="datepicker"]').find('p').text()).toBe('Mon')
  })
})
