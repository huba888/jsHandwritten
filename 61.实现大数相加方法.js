// 大数相加

function add(n1, n2) {
  let i = n1.length - 1;
  let j = n2.length - 1;
  let res = "";
  let carry = 0;
  while (i >= 0 || j >= 0) {
    let num1 = Number(n1[i--]) || 0;
    let num2 = Number(n2[j--]) || 0;
    let sum = num1 + num2 + carry;
    res = (sum % 10) + res;
    carry = Math.floor(sum / 10);
  }
  if (carry >= 1) {
    res = 1 + res;
  }
  console.log(res);
  return res;
}
add("12", "19");
add("100", "1000");
add("100", "900");
add("1234123412341235123512351251235", "1324123512351251235123512351235");
