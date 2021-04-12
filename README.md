# components

This is the Vue components library for all the Community Tools projects. It extends vuetify, so it is super easy to use, and super robust.

To view the components, we use Storybook.

# Developer guide

This part of the guide is only for those ones who are going to update the component library. If you're only going to use it, just go one step down ;)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve:storybook
```

### Compiles and minifies for production
```
npm run build:lib
```

### Build the storybook docs for ghpages
```
npm run build:storybook
```

### Lints and fixes files
```
npm run lint
```

# User guide

If you are going to use this library, this is the point you're looking for. For now, it's not uploaded to NPM, so you have to download it as a local dependency. I know, it's not fancy. But no worry, it's not difficult.

First at all, you **WILL** need to install vuetify. Just go to their docs, or run `vue add vuetify`. 

Just clone the repository, import it, and initialize it with your vuetify instance as a param (to use the theme).

*~/project/src/main.js*
```javascript
import Vue from 'vue'
import vuetify from './plugins/vuetify';

/* eslint-disable-next-line */
import components from '../../components';

Vue.use(components, {
	vuetify
});
```

Now, you can use any library component in your app.

# Documentation

As we use Storybook, it is our main documentation source. 

The current docs are in the `docs` folder, as a web project with a static storybook site. It's also deployed in Github Pages:

https://toolsforcommunities.github.io/components/
