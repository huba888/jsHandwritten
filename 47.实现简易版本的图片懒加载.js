// 参考网上的文章:https://mp.weixin.qq.com/s?__biz=MjM5MDA2MTI1MA==&mid=2649104318&idx=3&sn=0814a0cc0884229e043a2ddd68ef2995&chksm=be583813892fb1054079acaa960a8d2d3bd248373e029fc6da12b7757a63507dfdbd4d7e53b8&scene=27
// 获取所有的图片标签
const imgs = document.getElementsByTagName("img");
// 获取可视区域的高度
const viewHeight = window.innerHeight || document.documentElement.clientHeight;
// num用于统计当前显示到了哪一张图片，避免每次都从第一张图片开始检查是否露出
let num = 0;
function lazyload() {
  for (let i = num; i < imgs.length; i++) {
    // 用可视区域高度减去元素顶部距离可视区域顶部的高度
    let distance = viewHeight - imgs[i].getBoundingClientRect().top;
    // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
    if (distance >= 0) {
      // 给元素写入真实的src，展示图片
      imgs[i].src = imgs[i].getAttribute("data-src");
      // 前i张图片已经加载完毕，下次从第i+1张开始检查是否露出
      num = i + 1;
    }
  }
}
// 防抖函数
function debounce(fn, delay = 500) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, args);
    }, delay);
  };
}

// 是的页面初始化是加载首屏图片
window.onload = lazyload;
// 监听Scroll事件，为了防止频繁调用，使用防抖函数优化一下
window.addEventListener("scroll", debounce(lazyload, 600), false);
