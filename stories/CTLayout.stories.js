import { boolean } from '@storybook/addon-knobs'
import { storyFactory, componentStory, createKnobs } from './util/helpers'

import CTLayoutTriplet from '@/components/CTLayout/Triplet.vue'
import CTLayoutMain from '@/components/CTLayout/Main.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  title: 'CTLayouts',
  parameters: {
    layout:'fullscreen',
  },
}

const story = storyFactory({ CTLayoutTriplet, CTLayoutMain, HelloWorld });

export const layoutTriplet = () => story({
  // Import also creteKnobs from helpers to create automatic binding
  props: createKnobs(CTLayoutTriplet), 
  layout: 'fullscreen',
  template: `
  <CTLayoutTriplet
    :app="app"
    :hide-sidebar="hideSidebar"
    :hide-aside="hideAside"
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
  </CTLayoutTriplet>`
})

export const layoutTripletMain = () => story({
  props: {
    hideAside: {
       default: boolean('hideAside', false)
    }
  }, 
  layout: 'fullscreen',
  template: `
  <v-container>
    <CTLayoutTriplet
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
    </CTLayoutTriplet>
  </v-container>`
})

export const layoutMain = () => story({
  props: {
    hideAside: {
       default: boolean('hideAside', false)
    }
  }, 
  layout: 'fullscreen',
  template: `
  <CTLayoutMain :hide-aside="hideAside">
    <div slot="sidebar">
      I'm the sidebar
    </div>

    <div slot="content" class="px-6 py-4">
      <p>I'm the main content</p>
      <HelloWorld />
      <p v-for="i in 30" :key="i">.</p>
      <p>And so the scroll works</p>
    </div>

    <div slot="aside">
      I'm lateral content
    </div>
  </CTLayoutMain>`
})

