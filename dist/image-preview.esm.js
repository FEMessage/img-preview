function computedSize(img) {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight

  var width = img.width,
    height = img.height

  // scale为图片的缩放比例
  // 先计算宽度比例，然后用宽度比例*图片高度去对比窗口y轴

  var scale = x / width
  scale = scale * height > y ? y / height : scale

  if (height < y && width < x) {
    // 图片原始宽高都小于窗口宽高时，缩放比例为1
    scale = 1
  }

  var size = {
    width: width,
    height: height,
    scale: scale
  }
  return size
}

;(function() {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style'),
      css =
        '.img-preview .dialog-mask { position: fixed; top: 0; right: 0; left: 0; bottom: 0; background-color: rgba(0,0,0,0.65); height: 100%; z-index: 2100; } .img-preview .dialog-box { position: fixed; overflow: hidden; top: 0; right: 0; bottom: 0; left: 0; z-index: 2200; outline: 0; } .img-preview .dialog-img-box { position: relative; top: 50%; left: 50%; border-radius: 4px; background-color: #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.15); } .img-preview .dialog-img-box .dialog-img { width: 100%; } .img-preview .dialog-fade-enter-active, .img-preview .dialog-fade-leave-active { animation: fade-in 100ms linear; } .img-preview .dialog-fade-leave, .img-preview .dialog-fade-leave-to { animation: fade-out 300ms; } @-moz-keyframes fade-in { 0% { opacity: 0; transform: scale(0.6); } 100% { opacity: 1; transform: scale(1); } } @-webkit-keyframes fade-in { 0% { opacity: 0; transform: scale(0.6); } 100% { opacity: 1; transform: scale(1); } } @-o-keyframes fade-in { 0% { opacity: 0; transform: scale(0.6); } 100% { opacity: 1; transform: scale(1); } } @keyframes fade-in { 0% { opacity: 0; transform: scale(0.6); } 100% { opacity: 1; transform: scale(1); } } @-moz-keyframes fade-out { 0% { transform: scale(1); } 100% { opacity: 0; transform: scale(0.6); } } @-webkit-keyframes fade-out { 0% { transform: scale(1); } 100% { opacity: 0; transform: scale(0.6); } } @-o-keyframes fade-out { 0% { transform: scale(1); } 100% { opacity: 0; transform: scale(0.6); } } @keyframes fade-out { 0% { transform: scale(1); } 100% { opacity: 0; transform: scale(0.6); } } '
    style.type = 'text/css'
    if (style.styleSheet) {
      style.styleSheet.cssText = css
    } else {
      style.appendChild(document.createTextNode(css))
    }
    head.appendChild(style)
  }
})()
var Component = {
  render: function render() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      'div',
      {staticClass: 'img-preview'},
      [
        _vm.url ? _c('div', {staticClass: 'dialog-mask'}) : _vm._e(),
        _vm._v(' '),
        _c('transition', {attrs: {name: 'dialog-fade'}}, [
          _vm.url
            ? _c(
                'div',
                {staticClass: 'dialog-box', on: {click: _vm.handleClose}},
                [
                  _c(
                    'div',
                    {
                      staticClass: 'dialog-img-box',
                      style: {
                        width: _vm.size.width + 'px',
                        height: _vm.size.height + 'px',
                        transform:
                          'translate(-50%, -50%) scale(' + _vm.size.scale + ')'
                      }
                    },
                    [
                      _c('img', {
                        staticClass: 'dialog-img',
                        attrs: {src: _vm.url}
                      })
                    ]
                  )
                ]
              )
            : _vm._e()
        ])
      ],
      1
    )
  },
  staticRenderFns: [],
  name: 'img-preview',
  model: {
    prop: 'url'
  },
  props: {
    /**
     * 预览图片的url, 传值则弹出预览窗口
     */
    url: {
      type: String,
      default: ''
    }
  },
  watch: {
    url: function url(val) {
      var _this = this

      var img = new Image()
      img.src = val

      img.onload = function() {
        _this.size = computedSize(img)
      }
    }
  },
  data: function data() {
    return {
      size: {}
    }
  },

  methods: {
    handleClose: function handleClose() {
      this.$emit('input', '')
    }
  }
}

// Import vue component

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('ImgPreview', Component)
}

// Create module definition for Vue.use()
var plugin = {
  install: install

  // To auto-install when vue is found
}
var GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default Component
export {install}
