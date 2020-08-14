// 简单工厂模式
// class Plant {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Apple extends Plant {
//   constructor(name) {
//     super(name);
//     this.taste = "甜";
//   }
// }

// class Lemon extends Plant {
//   constructor(name) {
//     super(name);
//     this.taste = "酸";
//   }
// }

// class Factory {
//   static create(type) {
//     switch (type) {
//       case "apple":
//         return new Apple("苹果");
//       case "lemon":
//         return new Lemon("柠檬");
//     }
//   }
// }

// const apple = Factory.create("apple");
// const lemon = Factory.create("lemon");

// console.log(apple);
// console.log(lemon);

// 工厂模式
// class Plant {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Apple extends Plant {
//   constructor(name) {
//     super(name);
//     this.taste = "甜";
//   }
// }

// class Lemon extends Plant {
//   constructor(name) {
//     super(name);
//     this.taste = "酸";
//   }
// }

// function appleFactory() {
//   return new Apple("苹果");
// }

// function lemonFactory() {
//   return new Lemon("柠檬");
// }

// const setting = {
//   apple: appleFactory,
//   lemon: lemonFactory,
// };

// const apple = setting['apple']()

// console.log(apple);

