import { shallowMount } from '@vue/test-utils'
import App from '../../src/App'

describe('App.test.js', function () {
  let cmp;
  beforeEach(() => {
    cmp = shallowMount(App, {
      // Create a shallow instance of the component
        data: {
          messages: ["OK"]
        }
      });
  });

  it('equals message to ["Ben Hu", "Sabrina"]', () => {
    expect(cmp.vm.messages)
      .toEqual(["Ben Hu", "Sabrina"]);
  })

  it('has the expected html structure', () => {
    expect(cmp.element)
      .toMatchSnapshot()
  })
})