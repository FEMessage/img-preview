通过指令使用

```vue
<template>
  <div>
    <p>默认指令</p>
    <img v-img-preview width="100px" src="https://deepexi.oss-cn-shenzhen.aliyuncs.com/deepexi-services/logo_Deepexi_640x640.jpg" >

    <p>带参数的指令:预览时为 webp 图</p>
    <img
      v-img-preview:webp-src
      width="100px"
      src="https://deepexi.oss-cn-shenzhen.aliyuncs.com/deepexi-services/logo_Deepexi_640x640.jpg"
      webp-src="https://deepexi.oss-cn-shenzhen.aliyuncs.com/deepexi-services/logo_Deepexi_640x640.jpg?x-oss-process=image/format,webp"
    >
  </div>
</template>
```
