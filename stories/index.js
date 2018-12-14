import {storiesOf} from '@storybook/vue'
import Basic from './base.vue'
import Close from './close.vue'

storiesOf('img-preview', module).add('basic usage', () => ({
  components: {Basic},
  template: `<basic/>`
})).add('close', () => ({
  components: {Close},
  template: `<close/>`
}))
