class Promise {
  constructor(fn) {
    function resolve(res) {
      this.callback.forEach((cb) => cb(res));
    }
    this.callback = [];
    fn(resolve.bind(this));
  }

  then(cb) {
    this.callback.push(cb);
  }
}

const p = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("ok");
  }, 2000);
});

p.then((msg) => {
  console.log(msg);
});

