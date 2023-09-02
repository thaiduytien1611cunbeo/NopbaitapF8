Array.prototype.filter2 = function (callback) {
    var newArray = [];
    for(var index in this) {
        if(this.hasOwnProperty(index) && callback(this[index], index, this)) {
            newArray.push(this[index]);
        }
    }
    return newArray;
}

var array = [1, 2, 3, 4];

var ans = array.filter2(function (item) {
    return item > 1;
})

console.log(ans);