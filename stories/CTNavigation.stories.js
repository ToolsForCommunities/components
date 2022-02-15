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
       default: select('icon', ['mdi-home', 'mdi-face', 'mdi-more', 'mdi-magnify'])
    },
    staticIcon: {
       default: boolean('staticIcon', false)
    }
  }, 
  template: `
  <v-row>
    <CTNavigationButton
      :size="size"
      :active="active"
      :icon="icon"
      :static-icon="staticIcon"
    >
      Hey, dude
    </CTNavigationButton>
  </v-row>`
})
