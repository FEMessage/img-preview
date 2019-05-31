```vue
<template>
  <div class="close">
    <img width="100px" :src="url" @click="preview(url)">
    <img-preview v-model="previewUrl" @close="close"></img-preview>
  </div>
</template>

<script>
export default {
  name: "close",
  data () {
    return {
      url: 'https://deepexi.oss-cn-shenzhen.aliyuncs.com/deepexi-services/logo_Deepexi_640x640.jpg',
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
```
