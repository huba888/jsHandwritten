let arr = [
  { name: "huba", age: 23 },
  { name: "lihua", age: 22 },
  { name: "huba", age: 18 },
  { name: "xiaoliu", age: 14 },
  { name: "xiaohu", age: 18 },
];

// 假设名字相同去重
let set = new Set();
let newArr = arr.reduce((p, v) => {
  if (!set.has(v.name)) {
    set.add(v.name);
    p.push(v);
  }
  return p;
}, []);

console.log(newArr);
