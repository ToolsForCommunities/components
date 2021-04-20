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
 *  @return {String} The component template as a string
 */
export const createTemplate = (component) => {
  let props = '';
  Object.keys(component.props).forEach(name => {
    props += ` :${name}="${name}"`
  })

  return `<${component.name}${props}></${component.name}>`
}

/**
 *  Create a default story given a component
 *  @param component {VueComponent} 
 *  @return {Object} The component story and 
 */
export const componentStory = (component) => {
  const componentObject = {};
  componentObject[component.name] = component;

  const story = storyFactory(componentObject)

  return {
    story,
    component: { title: component.name },
    asDefault: () => story({
      props: createKnobs(component),
      template: createTemplate(component),
    })
  }
}

export { createKnobs } 
