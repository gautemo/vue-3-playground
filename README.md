# vue-3-playground
Vue 3 Playground

## Resources
* [GitHub - vue-next](https://github.com/vuejs/vue-next) - Repository of Vue 3
* [Roadmap](https://github.com/vuejs/vue/projects/6)
* [RFCs](https://github.com/vuejs/rfcs) - Request for comments, usful to find breaking changes
* [GitHub - vue-router-next](https://github.com/vuejs/vue-router-next) - Repository for Vue router for Vue 3
* [Composition API](https://vue-composition-api-rfc.netlify.com/) - Documentation
* [Template explorer](https://vue-next-template-explorer.netlify.com/)
* [https://github.com/vuejs/composition-api](https://github.com/vuejs/composition-api) - for Composition API only

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
[Vue 3: Start Using it Today](https://www.vuemastery.com/blog/vue-3-start-using-it-today/)
[Exciting new features in Vue 3](https://vueschool.io/articles/vuejs-tutorials/exciting-new-features-in-vue-3/)
[Portal – a new feature in Vue 3](https://vueschool.io/articles/vuejs-tutorials/portal-a-new-feature-in-vue-3/)

## Videos
* [State of the Vuenion](https://www.vuemastery.com/conferences/vueconf-us-2020/state-of-the-vuenion/)
* [Evan You - State of the Vuenion 2020 -Vue.js Amsterdam 2020](https://www.youtube.com/watch?v=3COrQGxnPv0&feature=youtu.be)
* [Design Principles of Vue 3.0 by Evan You](https://www.youtube.com/watch?v=WLpLYhnGqPA)
* [dotJS 2019 - Evan You - State of Components](https://www.youtube.com/watch?v=bOdfo5SmQc8)
* [Evan You - What's Coming in Vue 3 0](https://www.youtube.com/watch?v=E43SqPADf3k)
* [Gregg Pollack - Introduction into the Composition API - Vue.js Amsterdam](https://www.youtube.com/watch?v=FGKpOLG34xE)
* [Thorsten Lünborg - Composition API Best Practices - Vue.js Amsterdam 2020](https://www.youtube.com/watch?v=6D58SI9P-aU)