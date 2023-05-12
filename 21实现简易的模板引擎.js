// 模板
let str = `<div>{{ msg }}</div>
<p>{{ age }}</p>
<div class="item">{{ sex }}</div>

{% if(isShow) { %}
<div>展示了</div>
{% } %}
{% for(let i = 0; i < friend.length;i++) { %}
<div>{{friend[i]}}</div>
{% } %}
`;
//
let data = {
  msg: "huba",
  age: 18,
  sex: "man",
  isShow: false,
  friend: ["name1", "name2"],
};

let reg = /\{\{([^\}]+)\}\}/g;
str = str.replace(reg, (_, $1) => "${" + $1.trim() + "}");
str = "let str = '';with(data){ str += " + "`" + str + "`" + "} return str";
let reg2 = /\{\%([^\%]+)\%\}/g;
str = str.replace(reg2, (_, $1) => "`\n" + $1.trim() + "str+=`");
let fn = new Function("data", str);
console.log(fn(data));
