import { describe, it, expect } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import CalendarNumbers from '@/components/DatePicker/components/CalendarNumbers.vue'
import type { TCalendarArr } from '@/components/DatePicker/utils/UtilTypes'

const rightData: TCalendarArr = [
  [
    { id: 1, value: 28 },
    { id: 8, value: 5 },
    { id: 15, value: 12 },
    { id: 22, value: 19 },
    { id: 29, value: 26 },
    { id: 36, value: 2 }
  ],
  [
    { id: 2, value: 29 },
    { id: 9, value: 6 },
    { id: 16, value: 13 },
    { id: 23, value: 20 },
    { id: 30, value: 27 },
    { id: 37, value: 3 }
  ],
  [
    { id: 3, value: 30 },
    { id: 10, value: 7 },
    { id: 17, value: 14 },
    { id: 24, value: 21 },
    { id: 31, value: 28 },
    { id: 38, value: 4 }
  ],
  [
    { id: 4, value: 1 },
    { id: 11, value: 8 },
    { id: 18, value: 15 },
    { id: 25, value: 22 },
    { id: 32, value: 29 },
    { id: 39, value: 5 }
  ],
  [
    { id: 5, value: 2 },
    { id: 12, value: 9 },
    { id: 19, value: 16 },
    { id: 26, value: 23 },
    { id: 33, value: 30 },
    { id: 40, value: 6 }
  ],
  [
    { id: 6, value: 3 },
    { id: 13, value: 10 },
    { id: 20, value: 17 },
    { id: 27, value: 24 },
    { id: 34, value: 31 },
    { id: 41, value: 7 }
  ],
  [
    { id: 7, value: 4 },
    { id: 14, value: 11 },
    { id: 21, value: 18 },
    { id: 28, value: 25 },
    { id: 35, value: 1 },
    { id: 42, value: 8 }
  ]
]
const nullData = [
  [
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null }
  ],
  [
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null }
  ],
  [
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null }
  ],
  [
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null }
  ],
  [
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null }
  ],
  [
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null }
  ],
  [
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null },
    { id: 0, value: null }
  ]
]
const rightDate = { id: 7, value: new Date(2024, 4, 4) }
const rightSlots = [3, 8]
describe('CalendarNumbers', () => {
  it('test number 28 previous month in calendar component', async () => {
    const wrapper = mount(CalendarNumbers, {
      props: {
        arrays: rightData,
        dateChosen: rightDate,
        emptySlots: rightSlots,
        daysAct: 31
      }
    })
    await flushPromises()
    await wrapper
      .get('[data-test="day"]')
      .findAll('div')[0]
      .findAll('div')[0]
      .trigger('click')
    expect(wrapper.emitted().date[0]).toEqual([
      { id: 1, value: new Date(2024, 3, 28) }
    ])
    wrapper.unmount()
  })
  it('test number 29 previous month in calendar component', async () => {
    const wrapper = mount(CalendarNumbers, {
      props: {
        arrays: rightData,
        dateChosen: rightDate,
        emptySlots: rightSlots,
        daysAct: 31
      }
    })
    await flushPromises()
    await wrapper
      .get('[data-test="day"]')
      .findAll('div')[7]
      .findAll('div')[0]
      .trigger('click')
    expect(wrapper.emitted().date[0]).toEqual([
      { id: 2, value: new Date(2024, 3, 29) }
    ])
    wrapper.unmount()
  })
  it('test number 30 previous month in calendar component', async () => {
    const wrapper = mount(CalendarNumbers, {
      props: {
        arrays: rightData,
        dateChosen: rightDate,
        emptySlots: rightSlots,
        daysAct: 31
      }
    })
    await flushPromises()
    await wrapper
      .get('[data-test="day"]')
      .findAll('div')[14]
      .findAll('div')[0]
      .trigger('click')
    expect(wrapper.emitted().date[0]).toEqual([
      { id: 3, value: new Date(2024, 3, 30) }
    ])
    wrapper.unmount()
  })
  it('test number 1 next month in calendar component', async () => {
    const wrapper = mount(CalendarNumbers, {
      props: {
        arrays: rightData,
        dateChosen: rightDate,
        emptySlots: rightSlots,
        daysAct: 31
      }
    })
    await flushPromises()
    await wrapper
      .get('[data-test="day"]')
      .findAll('div')[42]
      .findAll('div')[4]
      .trigger('click')
    expect(wrapper.emitted().date[0]).toEqual([
      { id: 35, value: new Date(2024, 5, 1) }
    ])
    wrapper.unmount()
  })
  it('test number 2 next month in calendar component', async () => {
    const wrapper = mount(CalendarNumbers, {
      props: {
        arrays: rightData,
        dateChosen: rightDate,
        emptySlots: rightSlots,
        daysAct: 31
      }
    })
    await flushPromises()
    await wrapper
      .get('[data-test="day"]')
      .findAll('div')[0]
      .findAll('div')[5]
      .trigger('click')
    expect(wrapper.emitted().date[0]).toEqual([
      { id: 36, value: new Date(2024, 5, 2) }
    ])
    wrapper.unmount()
  })
  it('test number 3 next month in calendar component', async () => {
    const wrapper = mount(CalendarNumbers, {
      props: {
        arrays: rightData,
        dateChosen: rightDate,
        emptySlots: rightSlots,
        daysAct: 31
      }
    })
    await flushPromises()
    await wrapper
      .get('[data-test="day"]')
      .findAll('div')[7]
      .findAll('div')[5]
      .trigger('click')
    expect(wrapper.emitted().date[0]).toEqual([
      { id: 37, value: new Date(2024, 5, 3) }
    ])
    wrapper.unmount()
  })
  it('test number 4 next month in calendar component', async () => {
    const wrapper = mount(CalendarNumbers, {
      props: {
        arrays: rightData,
        dateChosen: rightDate,
        emptySlots: rightSlots,
        daysAct: 31
      }
    })
    await flushPromises()
    await wrapper
      .get('[data-test="day"]')
      .findAll('div')[14]
      .findAll('div')[5]
      .trigger('click')
    expect(wrapper.emitted().date[0]).toEqual([
      { id: 38, value: new Date(2024, 5, 4) }
    ])
    wrapper.unmount()
  })
  it('test number 5 next month in calendar component', async () => {
    const wrapper = mount(CalendarNumbers, {
      props: {
        arrays: rightData,
        dateChosen: rightDate,
        emptySlots: rightSlots,
        daysAct: 31
      }
    })
    await flushPromises()
    await wrapper
      .get('[data-test="day"]')
      .findAll('div')[21]
      .findAll('div')[5]
      .trigger('click')
    expect(wrapper.emitted().date[0]).toEqual([
      { id: 39, value: new Date(2024, 5, 5) }
    ])
    wrapper.unmount()
  })
  it('test number 6 next month in calendar component', async () => {
    const wrapper = mount(CalendarNumbers, {
      props: {
        arrays: rightData,
        dateChosen: rightDate,
        emptySlots: rightSlots,
        daysAct: 31
      }
    })
    await flushPromises()
    await wrapper
      .get('[data-test="day"]')
      .findAll('div')[28]
      .findAll('div')[5]
      .trigger('click')
    expect(wrapper.emitted().date[0]).toEqual([
      { id: 40, value: new Date(2024, 5, 6) }
    ])
    wrapper.unmount()
  })
  it('test number 7 next month in calendar component', async () => {
    const wrapper = mount(CalendarNumbers, {
      props: {
        arrays: rightData,
        dateChosen: rightDate,
        emptySlots: rightSlots,
        daysAct: 31
      }
    })
    await flushPromises()
    await wrapper
      .get('[data-test="day"]')
      .findAll('div')[35]
      .findAll('div')[5]
      .trigger('click')
    expect(wrapper.emitted().date[0]).toEqual([
      { id: 41, value: new Date(2024, 5, 7) }
    ])
    wrapper.unmount()
  })
  it('test number 8 next month in calendar component', async () => {
    const wrapper = mount(CalendarNumbers, {
      props: {
        arrays: rightData,
        dateChosen: rightDate,
        emptySlots: rightSlots,
        daysAct: 31
      }
    })
    await flushPromises()
    await wrapper
      .get('[data-test="day"]')
      .findAll('div')[42]
      .findAll('div')[5]
      .trigger('click')
    expect(wrapper.emitted().date[0]).toEqual([
      { id: 42, value: new Date(2024, 5, 8) }
    ])
    wrapper.unmount()
  })
})
