function sleep(wait) {
  return new Promise(resolve => void setTimeout(resolve, wait));
}

void (async function main() {
  console.log(1234);
  // 先睡2秒在再输出5678
  await sleep(2000);
  console.log(5678);
})();
