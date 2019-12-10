# vuex-internship-uta

## Overview Video
[Watch how to do on Vimeo - Approximate 1.5hrs ](https://vimeo.com/375279073)

## Basic Overview
Main.js is the main entry point for the app. At the top of the main.js file, you will need to import vue, app, and store.

```
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
```

The new Vue instance should be as follows:
```
new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
```

The App.vue component will use the Internship component. Internship will use the InternshipEntry component. There are no sibling components in our application, but you could easily create one and have access to the state (e.g., create a navigation component or a modal component, such as on the Show Info part).





## Project setup
```
npm install
```
To install Vuex as a dependency, you can do the following:
```
npm install vuex --save
```

This will add vuex to your dependencies in your package.json file

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
