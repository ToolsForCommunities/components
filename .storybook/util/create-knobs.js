// Availabre knobs:
// text, boolean, number, color, object, array, select, radios, optionsKnob, files, date
// https://www.npmjs.com/package/@storybook/addon-knobs
import {
  text,
  boolean,
  number,
  object,
  array
} from '@storybook/addon-knobs'

const typeKnobs = {
  String: text,
  Boolean: boolean,
  Number: number,
  Object: object,
  Array: array
}

/**
 *  Create knobs for the component props
 *  @param component {VueComponent} 
 *  @return {Object} The story props as knobs.
 */
function createKnobs(component, knobs) {
  const vueProps = Object.keys(component.props);

  const props = {};

  vueProps.forEach(name => {
    const type = component.props[name].type.name;
    const defaultValue = component.props[name].default;
    
    console.log('---')
    console.log(name)
    console.log(type)
    console.log(typeKnobs[type])
    console.log(defaultValue)
    console.log('---')

    props[name] = {
      default: typeKnobs[type](name, defaultValue)
    }
  })
  
  console.log(props);
  return props;
}


export default createKnobs;