Promise.MyRace = function (promises) {
  return new Promise((resolve, reject) => {
    for (let p of promises) {
      p.then(resolve, reject);
    }
  });
};

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("reject");
  }, 100);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("fulfilled");
  }, 200);
});

Promise.MyRace([p1, p2])
  .then(res => {
    console.log(res);
  })
  .catch(reason => {
    console.log(reason);
  });
