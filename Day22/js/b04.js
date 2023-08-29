Array.prototype.myReduce = function (callback, initialValue) {

    if(typeof initialValue === 'undefined') {
        accumulator = this[0];
        this.shift();
    } else {
        accumulator = initialValue;
    }
    
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            accumulator = callback(accumulator, this[index], index, this)
        }
    }
    return accumulator;
}

var number = [1, 2, 3, 4, 5];

var total = number.myReduce(function (a, b) {
    return a + b;
}, 0)

// console.log(total);
