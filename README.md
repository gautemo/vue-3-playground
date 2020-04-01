# vue-3-playground
Vue 3 Playground

## Resources
* [GitHub - vue-next](https://github.com/vuejs/vue-next) - Repository of Vue 3
* [Roadmap](https://github.com/vuejs/vue/projects/6)
* [RFCs](https://github.com/vuejs/rfcs) - Request for comments, usful to find breaking changes
* [GitHub - vue-router-next](https://github.com/vuejs/vue-router-next) - Repository for Vue router for Vue 3
* [Composition API](https://vue-composition-api-rfc.netlify.com/) - Documentation

## Set up Vue 3
### Create project
With the normal Vue CLI
```
vue create playground
cd playground
```
To upgrade to Vue 3, it's build in the CLI but it's using the [vue-cli-plugin-vue-next](https://github.com/vuejs/vue-cli-plugin-vue-next).
```
vue add vue-next
```
Some changes are needed in [main.js](src/main.js)

### Vue router
Change router dependency to [vue-router-next](https://www.npmjs.com/package/@posva/vue-router-next)
```
npm i @posva/vue-router-next --save
```
Some changes are required on the router. See more examples other than this repo [here](https://github.com/vuejs/vue-router-next/tree/master/playground).

## Articles

## Videos