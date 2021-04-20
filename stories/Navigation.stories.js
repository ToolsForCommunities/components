import { select, boolean } from '@storybook/addon-knobs'
import { storyFactory, createKnobs, createTemplate } from './util/helpers'

// Import the component here bellow
import NavigationButton from '@/components/navigation/Button.vue'

const story = storyFactory({ NavigationButton });

export default { title: 'Navigation' }

export const navigationButton = () => story({
  props: {
    // ...createKnobs(NavigationButton),
    active: {
       default: boolean('active', false)
    },
    size: {
       default: select('size', ['', 'large', 'small', 'tab'])
    },
    icon: {
       default: select('icon', ['mdi-home', 'mdi-face', 'mdi-more'])
    }
  }, 
  template: `
  <v-row>
    <NavigationButton
      :size="size"
      :active="active"
      :icon="icon"
    >
      Hey, dude
    </NavigationButton>
  </v-row>`
})
