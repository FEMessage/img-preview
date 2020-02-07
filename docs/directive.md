通过指令使用

```vue
<template>
  <div>
    <h3>默认指令</h3>
    <img v-img-preview width="100px" src="https://deepexi.oss-cn-shenzhen.aliyuncs.com/deepexi-services/logo_Deepexi_640x640.jpg" >

    <h3>带参数的指令:预览时为 webp 图</h3>
    <p>PS: 这个参数是 html 的 attribute</p>
    <img
      v-img-preview:webp-src
      width="100px"
      src="https://deepexi.oss-cn-shenzhen.aliyuncs.com/deepexi-services/logo_Deepexi_640x640.jpg"
      webp-src="https://deepexi.oss-cn-shenzhen.aliyuncs.com/deepexi-services/logo_Deepexi_640x640.jpg?x-oss-process=image/format,webp"
    >
  </div>
</template>
```
