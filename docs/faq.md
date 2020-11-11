## 在 TypeScript 中指定组件的类型

```html
<script lang="ts">
// 需要引入这个
// import { ImgPreviewType } from '@femessage/img-preview'
export default {
  mounted() {
    (this.$refs.imgPreview as ImgPreviewType).src = 'url'
  },
}
</script>
```
