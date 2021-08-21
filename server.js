const VueServerRenderer = require('vue-server-renderer'),
      fs = require('fs'),
      Koa = require('koa'),
      KoaRouter = require('koa-router'),
      KoaStatic = require('koa-static')


const server = new Koa(),
      router = new KoaRouter();

const template = fs.readFileSync('./public/index-ssr.html', 'utf-8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const renderer = VueServerRenderer.createBundleRenderer(serverBundle, {
  template,
  clientManifest,
})

const render = async (ctx) => {
  const context = {
    url: ctx.url,
    title: 'SSR',
      metas: `
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="descriptor" keywords="ssr, vue" />
    `
  }

  const html = await renderer.renderToString(context);

  ctx.body = html;
}

router.get('(.*)', render)

server.use(KoaStatic(__dirname + '/dist'))
      .use(router.routes(), router.allowedMethods())

server.listen(3001, () => console.log('RUNNING'));
