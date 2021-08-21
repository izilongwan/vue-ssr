import Vue from 'vue'

import App from './App.vue'
import createRouter from './router'
import createStore from './store'

export default () => {
  const router = createRouter(),
        store = createStore()

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return {
    app,
    store,
    router,
  }
}