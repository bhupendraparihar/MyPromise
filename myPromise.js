function MyPromise(fn){

    this.then = function(cb_success, cb_error){
        fb(cb_success, cb_error);
    };
};

module.exports = MyPromise;