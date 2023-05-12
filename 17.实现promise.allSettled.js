Promise.MyAllSettled = function (promises) {
  let arr = [];
  return new Promise(resolve => {
    for (const p of promises) {
      p.then(
        value => {
          arr.push({
            status: "fulfilled",
            value,
          });
          if (arr.length == promises.length) {
            resolve(arr);
          }
        },
        reason => {
          arr.push({
            status: "rejected",
            reason,
          });
          if (arr.length == promises.length) {
            resolve(arr);
          }
        }
      );
    }
  });
};
// allSettled
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
Promise.MyAllSettled([p1, p2, p3])
  .then(res => console.log(res))
  .catch(reason => console.log(reason));
let p4 = new Promise((_, reject) => {
  setTimeout(() => {
    reject("reason");
  }, 400);
});

Promise.MyAllSettled([p1, p2, p3, p4])
  .then(res => console.log(res))
  .catch(reason => console.log(reason));
