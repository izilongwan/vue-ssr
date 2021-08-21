import createApp from './app'

export default async (ctx) => {
  const { app, router, store } = createApp()

  router.push(ctx.url)

  ctx.meta = app.$meta()

  await new Promise(router.onReady.bind(router))

  ctx.rendered = () => {

    //在应用渲染完成以后，router加载完之后,也就是serverPrefetch生命周期执行完毕,服务端Vuex容器中已经填充了状态数据
    // Renderer 会把 context.state 数据对象内联到页面模板中
    // 最终发送给客户端的页面中会包含一段脚本：window.__INITIAL_STATE__ = context.state
    //也就是说会把预取的state放到window.__INITIAL_STATE__上
    // 客户端就要把页面中的 window.__INITIAL_STATE__ 拿出来填充到客户端 store 容器中
    //renderer.renderToString 会自动把context.state注入window.__INITIAL_STATE__
    ctx.state = store.state
  }

  return app;
}
