function getParams(url) {
  return url
    .split("?")[1]
    .split("&")
    .map(v => {
      return v.split("=");
    })
    .reduce((p, v) => ((p[v[0]] = v[1]), p), {});
}
let url = "http://www.baidu.com:80?name=huba&age=18";
console.log(getParams(url)); //{ name: 'huba', age: '18' }
