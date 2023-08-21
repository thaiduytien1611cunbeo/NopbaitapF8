var arr = [["a", 1, true], ["b", 2, false], ["c", 3, true]]

// [["a", "b"], [1, 2], [true, false]]

// FUNCTION LÀM PHẲNG ARRAY=========================

var flatArray = function (arr) {
    arr = arr.reduce(function (array, current) {
        return array.concat(current);
    }, [])

    if(arr.every(function (value) {
        return typeof value !== "object";
    })) {
        return arr;
    } 
    return flatArray(arr);
}
//END ===============================================

var arr = [["a", 1, true], ["b", 2, false], ["c", 3, true]]

var arrayFlat = flatArray(arr);

var typeofArray = ['number', 'string', 'boolean', 'null'];

var newArr = [];

typeofArray.forEach(function (type) {
    newArr.push(
        arrayFlat.reduce(function (array, value) {
            if(typeof value === type) {
                array.push(value);
            }
            return array;
        }, [])
    ) 
})

console.log(newArr);



























// var arr1 = flatArray(arr);

// var splitArray = function (arr) {
//     var arr1 = arr.reduce(function (pre, current) {
//        if (typeof current === "number") {
//         pre.push(current);
//        }
//        return pre;
//     }, []);

//     var arr2 = arr.reduce(function (pre, current) {
//         if (typeof current === "string") {
//          pre.push(current);
//         }
//         return pre;
//      }, []);

//      var arr3 = arr.reduce(function (pre, current) {
//         if (typeof current === "boolean") {
//          pre.push(current);
//         }
//         return pre;
//      }, []);

//      var totalArr = [];
//      totalArr.push(arr1, arr2, arr3);
//      return totalArr;
// }

// console.log(splitArray(arr1));