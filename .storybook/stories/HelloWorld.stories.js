// A helper function to faciliate the generation of stories
import { storyFactory } from '../util/helpers'

// Components
import HelloWorld from '../../src/components/HelloWorld.vue'

// Generate a factory function
// Will automatically bootstrap the story components
const story = storyFactory({
  // Can pass in an import function
  // MyComponent: () => import('path/to/component'),
  // Or explicitly import and use
  HelloWorld,
})

export default { title: 'HelloWorld' }

export const asDefault = () => story({
  props: {},
  template: `<HelloWorld></HelloWorld>`,
})

// export const withAnotherComponent = () => story({
//   template: `
//     <my-component>
//       <HelloWorld></HelloWorld>
//     </my-component>
//   `,
// })