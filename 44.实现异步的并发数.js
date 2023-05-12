function promisePool(functions, n) {
  const res = [];
  const iter = functions.entries();
  const workers = new Array(n).fill(iter).map(work);
  return Promise.all(workers).then(() => res);
  async function work(entries) {
    for (const [index, task] of entries) {
      const cur = await task();
      res[index] = cur;
    }
  }
}

let fn1 = () => {
  return new Promise((resolve, reject) => {
    console.log("fn1开始");
    setTimeout(() => {
      resolve("fn1");
    }, 1000);
  });
};

let fn2 = () => {
  return new Promise((resolve, reject) => {
    console.log("fn2开始");
    setTimeout(() => {
      resolve("fn2");
    }, 2000);
  });
};

let fn3 = () => {
  return new Promise((resolve, reject) => {
    console.log("fn3开始");
    setTimeout(() => {
      resolve("fn3");
    }, 2000);
  });
};
let fn4 = () => {
  return new Promise((resolve, reject) => {
    console.log("fn4开始");
    setTimeout(() => {
      resolve("fn4");
    }, 3000);
  });
};
promisePool([fn1, fn2, fn3, fn4], 2).then(res => {
  console.log(res);
});
