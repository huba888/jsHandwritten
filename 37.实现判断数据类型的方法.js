function getType(target) {
  return Object.prototype.toString.call(target).split(/\s|\]/)[1].toLowerCase();
}

console.log(getType([]));
console.log(getType({}));
console.log(getType(() => {}));
console.log(getType(new Date()));
console.log(getType(""));
