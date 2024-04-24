import { describe, it, expect } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import DateInput from '../DatePicker/components/DateInput.vue'

describe('DateInput', () => {
  it('trigger left arrow for changin month', async () => {
    const wrapper = mount(DateInput, { props: { date: new Date(2024, 1, 2) } })
    await flushPromises()
    await wrapper
      .get('[data-test="head"]')
      .findAll('button')[0]
      .trigger('click')
    expect(wrapper.emitted().date[0]).toEqual([new Date(2024, 0, 2)])
    wrapper.unmount()
  })
  it('trigger left arrow for changin month', async () => {
    const wrapper = mount(DateInput, { props: { date: new Date(2024, 1, 1) } })
    await flushPromises()
    await wrapper
      .get('[data-test="head"]')
      .findAll('button')[0]
      .trigger('click')
    expect(wrapper.emitted().date[0]).toEqual([new Date(2024, 0, 1)])
    wrapper.unmount()
  })
  it('trigger right arrow for changin month', async () => {
    const wrapper = mount(DateInput, { props: { date: new Date(2024, 11, 1) } })
    await flushPromises()
    await wrapper
      .get('[data-test="head"]')
      .findAll('button')[1]
      .trigger('click')
    expect(wrapper.emitted().date[0]).toEqual([new Date(2024, 12, 1)])
    wrapper.unmount()
  })
})
