// import Vue from "vue";
// import vuetify from './plugins/vuetify';

import HelloWorld from "./components/HelloWorld.vue";


// const Components = {
//   HelloWorld,
// };

// Object.keys(Components).forEach(name => {
//   Vue.component(name, Components[name]);
// });

// export default Components;

const ComponentLibrary = {
  install(Vue, { vuetify }) {
    if (!vuetify) {
      console.log('Vuetify not passed. Something is not working...');
    }

    // Install vuetify...
    Vue.use(vuetify);

    // Install the plugin
    console.log('YEY! I am installling a pluginnn!!');
    Vue.component('HelloWorld', HelloWorld);
  },
};

export default ComponentLibrary;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary)
}

// export { HelloWorld };
