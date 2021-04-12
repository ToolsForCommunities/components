import components from "./components";

const ComponentLibrary = {
  install(Vue, { vuetify }) {
    if (!vuetify) {
      console.warn('Vuetify not passed. Components not loaded');
      return false;
    }

    // Install vuetify...
    Vue.use(vuetify);

    // Install the components
    Object.keys(components).forEach(name => {
      Vue.component(name, components[name]);
    });
  },
};

export default ComponentLibrary;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary)
}

// export { HelloWorld };
