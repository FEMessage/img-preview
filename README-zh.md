# img-preview

[![Build Status](https://travis-ci.com/FEMessage/img-preview.svg?branch=master)](https://travis-ci.com/FEMessage/img-preview)
[![NPM Download](https://img.shields.io/npm/dm/@femessage/img-preview.svg)](https://www.npmjs.com/package/@femessage/img-preview)
[![NPM Version](https://img.shields.io/npm/v/@femessage/img-preview.svg)](https://www.npmjs.com/package/@femessage/img-preview)
[![NPM License](https://img.shields.io/npm/l/@femessage/img-preview.svg)](https://github.com/FEMessage/img-preview/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/FEMessage/img-preview/pulls)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

图片预览组件

## Table of Contents <!-- omit in toc -->

* [Feature](#feature)
* [Demo](#demo)
* [Install](#install)
* [图片比例算法](#图片比例算法)
* [Contributors](#contributors)
* [License](#license)

## Feature

* 参考 medium 实现
* 自动适配屏幕大小
* 小图不模糊，大图不溢出屏幕
* 支持按 `ESC` 键关闭预览

[⬆ Back to Top](#table-of-contents)

## Demo

* [doc and online demo](https://femessage.github.io/img-preview/)

[⬆ Back to Top](#table-of-contents)

## Install

```sh
yarn add @femessage/img-preview
```

[⬆ Back to Top](#table-of-contents)

## 图片比例算法

当预览的图片原尺寸比较大的情况，需要把图片按比例预览

```sh
// x轴比例 = 窗口的宽 / 图片的宽
// y轴比例 = 窗口的高 / 图片的高
图片比例 = x轴比例 x 图片高度 > 窗口高度 ? y轴比例 : x轴比例
```

以下是公式说明：

* 第一步，计算 `x轴比例`（浏览器窗口宽度与图片原本宽度的比例），并保存下来

![image-20181210204220704](https://i.loli.net/2019/11/15/eikTUwbqa4pmR3j.jpg)

* 第二步，考虑到在`x轴比例`下，有可能图片的高度比窗口的高度还大。

  这时应使用 `y轴比例` （浏览器窗口高度与图片原本高度的比例）作为图片的预览比例

![image-20181211141542119](https://i.loli.net/2019/11/15/YEsxZ5fG9CdimHh.jpg)

[⬆ Back to Top](#table-of-contents)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://github.com/listars"><img src="https://avatars2.githubusercontent.com/u/20613509?v=4" width="100px;" alt="listars"/><br /><sub><b>listars</b></sub></a><br /><a href="https://github.com/FEMessage/img-preview/commits?author=listars" title="Code">💻</a> <a href="https://github.com/FEMessage/img-preview/commits?author=listars" title="Documentation">📖</a> <a href="#ideas-listars" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/donaldshen"><img src="https://avatars3.githubusercontent.com/u/19591950?v=4" width="100px;" alt="Donald Shen"/><br /><sub><b>Donald Shen</b></sub></a><br /><a href="https://github.com/FEMessage/img-preview/issues?q=author%3Adonaldshen" title="Bug reports">🐛</a> <a href="#maintenance-donaldshen" title="Maintenance">🚧</a></td><td align="center"><a href="https://evila.me"><img src="https://avatars3.githubusercontent.com/u/19513289?v=4" width="100px;" alt="EVILLT"/><br /><sub><b>EVILLT</b></sub></a><br /><a href="https://github.com/FEMessage/img-preview/commits?author=evillt" title="Code">💻</a> <a href="#maintenance-evillt" title="Maintenance">🚧</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

[⬆ Back to Top](#table-of-contents)

## License

[MIT](./LICENSE)

[⬆ Back to Top](#table-of-contents)
