// all 所有成功才算成功 一个失败就是失败
Promise.myAll = function (promises) {
  let ans = [];
  return new Promise((resolve, reject) => {
    for (const p of promises) {
      p.then(res => {
        ans.push(res);
        if (ans.length === promises.length) {
          resolve(ans);
        }
      }).catch(reject);
    }
  });
};

let p1 = new Promise(resolve => {
  setTimeout(() => {
    resolve("ok1");
  }, 100);
});

let p2 = new Promise(resolve => {
  setTimeout(() => {
    resolve("ok2");
  }, 200);
});
let p3 = new Promise(resolve => {
  setTimeout(() => {
    resolve("ok3");
  }, 300);
});
Promise.myAll([p1, p2, p3])
  .then(res => console.log(res))
  .catch(reason => console.log(reason));
let p4 = new Promise((_, reject) => {
  setTimeout(() => {
    reject("reason");
  }, 400);
});

Promise.myAll([p1, p2, p3, p4])
  .then(res => console.log(res))
  .catch(reason => console.log(reason));
