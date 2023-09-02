Array.prototype.push2 = function (...args) {
    var newArray = this;
    args.forEach(function (value) {
        newArray[newArray.length] = value;
    })
}

var array = [1, 2, 3];

array.push2(4, 5, 6);

console.log(array);