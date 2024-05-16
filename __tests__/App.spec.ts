import { describe, it, expect } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('Datepicker', () => {
  it('renders properly week started 1', async () => {
    const wrapper = mount(App)
    await flushPromises()
    expect(wrapper.get('[data-test="app"]').text()).toBe(
      'This is The datepicker'
    )
    expect(wrapper.get)
    wrapper.unmount()
  })
})
