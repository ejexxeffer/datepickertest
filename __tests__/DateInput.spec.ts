import { describe, it, expect } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import DateInput from '@/components/DatePicker/components/DateInput.vue'

describe('DateInput', () => {
  it('check that date is saved', async () => {
    const wrapper = mount(DateInput, {
      props: { date: new Date(2024, 1, 2), lang: 'en' }
    })
    await flushPromises()
    expect(
      wrapper.get('[data-test="head"]').find('div').findAll('p')[0].text()
    ).toMatch('Feb')
    expect(
      wrapper.get('[data-test="head"]').find('div').findAll('p')[1].text()
    ).toMatch('2024')
    await wrapper.setProps({ date: new Date(2022, 2, 2) })
    await flushPromises()
    expect(
      wrapper.get('[data-test="head"]').find('div').findAll('p')[0].text()
    ).toMatch('Mar')
    expect(
      wrapper.get('[data-test="head"]').find('div').findAll('p')[1].text()
    ).toMatch('2022')
    wrapper.unmount()
  })
  it('trigger left arrow and check date', async () => {
    const wrapper = mount(DateInput, {
      props: { date: new Date(2024, 1, 1), lang: 'en' }
    })
    await flushPromises()
    await wrapper
      .get('[data-test="head"]')
      .findAll('button')[0]
      .trigger('click')
    expect(wrapper.emitted().date[0]).toEqual([new Date(2024, 0, 1)])
    expect(
      wrapper.get('[data-test="head"]').find('div').findAll('p')[0].text()
    ).toMatch('Feb')
    expect(
      wrapper.get('[data-test="head"]').find('div').findAll('p')[1].text()
    ).toMatch('2024')
    wrapper.unmount()
  })
  it('trigger left arrow and set date bigger than previous month', async () => {
    const wrapper = mount(DateInput, {
      props: { date: new Date(2024, 2, 31), lang: 'en' }
    })
    await flushPromises()
    await wrapper
      .get('[data-test="head"]')
      .findAll('button')[0]
      .trigger('click')
    expect(wrapper.emitted().date[0]).toEqual([new Date(2024, 1, 29)])
    wrapper.unmount()
  })
  it('trigger right arrow for changin month', async () => {
    const wrapper = mount(DateInput, {
      props: { date: new Date(2024, 11, 1), lang: 'en' }
    })
    await flushPromises()
    await wrapper
      .get('[data-test="head"]')
      .findAll('button')[1]
      .trigger('click')
    expect(wrapper.emitted().date[0]).toEqual([new Date(2024, 12, 1)])
    wrapper.unmount()
  })
  it('trigger right arrow and set date bigger than previous month', async () => {
    const wrapper = mount(DateInput, {
      props: { date: new Date(2024, 0, 31), lang: 'en' }
    })
    await flushPromises()
    await wrapper
      .get('[data-test="head"]')
      .findAll('button')[1]
      .trigger('click')
    expect(wrapper.emitted().date[0]).toEqual([new Date(2024, 1, 29)])
    wrapper.unmount()
  })
  it('check that controls show', async () => {
    const wrapper = mount(DateInput, {
      props: { date: new Date(2024, 1, 1), lang: 'en', controlsIsShow: true }
    })
    await flushPromises()
    expect(
      wrapper.get('[data-test="head"]').findAll('button')[0].classes()
    ).toContain('text-cyan-600')
    expect(
      wrapper.get('[data-test="head"]').find('div').findAll('p')[0].text()
    ).toMatch('Feb')
    expect(
      wrapper.get('[data-test="head"]').find('div').findAll('p')[1].text()
    ).toMatch('2024')
    wrapper.unmount()
  })
  it('check that controls is not show', async () => {
    const wrapper = mount(DateInput, {
      props: { date: new Date(2024, 1, 1), lang: 'en', controlsIsShow: false }
    })
    await flushPromises()
    expect(
      wrapper.get('[data-test="head"]').findAll('button')[0].classes()
    ).not.toContain('text-cyan-600')
    expect(
      wrapper.get('[data-test="head"]').find('div').findAll('p')[0].text()
    ).toMatch('Feb')
    expect(
      wrapper.get('[data-test="head"]').find('div').findAll('p')[1].text()
    ).toMatch('2024')
    wrapper.unmount()
  })
  it('lang is change', async () => {
    const wrapper = mount(DateInput, {
      props: { date: new Date(2024, 1, 1), lang: 'en' }
    })
    await flushPromises()
    await wrapper.setProps({ lang: 'ru' })
    await flushPromises()
    expect(
      wrapper.get('[data-test="head"]').find('div').findAll('p')[0].text()
    ).toMatch('февр.')
    expect(
      wrapper.get('[data-test="head"]').find('div').findAll('p')[1].text()
    ).toMatch('2024')
    wrapper.unmount()
  })
})
