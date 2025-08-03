const promise = new Promise((resolve, reject) => {
  console.log('начало работы');
  setTimeout(() => {
    if (Math.random() <= 0.5) {
      resolve('resolve');
    } else {
      reject('reject');
    }
  }, 3000);
});

promise
  .then((result) => {
    console.log('then result is: ' + result);
  })
  .catch((result) => {
    console.log('catch result is: ' + result);
  });
