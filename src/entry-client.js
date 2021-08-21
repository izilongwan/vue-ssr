import createApp from './app'
import Vue from 'vue'

const { app, router, store } = createApp()

Vue.mixin({
  beforeMount () {
    const { asyncData } = this.$options
    if (asyncData) {
      // 将获取数据操作分配给 promise
      // 以便在组件中，我们可以在数据准备就绪后
      // 通过运行 `this.dataPromise.then(...)` 来执行其他任务
      this.dataPromise = asyncData({
        store: this.$store,
        route: this.$route,
        router: this.$router
      })
    }
  },

  metaInfo: {

  }
})

if (window.__INITIAL_STATE__) { //数据预取的结果会赋值给window.__INITIAL_STATE__
  store.replaceState(window.__INITIAL_STATE__) //给store赋值
}

router.onReady(() => {
  app.$mount('#app');
})
