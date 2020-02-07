# img-preview

[![Build Status](https://travis-ci.com/FEMessage/img-preview.svg?branch=master)](https://travis-ci.com/FEMessage/img-preview)
[![NPM Download](https://img.shields.io/npm/dm/@femessage/img-preview.svg)](https://www.npmjs.com/package/@femessage/img-preview)
[![NPM Version](https://img.shields.io/npm/v/@femessage/img-preview.svg)](https://www.npmjs.com/package/@femessage/img-preview)
[![NPM License](https://img.shields.io/npm/l/@femessage/img-preview.svg)](https://github.com/FEMessage/img-preview/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/FEMessage/img-preview/pulls)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

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

![WechatIMG5.jpeg](https://i.loli.net/2019/11/15/eikTUwbqa4pmR3j.jpg)

* The second step, considering `x-axis ratio` below, it is possible that the height of the picture is larger than the height of the window.<br /> At this time should use `y-axis ratio` (The ratio of browser window height to the original height of the picture) as the preview ratio of the picture

![WechatIMG61.jpeg](https://i.loli.net/2019/11/15/YEsxZ5fG9CdimHh.jpg)

[⬆Back to Top](#table-of-contents)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

Thanks goes to these wonderful people ( [Emoji key](https://allcontributors.org/docs/en/emoji-key) ):<br />This project follows [All-contributors](https://github.com/all-contributors/all-contributors) Specification. Contributions of any kind welcome!

[⬆Back to Top](#table-of-contents)

## License

[MIT](./LICENSE)

[⬆ Back to Top](#table-of-contents)
