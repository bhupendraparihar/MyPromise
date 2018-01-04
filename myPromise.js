function MyPromise(fn){

    this.then = function(cb_success, cb_error){
        fn(cb_success, cb_error);
    };
};

module.exports = MyPromise;