<script>
import Test from '@/component/Test'

export default {
  name: 'About',
  metaInfo: {
    title: 'About',
    meta: [
      { name: 'description', content: 'about' }
    ]
  },
  render () {
    return (
      <div class="about">
        ABOUT

        <Test />
      </div>
    )
  }
}
</script>
