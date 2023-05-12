// 这是一个请求函数,给我一个id 我返回这个id对应的名字
function getUserNameById(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve("HuBa" + id), 1000);
  });
}
// 这是一个请求函数,给我用户名, 我返回有几个人叫这个名字
function getUserCountByName(name) {
  return new Promise(resolve => {
    setTimeout(() => {
      let res = 0;
      for (let i = 0; i < name.length; i++) {
        res += name.charCodeAt(i);
      }
      resolve(res);
    }, 1000);
  });
}

// 需求有一个id = "1234" 我们需要看看和这个id同名的有几个人
// 下面是async await 的写法
async function main1() {
  let name = await getUserNameById("1234");
  let count = await getUserCountByName(name);
  console.log(count);
}
// 直接调用
// main1();

// async 和 await 是生成器的语法糖,上面的那种写法也可以变成以下写法
// 就是本题的答案: 手写generator 实现async 和 await
function* main() {
  let name = yield getUserNameById("1234");
  let count = yield getUserCountByName(name);
  console.log(count);
}
// 不能直接调用 mian()
//需要通过一下函数调用
execGenerator(main);

function execGenerator(genFn) {
  let generator = genFn();
  function exec(res) {
    let result = generator.next(res);
    if (result.done) return result.value;
    result.value.then(res => {
      exec(res);
    });
  }
  exec();
}
