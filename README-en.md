# Img-preview

![](https://cdn.nlark.com/yuque/0/2019/svg/224563/1561960140452-758467ac-5389-4fed-a261-9c2b16dccbd6.svg#align=left&display=inline&height=20&originHeight=20&originWidth=90&size=0&status=done&width=90) [![](https://img.shields.io/npm/dm/@femessage/img-preview.svg#align=left&display=inline&height=20&originHeight=20&originWidth=140&status=done&width=140)](https://www.npmjs.com/package/@femessage/img-preview) ![](https://img.shields.io/npm/v/@femessage/img-preview.svg#align=left&display=inline&height=20&originHeight=20&originWidth=80&status=done&width=80) [![](https://img.shields.io/npm/l/@femessage/img-preview.svg#align=left&display=inline&height=20&originHeight=20&originWidth=78&status=done&width=78)](https://github.com/FEMessage/img-preview/blob/master/LICENSE) ![](https://img.shields.io/badge/PRs-welcome-brightgreen.svg#align=left&display=inline&height=20&originHeight=20&originWidth=90&status=done&width=90) [![](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg#align=left&display=inline&height=20&originHeight=20&originWidth=104&status=done&width=104)](https://github-tools.github.io/github-release-notes/)

Project Brief description + example diagram

<a name="65f5152b"></a>

## Table of Contents

* [Introduction](#introduction)
* [Feature](#feature)
* [Demo](#demo)
* [Install](#install)
* [Picture proportional algorithm](#%E5%9B%BE%E7%89%87%E6%AF%94%E4%BE%8B%E7%AE%97%E6%B3%95)
* [License](#license)

<a name="Introduction"></a>

## Introduction

Picture preview component<br />[⬆Back to Top](#table-of-contents)

<a name="Feature"></a>

## Feature

* Reference medium implementation
* Automatic adaptation screen size
* The small picture is not vague, the big picture does not overflow the screen
* Support Press `ESC` Key off preview<br />[⬆Back to Top](#table-of-contents)

<a name="Demo"></a>

## Demo

* [Doc and online demo](https://femessage.github.io/img-preview/)<br />[⬆Back to Top](#table-of-contents)

<a name="Install"></a>

## Install

```sh
yarn add @femessage/img-preview
```

[⬆Back to Top](#table-of-contents)

<a name="f041f3c9"></a>

## Picture proportional algorithm

When the original size of the preview picture is relatively large, you need to preview the picture proportionally.

```html
// X-axis scale = width of the window / width of the image
// Y-axis scale = height of the window / height of the picture
// Image scale = x-axis scale x picture height > window height ? y-axis scale: x-axis scale
```

The following is a description of the formula:

* Step 1, calculation `x轴比例` (The ratio of the browser window width to the original width of the picture) and save it

![WechatIMG5.jpeg](https://cdn.nlark.com/yuque/0/2019/jpeg/224563/1561960426707-28d49d2f-a972-4020-b9fd-958e1686a9bc.jpeg#align=left&display=inline&height=1224&name=WechatIMG5.jpeg&originHeight=1224&originWidth=2084&size=276725&status=done&width=2084)<br />

* The second step, considering `x轴比例` Below, it is possible that the height of the picture is larger than the height of the window.<br />Should be used at this time `y轴比例` (The ratio of browser window height to the original height of the picture) as the preview ratio of the picture

![WechatIMG61.jpeg](https://cdn.nlark.com/yuque/0/2019/jpeg/224563/1561960419677-2b5ecc88-b313-43e4-a196-402f6b5fc293.jpeg#align=left&display=inline&height=716&name=WechatIMG61.jpeg&originHeight=716&originWidth=2868&size=268723&status=done&width=2868)<br />
[⬆Back to Top](#table-of-contents)

<a name="Contributors"></a>

## Contributors

Thanks goes to these wonderful people ( [Emoji key](https://allcontributors.org/docs/en/emoji-key) ):<br />This project follows [All-contributors](https://github.com/all-contributors/all-contributors) Specification. Contributions of any kind welcome!<br />[⬆Back to Top](#table-of-contents)

<a name="License"></a>

## License

[MIT](./LICENSE)<br />[⬆ Back to Top](#table-of-contents)
