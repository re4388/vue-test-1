import {
    shallowMount
} from '@vue/test-utils'
import Foo from '@/components/Foo.vue'

// define a factory func that can take an object in, as arguments, 
// and return a func we need
const factory = (values = {}) => {
    return shallowMount(Foo, {
        data() {
            return {
                ...values
            }
        }
    })
}

describe('Foo', function () {
    it('renders a welcome message', () => {
        const wrapper = factory()
        expect(wrapper.find('.message').text()).toEqual('Hello World')
    })

    it('no error when username is >= 7 characters', () => {
        const wrapper = factory({
            username: ' '.repeat(7)
        })
        expect(wrapper.find('.error').exists).toBeTruthy()
    })

    it('error when username < 7 characters', () => {
        const wrapper = factory({
            username: '123456'
        })
        expect(wrapper.find('.error').exists).toBeTruthy()
    })
})