// chunk方法
function chunk(arr, n) {
  if (n < 1) return arr;
  let res = [];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (temp.length < n) {
      temp.push(arr[i]);
    } else {
      res.push([...temp]);
      temp = [];
    }
  }
  if (temp.length > 0) {
    res.push(temp);
  }
  return res;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let res = chunk(arr, 3);
console.log(res);
