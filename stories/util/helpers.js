import createKnobs from '../util/create-knobs'


// Returns a function to generate stories
export const storyFactory = (components) => {
  return opts => {
    // If user supplied a string,
    // create an object with it
    if (typeof opts === 'string') {
      opts = { template: opts }
    }

    return {
      components,
      ...opts,
    }
  }
}

/**
 *  Create a component template with its props
 *  @param component {VueComponent} 
 *  @param content {String} The component slot/content, as a string
 *  @return {String} The component template as a string
 */
export const createTemplate = (component, content = '') => {
  let props = '';
  Object.keys(component.props).forEach(name => {
    props += ` :${name}="${name}"`
  })

  return `<${component.name}${props}>${content}</${component.name}>`
}

/**
 *  Create a default story given a component
 *  @param component {VueComponent} 
 *  @param content {String} The component slot/content, as a string
 *  @return {Object} The component story and 
 */
export const componentStory = (component, content) => {
  const componentObject = {};
  componentObject[component.name] = component;

  const story = storyFactory(componentObject)

  return {
    story,
    component: { title: component.name },
    asDefault: () => story({
      props: createKnobs(component),
      template: createTemplate(component, content),
    })
  }
}

export { createKnobs } 
