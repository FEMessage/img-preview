import {storiesOf} from '@storybook/vue'
import Basic from './base.vue'

storiesOf('img-preview', module).add('basic usage', () => ({
  components: {Basic},
  template: `<basic/>`
}))
