import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Card from '../Card.vue'

describe('Card', () => {
  it('renders props default', () => {
    const wrapper = mount(Card)
    const card = wrapper.get(".card")    
    expect(card.classes()).contain("card-filled")
    expect(card.find(".card-header").exists()).toBe(false)
    expect(card.find(".card-footer").exists()).toBe(false)
    expect(card.find("img").exists()).toBe(false)
    expect(card.find("h1").exists()).toBe(false)
    expect(card.find("h2").exists()).toBe(false)
    expect(card.find("p").exists()).toBe(false)
  })
  it('renders props custom', () => {
    const wrapper = mount(Card, { 
      props: { 
        type: "outlined",
        state: "disabled",
        imgUrl: "img-url",
        headline: "Headline",
        subhead: "Subhead",
        text: "card text"
      }
    })
    const card = wrapper.get(".card")
    expect(card.get("img").element.src).toContain("img-url")
    expect(card.get("h1").text()).toEqual("Headline")
    expect(card.get("h2").text()).toEqual("Subhead")
    expect(card.get("p").text()).toEqual("card text")
  })
  it('renders slot', () => {
    const wrapper = mount(Card, { 
      slots: { 
        default: '<div>actions</div>',
        header: '<div>Header</div>',
        footer: '<div>Footer</div>'
      }
    })
    expect(wrapper.find('.card-header').html()).toContain('<div>Header</div>')
    expect(wrapper.find('.card-footer').html()).toContain('<div>Footer</div>')
    expect(wrapper.find('.card-body').html()).toContain('<div>actions</div>')
  })
})
