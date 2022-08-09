import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Card from '../Card.vue'

describe('Card', () => {
  it('renders props default', () => {
    const wrapper = mount(Card)
    const card = wrapper.get(".ja-card")    
    expect(card.classes()).contain("ja-card--elevated")
    expect(card.find(".ja-card__header").exists()).toBe(false)
    expect(card.find(".ja-card__footer").exists()).toBe(false)
    expect(card.find(".ja-card__img").exists()).toBe(false)
    expect(card.find(".ja-card__title").exists()).toBe(false)
    expect(card.find(".ja-card__subtitle").exists()).toBe(false)
    expect(card.find(".ja-card__text").exists()).toBe(false)
  })
  it('renders props custom', () => {
    const wrapper = mount(Card, { 
      props: { 
        type: "outlined",
        disabled: true,
        imgUrl: "img-url",
        headline: "Headline",
        subhead: "Subhead",
        text: "card text"
      }
    })
    const card = wrapper.get(".ja-card")
    expect(card.get("img").element.src).toContain("img-url")
    expect(card.get(".ja-card__title").text()).toEqual("Headline")
    expect(card.get(".ja-card__subtitle").text()).toEqual("Subhead")
    expect(card.get(".ja-card__text").text()).toEqual("card text")
  })
  it('renders slot', () => {
    const wrapper = mount(Card, { 
      slots: { 
        default: '<div>Default</div>',
        header: '<div>Header</div>',
        footer: '<div>Footer</div>',
        actions: '<div>Actions</div>'
      }
    })
    expect(wrapper.find('.ja-card__header').html()).toContain('<div>Header</div>')
    expect(wrapper.find('.ja-card__footer').html()).toContain('<div>Footer</div>')
    expect(wrapper.find('.ja-card__actions').html()).toContain('<div>Actions</div>')
    expect(wrapper.find('.ja-card').html()).toContain('<div>Default</div>')
  })
})
