
// var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

// // Cách 1 : ====================================================================

// // while(arr.some(function (value) {
// //     return typeof value === 'object';
// // })) {
// //     arr = arr.reduce(function (flatArray, current) {
// //         return flatArray.concat(current);
// //     }, [])
// // }

// // console.log(arr);

// // Cách 2: ===================================================================

// // ANH XEM GIÚP EM CÁCH NÀO HAY HƠN Ạ

// var flatArray = function (arr) {
//     // nốt các element trong mảng ban đầu với nhau
//     arr = arr.reduce(function (array, current) {
//         return array.concat(current);
//     }, [])

//     // Check xem còn element nào = object hay không
//     if(arr.every(function (value) {
//         return typeof value !== "object";
//     })) {
//         return arr;
//     } 
//     // nếu còn element bằng object thì chạy lại hàm 
//     return flatArray(arr);
// }

// console.log(flatArray(arr));