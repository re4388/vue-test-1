import {
  mount
} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('prop.message可以正確的作用', () => {
    const message = 'mock'
    const wrapper = mount(HelloWorld, {
      propsData: {
        message
      }
    })
    expect(wrapper.text())
      .toMatch(message)
  })
})

// test if "HelloWorld.vue" is a Vue instance
describe('HelloWorld.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.isVueInstance())
      .toBeTruthy()
  })
})
