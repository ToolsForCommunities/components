import { select, boolean } from '@storybook/addon-knobs'
import { storyFactory, createKnobs, createTemplate } from './util/helpers'

// Import the component here bellow
import CTNavigationButton from '@/components/CTNavigation/Button.vue'

const story = storyFactory({ CTNavigationButton });

export default { title: 'CTNavigation' }

export const navigationButton = () => story({
  props: {
    // ...createKnobs(CTNavigationButton),
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
    <CTNavigationButton
      :size="size"
      :active="active"
      :icon="icon"
    >
      Hey, dude
    </CTNavigationButton>
  </v-row>`
})
