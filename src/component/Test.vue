<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Test',

  asyncData ({ store }) {
    console.log('[SET]'),
    store.dispatch('setCount', 10)
  },

  computed: {
    ...mapState(['count']),
    ...mapState('list', ['name1'])
  },

  methods: {
    ...mapActions(['setCount']),

    handleClick () {
      this.setCount(this.count + 1);
    }
  },

  serverPrefetch () { // 服务端周期函数
    this.setCount(1);
  },

  render () {
    return (
      <p onClick={ this.handleClick }>
        { this.count }
      </p>
    )
  },
}
</script>
