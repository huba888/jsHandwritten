class LazyMan {
  constructor() {
    this.task = [];
    console.log("lazy Man");
    setTimeout(() => {
      this.next();
    });
  }
  next() {
    let task = this.task.shift();
    if (task) {
      task();
    }
  }
  sleep(delay) {
    let fn = () => {
      setTimeout(() => {
        console.log("sleep" + delay);
        this.next();
      }, delay);
    };
    this.task.push(fn);
    return this;
  }
  sleepFirst(delay) {
    let fn = () => {
      setTimeout(() => {
        console.log("sleep first" + delay);
        this.next();
      }, delay);
    };
    this.task.unshift(fn);
    return this;
  }
  eat(food) {
    let fn = () => {
      console.log("eat" + food);
      this.next();
    };
    this.task.push(fn);
    return this;
  }
}

new LazyMan().eat("水果").sleep(1000).sleepFirst(1000).eat("饭");
