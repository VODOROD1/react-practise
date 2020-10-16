// Создаётся объект promise
let promise = new Promise((resolve, reject) => {

  setTimeout(() => {
    // переведёт промис в состояние fulfilled
    resolve("result");
  }, 1000);

});

// promise.then навешивает обработчики на успешный результат или ошибку
promise
  .then(
    result => {
      // первая функция-обработчик - запустится при вызове resolve
      alert("Fulfilled: " + result); // result - аргумент resolve
    },
    error => {
      // вторая функция - запустится при вызове reject
      alert("Rejected: " + error); // error - аргумент reject
    }
  );


let callbackFunc = (resolve, reject) => {
  setTimeout(() => {
    // переведёт промис в состояние fulfilled
    resolve("result");
  }, 1000);
};

let somePromise = new Promise(callbackFunc);

let fulfill = (A) => {
  console.log(A);
}

let reject = (B) => {
  console.log(B);
}

somePromise
  .then(fulfill, reject);