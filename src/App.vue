<script>
export default {
  name: 'App',
  metaInfo: {
    title: 'App',
    titleTemplate: 'SSR | %s',
    meta: [
      { name: 'description', content: 'app' },
      { vmid: 1, name: 'description', content: 'app2' },
    ]
  },

  render () {
    return (
      <div id="app" class="app">
        <p><router-link to="/">/</router-link></p>
        <p><router-link to="/about">ABOUT</router-link></p>
        <p><router-link to="/demo">DEMO</router-link></p>

        <router-view />
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
.app {
  text-align: center;
}
</style>
