import { addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import { withTemplate } from '~storybook/addon-show-vue-markup'
import { withVuetify } from '~storybook/addon-vuetify'

addDecorator(withKnobs)
addDecorator(withTemplate)
addDecorator(withVuetify)

export const parameters = {
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: false,
  },
};