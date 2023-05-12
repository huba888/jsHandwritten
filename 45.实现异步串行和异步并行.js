// 异步串行,使用async await

function sum(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a + b);
    }, 100);
  });
}
// 串行
let arr = [1, 2, 3, 4, 5, 6, 7];
let p = arr.reduce((prev, cur) => {
  return prev.then(res => {
    return cur + res;
  });
}, Promise.resolve(0));

// 并行
async function arrSum(arr) {
  if (arr.length == 1) return arr[0];
  let tasks = [];
  for (let i = 0; i < arr.length; i += 2) {
    tasks.push(sum(arr[i], arr[i + 1] || 0));
  }
  let res = await Promise.all(tasks);
  return arrSum(res);
}
arrSum(arr).then(res => console.log(res));
