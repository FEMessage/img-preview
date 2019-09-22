基本用法

```vue
<template>
  <div class="basic">
    <img width="100px" v-for="(url, index) in list" :key="index" :src="url" @click="preview(url)">
    <img-preview
      v-model="previewUrl"
      :enableScale="enableScale"
      :enableGrab="enableGrab"
      :maxScale="3">
    </img-preview>
  </div>
</template>
<script>
export default {
  name: 'basic',
  data() {
    return {
      previewUrl: '',
      enableScale: true,
      enableGrab: true,
      list: [
        '\/\/deepexi-moby.oss-cn-shenzhen.aliyuncs.com/undefinedWechatIMG7-1544429373120.jpeg',
        'https:\/\/deepexi.oss-cn-shenzhen.aliyuncs.com/deepexi-services/logo_Deepexi_640x640.jpg'
      ]
    }
  },
  methods: {
    preview(url) {
      this.previewUrl = url
    }
  }
}
</script>
```
