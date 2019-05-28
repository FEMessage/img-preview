<template>
  <div class="img-preview">
    <div class="dialog-mask" v-if="url"></div>
    <transition name="dialog-fade">
      <div class="dialog-box" v-if="url" @click="handleClose">
        <div class="dialog-img-box" :style="{width: `${size.width}px`, height: `${size.height}px`, transform: `translate(-50%, -50%) scale(${size.scale})`}">
          <img class="dialog-img" :src="url">
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import computedSize from './utils'

const KEY_CODE_ESC = 27

export default {
  name: 'ImgPreview',
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
  mounted() {
    document.addEventListener('keyup', this.handelKeyUp)
  },
  destroyed() {
    document.removeEventListener('keyup', this.handelKeyUp)
  },
  watch: {
    url(val) {
      if (val in this.cache) {
        this.size = this.cache[val]
      } else {
        const img = new Image()
        img.src = val
        img.onload = () => {
          this.size = this.cache[val] = computedSize(img)
        }
      }
    }
  },
  data() {
    return {
      size: {},
      cache: {}
    }
  },
  methods: {
    handleClose() {
      this.$emit('input', '')
      /**
       * 预览窗口关闭事件
       * @event close
       */
      this.$emit('close')
    },
    handelKeyUp(event) {
      switch (event.keyCode) {
        case KEY_CODE_ESC:
          this.handleClose()
          break
      }
    }
  }
}
</script>

<style lang="stylus">
.img-preview {
  .dialog-mask {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.65);
    height: 100%;
    z-index: 2100;
  }
  .dialog-box {
    position: fixed;
    overflow: hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2200;
    outline: 0;
    cursor: zoom-out;
  }
  .dialog-img-box {
    position: relative;
    top: 50%;
    left: 50%;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0,0,0,.15);
    .dialog-img {
      width: 100%;
    }
  }
  // 弹窗过渡动画
  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: scale(0.6);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes fade-out {
    0% {
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.6);
    }
  }
  .dialog-fade-enter-active,
  .dialog-fade-leave-active {
    animation: fade-in 100ms linear;
  }
  .dialog-fade-leave,
  .dialog-fade-leave-to {
    animation: fade-out 300ms;
  }
}
</style>
