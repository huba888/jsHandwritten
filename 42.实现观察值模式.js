class Subject {
  constructor() {
    this.state = "state";
    // 存放观察值
    this.observers = [];
  }
  attach(ther) {
    //
    this.observers.push(ther);
  }
  // 更新观察者的状态
  setState(state) {
    this.state = state;
    // 循环取出每个观察者
    this.observers.forEach(o => o.update(this));
  }
}
class Observer {
  constructor(name) {
    this.name = name;
  }
  // 观察状态的方法
  update(subject) {
    console.log(this.name + "观察了", subject.state);
  }
}

let s = new Subject();

let o1 = new Observer("o1");
let o2 = new Observer("o2");
s.attach(o1);
s.attach(o2);

s.setState("state2");
