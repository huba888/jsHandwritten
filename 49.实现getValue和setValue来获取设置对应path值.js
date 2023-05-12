let obj = {
  friend: [{ name: "nihao", value: "hello" }],
};
let arr = [{ friend: { name: "huba" } }];
function setValue(target, path, value) {
  let arr = path.split(/\.|\[|\]/g).filter(Boolean);
  for (let i = 0; i < arr.length - 1; i++) {
    target = target[arr[i]];
  }
  target[arr.at(-1)] = value;
}
setValue(obj, "friend[0].name", "hello");
setValue(arr, "[0].friend.name", "nihao");
console.log(obj);
console.log(arr);

function getVaule(target, path, defaultValue) {
  let arr = path.split(/\.|\[|\]/g).filter(Boolean);
  for (let i = 0; i < arr.length - 1; i++) {
    target = target[arr[i]];
  }
  return target[arr.at(-1)] || defaultValue;
}

console.log(getVaule(obj, "friend[0].name", "nihao"));
console.log(getVaule(arr, "[0].friend.name", "nihao"));
