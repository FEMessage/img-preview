export function computedSize(img) {
  let w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight

  let {width, height} = img

  // scale为图片的缩放比例
  // 先计算宽度比例，然后用宽度比例*图片高度去对比窗口y轴
  let scale = x / width
  scale = scale * height > y ? y / height : scale

  if (height < y && width < x) {
    // 图片原始宽高都小于窗口宽高时，缩放比例为1
    scale = 1
  }

  let size = {
    width,
    height,
    scale
  }
  return size
}

export function isMobile() {
  return /mobile/gi.test(navigator.userAgent)
}
