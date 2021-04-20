import Vuetify from 'vuetify/lib';

import components from "./components";

const ComponentLibrary = {
  install(Vue, settings) {
    // If given, use settings defined vuetify
    if (settings && settings.vuetify) {
      Vue.use(settings.vuetify)
    } else {
      Vue.use(Vuetify);
    }

    // Install the components
    Object.keys(components).forEach(name => {
      Vue.component(name, components[name]);
    });
  },
};

export default ComponentLibrary;

// Seen in vuetify package. Unsure if we need it.
// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.use(ComponentLibrary)
// }
