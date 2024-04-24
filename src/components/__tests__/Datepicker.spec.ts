import { describe, it, expect } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import DatePicker from '@/components/DatePicker/DatePicker.vue'

describe('Datepicker', () => {
  it('renders properly week started 1', async () => {
    const wrapper = mount(DatePicker, { props: { date: new Date(2024, 1) } })
    await flushPromises()
    expect(wrapper.vm.isoWeek).toEqual(true)
    expect(wrapper.get('[data-test="week"]').find('p').text()).toMatch('Mon')
    wrapper.unmount()
  })
  it('renders properly week started 0', async () => {
    const wrapper = mount(DatePicker, {
      props: { date: new Date(2024, 1), isoWeek: false }
    })
    await flushPromises()
    expect(wrapper.vm.isoWeek).toEqual(false)
    expect(wrapper.get('[data-test="week"]').find('p').text()).toMatch('Sun')
    wrapper.unmount()
  })
  it('week is changed', async () => {
    const wrapper = mount(DatePicker, {
      props: { date: new Date(2024, 1), isoWeek: false }
    })
    await flushPromises()
    expect(wrapper.vm.isoWeek).toEqual(false)
    expect(wrapper.get('[data-test="week"]').find('p').text()).toMatch('Sun')
    await wrapper.setProps({ date: new Date(2024, 1), isoWeek: true })
    await flushPromises()
    expect(wrapper.vm.isoWeek).toEqual(true)
    expect(wrapper.get('[data-test="week"]').find('p').text()).toMatch('Mon')
    await wrapper.setProps({ date: new Date(2024, 1), isoWeek: false })
    await flushPromises()
    expect(wrapper.vm.isoWeek).toEqual(false)
    expect(wrapper.get('[data-test="week"]').find('p').text()).toMatch('Sun')
    wrapper.unmount()
  })
  it('date is changed', async () => {
    const wrapper = mount(DatePicker, {
      props: { date: new Date(2024, 1) }
    })
    await flushPromises()
    expect(wrapper.emitted().day[0]).toEqual([1])
    expect(
      Number(
        wrapper
          .get('[data-test="day"]')
          .findAll('div')[18]
          .findAll('div')[4]
          .text()
      )
    ).toEqual(29)
    await wrapper.setProps({ date: new Date(2022, 2, 2) })
    await flushPromises()
    expect(
      Number(
        wrapper
          .get('[data-test="day"]')
          .findAll('div')[18]
          .findAll('div')[4]
          .text()
      )
    ).toEqual(31)
    await flushPromises()
    expect(wrapper.emitted().day[1]).toEqual([2])
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
})
