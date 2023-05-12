// {name:"nihao",age:123,friend:["kobe","james",null,true,{name:12}],sex:undefined,isGay:false,grilFriend:null}

function JSONParse(JsonStr) {
  return new Function("return " + JsonStr)();
}
let str = `{name:"nihao",age:123,friend:["kobe","james",null,true,{name:12}],sex:undefined,isGay:false,grilFriend:null}`;
let obj = JSONParse(str);

console.log(obj);
