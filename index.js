Array.prototype.mySome = function (cb) {
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            if(cb(this[index], index, this) !== true) {
                return false;
            }
        }
    }
    return true;
}

var arr = [1, 2, 3, 4, 5];

console.log(arr.mySome(function (number) {
    return number >= 1;
}));