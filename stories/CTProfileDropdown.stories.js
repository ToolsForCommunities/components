import { text } from '@storybook/addon-knobs'
import { storyFactory, createKnobs, createTemplate } from './util/helpers'

// Import the component here bellow
import CTProfileDropdown from '@/components/CTProfileDropdown.vue'

const story = storyFactory({ CTProfileDropdown });

export default { title: 'CTProfileDropdown' }

export const asDefault = () => story({
  props: {
    // ...createKnobs(CTProfileDropdown),
    pic: {
       default: text('pic', 'https://cdn.vuetifyjs.com/images/lists/1.jpg')
    },
    name: {
       default: text('name', 'Paco Santos')
    },
    // menu: {
    //    default: object('menu', [
    //     { name: 'Whatever' },
    //     { name: 'Logout' },
    //   ])
    // },
  }, 
  template: `
  <v-row>
    <CTProfileDropdown
      :pic="pic"
      :name="name"
      :menu="[{ name: 'Option 1' }, { name: 'Logout' }]"
    >
    </CTProfileDropdown>
  </v-row>`
})

