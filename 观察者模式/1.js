class Start {
  constructor(name, state) {
    this.name = name;
    this.state = state;
    this.observers = [];
  }

  getName() {
    return this.name;
  }

  getState() {
    return this.state;
  }

  attach(observer) {
    this.observers.push(observer);
  }

  setState(newState) {
    this.state = newState;
    this.notifyAllObservers();
  }

  notifyAllObservers() {
    this.observers.forEach((observer) => observer.update());
  }
}

class Fan {
  constructor(name, start) {
    this.name = name;
    this.start = start;
    start.attach(this);
  }

  update() {
    console.log(`我最爱的明星状态为${this.start.getState()}`);
  }
}

const lixiaolong = new Start("李小龙", "练拳");
const xiaoli = new Fan("小李", lixiaolong);

// lixiaolong.setState("睡觉");
