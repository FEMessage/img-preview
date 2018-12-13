<template>
  <div class="close">
    <img width="100px" :src="url" @click="preview(url)">
    <img-preview v-model="previewUrl" @close="close"></img-preview>
  </div>
</template>

<script>
import ImgPreview from '../src/img-preview'
export default {
  name: "close",
  components: {ImgPreview},
  data () {
    return {
      url: '//deepexi-moby.oss-cn-shenzhen.aliyuncs.com/undefined头像-1544260671963.jpg',
      previewUrl: ''
    }
  },
  methods: {
    preview (url) {
      this.previewUrl = url
    },
    close () {
      alert('关闭了')
    }
  }
}
</script>
