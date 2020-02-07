import Component from './img-preview.vue'

const previewDirective = {}
previewDirective.install = Vue => {
  if (Vue.prototype.$isServer) return

  const Preview = Vue.extend(Component)

  const togglePreview = (el, url) => {
    Vue.nextTick(() => {
      el.instance.url = url
      document.body.appendChild(el.preview)
    })
  }

  Vue.directive('img-preview', {
    bind(el) {
      const preview = new Preview({el})

      preview.$on('input', url => {
        togglePreview(el, url)
      })

      el.instance = preview
      el.preview = preview.$el

      el.style.cursor = 'zoom-in'

      el.addEventListener('click', () => {
        togglePreview(el, el.getAttribute('src'))
      })
    },

    unbind(el) {
      el.instance.$destory()
    }
  })
}

export default previewDirective
