import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Button from '../Button.vue'

describe('Button', () => {
  it('renders slot', () => {
    const wrapper = mount(Button, {
      slots: {default: "JaButton"}
    })
    const btn = wrapper.get("button")
    expect(btn.text()).toBe('JaButton')
  })
})
