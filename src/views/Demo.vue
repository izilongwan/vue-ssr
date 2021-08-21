<script>
export default {
  name: 'Demo',
  metaInfo: {
    title: 'Demo',
    meta: [
      { name: 'description', content: 'demo' },
      { vmid: 1, name: 'description', content: 'demo2' },
    ]
  },
  data () {
    return {
      count: 0
    }
  },

  methods: {
    handleCount (count) {
      this.count = this.count + count;
    }
  },

  render () {
    return (
      <div class="demo">
        <button onClick={ () => this.handleCount(1) }>+</button>
        <span>{ this.count }</span>
        <button onClick={ () => this.handleCount(-1) }>-</button>
      </div>
    )
  }
}
</script>
