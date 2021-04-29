import { componentStory } from './util/helpers'

// Import the component here bellow
import vueComponent from '@/components/CTButton.vue'

const { component, asDefault, story } = componentStory(vueComponent);

export default component
export { asDefault }
