# img-preview

图片放大预览组件

## feature

* 参考 medium 实现
* 自动适配屏幕大小
* 小图不模糊，大图不溢出屏幕

## install

```sh
yarn add @femessage/img-preview
```

## example

### 预览操作

```sh
<template>
  <img-preview v-model="previewUrl"></img-preview>
</template>
<script>
import ImgPreview from '../src/img-preview'
export default {
  name: 'example',
  components: {ImgPreview},
  data() {
    return {
      previewUrl: '//deepexi-moby.oss-cn-shenzhen.aliyuncs.com/undefined头像-1544260671963.jpg',
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

## api

`url` - 预览图片的 url, 传值则弹出预览窗口, 支持 v-model
