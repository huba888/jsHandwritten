let num = 1234252135.1323412;
// 方法一: 缺点只会保留小数点后面3位,其他都会没掉
console.log(num.toLocaleString());
// 方法二: 自己遍历
function numberOfCommas(num) {
  num = num.toString();
  let cnt = 0;
  let res = "";
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] == ".") {
      cnt = 0;
      res = "." + res;
    } else {
      cnt++;
      res = num[i] + res;
      if (cnt == 3 && i !== 0) {
        console.log(i);
        cnt = 0;
        res = "," + res;
      }
    }
  }
  console.log(res);
  return res;
}

numberOfCommas(num);

// 方法三:正则表达式
let num1 = "112342342134124.13415";
let reg = /(?=\B(\d{3})+$)/g;
let res = num1
  .split(".")
  .map(v => v.replace(reg, ","))
  .join(".");
console.log(res);
