import { describe, it, expect } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import DatePicker from '@/components/DatePicker/DatePicker.vue'

describe('Datepicker', () => {
  it('renders properly week started 1', async () => {
    const wrapper = mount(DatePicker, { props: { date: new Date(2024, 1) } })
    await flushPromises()
    expect(wrapper.vm.weekStarted).toEqual(1)
    expect(wrapper.get('[data-test="week"]').find('p').text()).toBe('Mon')
    wrapper.unmount()
  })
  it('renders properly week started 0', async () => {
    const wrapper = mount(DatePicker, {
      props: { date: new Date(2024, 1), weekStarted: 0 }
    })
    await flushPromises()
    expect(wrapper.vm.weekStarted).toEqual(0)
    expect(wrapper.get('[data-test="week"]').find('p').text()).toBe('Sun')
    wrapper.unmount()
  })
  it('emit a day', async () => {
    const wrapper = mount(DatePicker, {
      props: { date: new Date(2024, 1) }
    })
    await flushPromises()
    expect(wrapper.emitted().day[0]).toEqual([1])
    wrapper.unmount()
  })
  it('trigger emit and check to being changed', async () => {
    const wrapper = mount(DatePicker, {
      props: { date: new Date(2024, 1) }
    })
    await flushPromises()
    expect(wrapper.emitted().day[0]).toEqual([1])
    await flushPromises()
    //prettier-ignore
    await wrapper.get('[data-test="day"]').findAll('div')[0].findAll('div')[1].trigger('click')
    expect(wrapper.emitted().day[1]).toEqual([5])
    wrapper.unmount()
  })
  // it('watch', async () => {
  //   const wrapper = mount(DatePicker, {
  //     props: { date: new Date(2024, 1) }
  //   })
  //   await flushPromises()
  //   expect(wrapper.vm.month).toEqual(1)
  //   expect(wrapper.vm.day).toEqual(1)
  //   expect(wrapper.vm.year).toEqual(2024)
  //   wrapper.unmount()
  // })
})
