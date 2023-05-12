// JSONP 跨域
let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  // 创建script标签
  let script = document.createElement("script");
  script.src = "http://localhost:4000/getUserInfo.js";
  script.onload = () => {
    script.remove();
  };
  document.body.appendChild(script);
});

// 预先定义回调函数
function getUserInfo(data) {
  console.log(data);
}

// 后端提前准备getUserInfo.js这个js文件
// 里面的内容是大概是这样的
// getUserInfo({
//  name:"huba",age:18
// })
