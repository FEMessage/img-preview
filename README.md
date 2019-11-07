# img-preview

![](https://cdn.nlark.com/yuque/0/2019/svg/224563/1561960140452-758467ac-5389-4fed-a261-9c2b16dccbd6.svg#align=left&display=inline&height=20&originHeight=20&originWidth=90&size=0&status=done&width=90) [![](https://img.shields.io/npm/dm/@femessage/img-preview.svg#align=left&display=inline&height=20&originHeight=20&originWidth=140&status=done&width=140)](https://www.npmjs.com/package/@femessage/img-preview) ![](https://img.shields.io/npm/v/@femessage/img-preview.svg#align=left&display=inline&height=20&originHeight=20&originWidth=80&status=done&width=80) [![](https://img.shields.io/npm/l/@femessage/img-preview.svg#align=left&display=inline&height=20&originHeight=20&originWidth=78&status=done&width=78)](https://github.com/FEMessage/img-preview/blob/master/LICENSE) ![](https://img.shields.io/badge/PRs-welcome-brightgreen.svg#align=left&display=inline&height=20&originHeight=20&originWidth=90&status=done&width=90) [![](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg#align=left&display=inline&height=20&originHeight=20&originWidth=104&status=done&width=104)](https://github-tools.github.io/github-release-notes/)

Picture preview component

[中文文档](./README-zh.md)

## Table of Contents

* [Feature](#feature)
* [Demo](#demo)
* [Install](#install)
* [Picture Preview Algorithm](#picture-preview-algorithm)
* [License](#license)

## Feature

* Implementation like medium
* Automatically adaptation screen size
* The small picture is not vague, the big picture does not overflow the screen
* Support Press `ESC` Key to off preview

[⬆Back to Top](#table-of-contents)

## Demo

* [Doc and online demo](https://femessage.github.io/img-preview/)

[⬆Back to Top](#table-of-contents)

## Install

```sh
yarn add @femessage/img-preview
```

[⬆Back to Top](#table-of-contents)

## Picture Preview Algorithm

When the original size of the preview picture is relatively large, you need to preview the picture proportionally.

```html
// X-axis ratio = width of the window / width of the image
// Y-axis ratio = height of the window / height of the picture
// Image ratio = x-axis ratio * (picture height > window height ? y-axis ratio: x-axis ratio)
```

Here's more details of the formula:

* Step 1, calculation `x-axis ratio` (The ratio of the browser window width to the original width of the picture) and save it

![WechatIMG5.jpeg](https://cdn.nlark.com/yuque/0/2019/jpeg/224563/1561960426707-28d49d2f-a972-4020-b9fd-958e1686a9bc.jpeg#align=left&display=inline&height=1224&name=WechatIMG5.jpeg&originHeight=1224&originWidth=2084&size=276725&status=done&width=2084)<br />

* The second step, considering `x-axis ratio` below, it is possible that the height of the picture is larger than the height of the window.<br /> At this time should use `y-axis ratio` (The ratio of browser window height to the original height of the picture) as the preview ratio of the picture

![WechatIMG61.jpeg](https://cdn.nlark.com/yuque/0/2019/jpeg/224563/1561960419677-2b5ecc88-b313-43e4-a196-402f6b5fc293.jpeg#align=left&display=inline&height=716&name=WechatIMG61.jpeg&originHeight=716&originWidth=2868&size=268723&status=done&width=2868)

[⬆Back to Top](#table-of-contents)

## Contributors

Thanks goes to these wonderful people ( [Emoji key](https://allcontributors.org/docs/en/emoji-key) ):<br />This project follows [All-contributors](https://github.com/all-contributors/all-contributors) Specification. Contributions of any kind welcome!

[⬆Back to Top](#table-of-contents)

## License

[MIT](./LICENSE)

[⬆ Back to Top](#table-of-contents)
