function sort(arr) {
  arr.sort(() => Math.random() - 0.5);
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
sort(arr);
console.log(arr);
