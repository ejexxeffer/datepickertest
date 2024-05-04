import { describe, it, expect } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import DatePicker from '@/components/DatePicker/DatePicker.vue'

describe('Datepicker', () => {
  it('lang is change', async () => {
    const wrapper = mount(DatePicker, {
      props: { date: new Date(2024, 1, 1), lang: 'en' }
    })
    await flushPromises()
    expect(wrapper.get('[data-test="week"]').find('p').text()).toMatch('Mon')
    expect(
      wrapper.get('[data-test="head"]').find('div').findAll('p')[0].text()
    ).toMatch('Feb')
    await wrapper.setProps({ lang: 'ru' })
    await flushPromises()
    expect(wrapper.get('[data-test="week"]').find('p').text()).toMatch('пн')
    expect(
      wrapper.get('[data-test="head"]').find('div').findAll('p')[0].text()
    ).toMatch('февр.')
    expect(
      wrapper.get('[data-test="head"]').find('div').findAll('p')[1].text()
    ).toMatch('2024')
    wrapper.unmount()
  })
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
  it('date is changed from parent component', async () => {
    const wrapper = mount(DatePicker, {
      props: { date: new Date(2024, 1) }
    })
    await flushPromises()
    expect(wrapper.emitted().date[0]).toEqual([new Date(2024, 1)])
    //prettier-ignore
    expect(Number(wrapper.get('[data-test="day"]').findAll('div')[21].findAll('div')[4].text())).toEqual(29)
    await wrapper.setProps({ date: new Date(2022, 2, 2) })
    await flushPromises()
    //prettier-ignore
    expect(Number(wrapper.get('[data-test="day"]').findAll('div')[21].findAll('div')[4].text())).toEqual(31)
    await flushPromises()
    expect(wrapper.emitted().date[1]).toEqual([new Date(2022, 2, 2)])
    wrapper.unmount()
  })
  it('emit a day', async () => {
    const wrapper = mount(DatePicker, {
      props: { date: new Date(2024, 1) }
    })
    await flushPromises()
    expect(wrapper.emitted().date[0]).toEqual([new Date(2024, 1)])
    wrapper.unmount()
  })
  it('trigger emit and check to being changed', async () => {
    const wrapper = mount(DatePicker, {
      props: { date: new Date(2024, 1) }
    })
    await flushPromises()
    expect(wrapper.emitted().date[0]).toEqual([new Date(2024, 1)])
    await flushPromises()
    //prettier-ignore
    expect(Number(wrapper.get('[data-test="day"]').findAll('div')[0].findAll('div')[1].text())).toEqual(5)
    //prettier-ignore
    await wrapper.get('[data-test="day"]').findAll('div')[0].findAll('div')[1].trigger('click')
    expect(wrapper.emitted().date[1]).toEqual([new Date(2024, 1, 5)])
    wrapper.unmount()
  })
  it('trigger arrow and check date was changed in component', async () => {
    const wrapper = mount(DatePicker, {
      props: { date: new Date(2024, 1) }
    })
    await flushPromises()
    //prettier-ignore
    expect(Number(wrapper.get('[data-test="day"]').findAll('div')[21].findAll('div')[0].text())).toEqual(1)
    //prettier-ignore
    await wrapper.get('[data-test="head"]').findAll('button')[0].trigger('click')
    await flushPromises()
    //prettier-ignore
    expect(Number(wrapper.get('[data-test="day"]').findAll('div')[0].findAll('div')[0].text())).toEqual(1)
    wrapper.unmount()
  })
})
