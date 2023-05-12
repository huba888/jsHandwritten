let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 3, 6, 7, 5];

function intersection(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let res = [];
  for (const key of set1) {
    if (set2.has(key)) {
      res.push(key);
    }
  }
  return res;
}
let res = intersection(arr1, arr2);
console.log(res);
