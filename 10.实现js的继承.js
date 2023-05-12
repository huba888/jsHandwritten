function Person(name) {
  this.name = name;
}
// 原型链继承 核心: 子类的隐式原型 指向 父类的实例
// 缺点: 子类实例无法给父类构造函数传递参数,所有子类共享一份数据
Son.prototype = new Person();

// 借用构造函数继承
// 缺点: 没办法继承父类原型上的方法
function Son(name, age) {
  Person.call(name);
  this.age = age;
}

// 组合继承 结合1,2
// 缺点 调用了2次父类构造函数
function Son(name, age) {
  Person.call(name);
  this.age = age;
}
Son.prototype = new Person();

// 寄生组合继承
function Son(name, age) {
  Person.call(name);
  this.age = age;
}
Son.prototype = Object.create(Person.prototype);

// class 继承
