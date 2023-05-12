let timer = setTimeout(() => {}, 1000);

function MySetInterval(fn, interval) {
  setTimeout(() => {
    fn();
    MySetInterval(fn, interval);
  }, interval);
}

MySetInterval(() => {
  console.log(134);
}, 1000);
