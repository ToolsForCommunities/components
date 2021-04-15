import { componentStory } from '../util/helpers'

// Import the component here bellow
import vueComponent from '../../src/components/HelloWorld.vue'

const { component, asDefault, story } = componentStory(vueComponent);

export default component
export { asDefault }

/* 
// To create custom stories for the component, use this template:

export const asStatic = () => story({
  // Import also creteKnobs from helpers to create automatic binding
  // props: createKnobs(vueComponent),	
  props: {},
  template: `
  <HelloWorld
  	msg="Static content"
  >
  	Oh, this is so easy!
  </HelloWorld>`
})
*/
