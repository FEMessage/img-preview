<template>
  <div class="img-preview">
    <div class="dialog-mask" @click="handleClose" v-if="url"></div>
    <div class="button-close" @click="handleClose" v-if="url">+</div>
    <transition name="dialog-fade">
      <div class="dialog-box" v-if="url">
        <div
          ref="imgContainer"
          class="dialog-img-box"
          :class="[moving ? 'grabbing' : '', enableGrab ? 'grab' : '']"
          @wheel="enableScale && handleImgScale($event)"
          @mousedown="enableGrab && handleMouseDown($event)"
          @mousemove="enableGrab && handleMouseMove($event)"
          @mouseup="enableGrab && handleMouseUp($event)"
          @click="!enableGrab && handleClose()"
          :style="{
            width: `${size.width}px`,
            height: `${size.height}px`,
            transform: `translate(${-50 + distanceX / 10}%, ${-50 + distanceY / 10}%) scale(${size.scale})`,}"
        ></div>
      </div>
    </transition>
  </div>
</template>
<script>
import computedSize from './utils'

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
    },
    /**
     * 是否开启滚轮缩放
     */
    enableScale: {
      type: Boolean,
      default: false
    },
    /**
     * 是否开启图片拖拽
     */
    enableGrab: {
      type: Boolean,
      default: false
    },
    }
  },
  mounted() {
    document.addEventListener('keyup', this.handelKeyUp)
  },
  destroyed() {
    document.removeEventListener('keyup', this.handelKeyUp)
  },
  watch: {
    url(url) {
      if (!url) return

      // 到下一个渲染周期，imgContainer才生成
      this.$nextTick(() => {
        const {imgContainer} = this.$refs
        // 移除之前的img元素
        imgContainer.innerHTML = ''

        Promise.resolve()
          .then(() => {
            if (url in this.cache) return

            const img = new Image()
            img.className = 'dialog-img'
            img.src = url
            img.draggable = 'false'
            img.ondragstart = this.stopDrag
            return new Promise(resolve => {
              img.onload = () => resolve(computedSize(img))
            }).then(size => {
              this.cache[url] = {img, size}
            })
          })
          .then(() => {
            const {img, size} = this.cache[url]
            imgContainer.appendChild(img)
            this.size = size
          })
      })
    }
  },
  data() {
    return {
      size: {},
      cache: {},
      moving: false,
      startX: 0,
      startY: 0,
      distanceX: 0,
      distanceY: 0
    }
  },
  methods: {
    // 阻止默认拖拽事件，兼容火狐
    stopDrag(e) {
      e.preventDefault()
      return false
    },
    initPosition() {
      this.moving = false
      this.startX = 0
      this.startY = 0
      this.distanceX = 0
      this.distanceY = 0
    },
    handleMouseDown(e) {
      this.moving = true
      this.startX = e.clientX - this.distanceX
      this.startY = e.clientY - this.distanceY
    },
    handleMouseUp(e) {
      this.moving = false
    },
    handleMouseMove(e) {
      if (!this.moving) return
      this.distanceX = e.clientX - this.startX
      this.distanceY = e.clientY - this.startY
    },
    handleImgScale(e) {
      e.preventDefault()
      if (e.deltaY < 0) {
        this.size.scale += 0.1
      } else {
        if (this.size.scale <= 0.5) return
        this.size.scale -= 0.1
      }
    },
    handleClose() {
      this.$emit('input', '')
      /**
       * 预览窗口关闭事件
       * @event close
       */
      this.$emit('close')
      this.initPosition()
    },
    handelKeyUp(event) {
      if (event.key === 'Escape' && this.url) {
        this.handleClose()
      }
    }
  }
}
</script>

<style lang="stylus">
.img-preview {
  .button-close {
    position: fixed;
    top: 20px;
    right: 40px;
    transform: rotate(45deg);
    color: #D0CFD0;
    cursor: pointer;
    z-index: 2300;
    line-height: 1;
    font-size: 40px;
  }
  .dialog-mask {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.65);
    height: 100%;
    z-index: 2100;
    cursor: zoom-out;
  }
  .dialog-box {
    overflow: hidden;
    outline: 0;
    cursor: zoom-out;
  }
  .dialog-img-box {
    position: fixed;
    z-index: 2200;
    top: 50%;
    left: 50%;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    cursor: zoom-out;
    &.grab {
      cursor: grab;
    }
    &.grabbing {
      cursor: grabbing;
    }
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
