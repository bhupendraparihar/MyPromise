let MyPromise = require('./myPromise.js');

let myFirstPromise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("success in 2500 miliseconds");
    }, 2500);
});

myFirstPromise.then((successMessage) => {
    console.log("Yay! " + successMessage);
});