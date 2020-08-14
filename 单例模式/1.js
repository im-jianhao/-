// 单例模式
// function Dialog(name) {
//   this.name = name;
// }

// const createSinge = (function () {
//   let instance;
//   return function (name) {
//     if (!instance) {
//       return (instance = new Dialog(name));
//     } else {
//       return instance;
//     }
//   };
// })();

// const d1 = createSinge("123");
// const d2 = createSinge("123");

// console.log(d1 === d2);

function Dialog(name) {
  this.name = name;
}

function createSinge(Constructor) {
  let instance;
  return function (...arg) {
    if (!instance) {
      // Constructor.apply(this, arg);
      // this.__proto__ = Constructor.prototype;
      instance = new Constructor(...arg);
      return instance;
    } else {
      return instance;
    }
  };
}
const CreateDialog = createSinge(Dialog);
const d1 = new CreateDialog("123");
const d2 = new CreateDialog("123");
console.log(d1 === d2);
console.log(d1.name);
