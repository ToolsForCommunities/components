import { boolean } from '@storybook/addon-knobs'
import { componentStory, createKnobs } from '../util/helpers'

import LayoutTriplet from '../../src/components/layout/LayoutTriplet.vue'
// import LayoutTriplet from '../../src/components/layout/LayoutTriplet.vue'

export default {
  title: 'Layouts',
  parameters: {
    layout:'fullscreen',
  },
}

const { story } = componentStory(LayoutTriplet);

export const layoutTriplet = () => story({
  // Import also creteKnobs from helpers to create automatic binding
  props: createKnobs(LayoutTriplet), 
  layout: 'fullscreen',
  template: `
  <LayoutTriplet
    :app="app"
    :hide-sidebar="hideSidebar"
    :sidebar-floating="sidebarFloating"
    :hide-aside="hideAside"
    :aside-floating="asideFloating"
    mini-sidebar
  >
    <div slot="sidebar">
      I'm the sidebar
    </div>

    <div slot="content">
      <p>I'm the main content</p>
      <p v-for="i in 30" :key="i">.</p>
      <p>And so the scroll works</p>
    </div>

    <div slot="aside">
      I'm lateral content
    </div>
  </LayoutTriplet>`
})

export const layoutTripletMain = () => story({
  props: {
    hideAside: {
       default: boolean('hideAside', false)
    }
  }, 
  layout: 'fullscreen',
  template: `
  <LayoutTriplet
    app
    mini-sidebar
    :hide-aside="hideAside"
  >
    <div slot="sidebar">
      I'm the sidebar
    </div>

    <div slot="content" class="px-6 py-4">
      <p>I'm the main content</p>
      <p v-for="i in 30" :key="i">.</p>
      <p>And so the scroll works</p>
    </div>

    <div slot="aside">
      I'm lateral content
    </div>
  </LayoutTriplet>`
})

