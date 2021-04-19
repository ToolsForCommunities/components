// Globally export all components. Components are registered using the
// PascalCased version of their folder and file name.
// i.e.
// components/MainButton      -> <MainButton />
// components/layout/Default  -> <LayoutDefault />

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the current directory
  '.',
  // Look in subdirectories
  true,
  // Only include .vue files
  /[\w-]+\.vue$/,
);

const components = {};

// For each matching file name...
requireComponent.keys().forEach((fileName) => {
  // Get the component config
  const componentConfig = requireComponent(fileName);
  // Get the PascalCase version of the component name
  const componentName = fileName
    // Remove the "./" from the beginning
    .replace(/^\.\//, '')
    // Remove the file extension from the end
    .replace(/\.\w+$/, '')
    // Split up slashes
    .split('/')
    // Upper case
    .map((slash) => slash.charAt(0).toUpperCase() + slash.slice(1))
    // Concatenated
    .join('');

    components[componentName] = componentConfig.default || componentConfig;
});

export default components;
