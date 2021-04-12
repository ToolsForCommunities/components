import components from "./components";

const ComponentLibrary = {
  install(Vue, { vuetify }) {
    if (!vuetify) {
      console.log('Vuetify not passed. Something is not working...');
    }

    // Install vuetify...
    Vue.use(vuetify);


    // Install the components
    console.log('YEY! I am installling a pluginnn!!');
    Object.keys(components).forEach(name => {
      Vue.component(name, components[name]);
    });
    // Vue.component('HelloWorld', HelloWorld);
  },
};

export default ComponentLibrary;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary)
}

// export { HelloWorld };
