// # Bài 01
// Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí=====================

// var number = [9, 2, 5,1, 4, 6, 5];
// var min = number[0], max = number[0], indexMin = 0, indexMax = 0;

// for (var index in number) {
//     if(min > number[index]) {
//         min = number[index];
//         indexMin = index;
//     }
//     if(max < number[index]) {
//         max = number[index];
//         indexMax = index;
//     }
// }

// console.log(`biggest number is ${max} - index is ${indexMax}`);
// console.log(`smallest number is ${min} - index is ${indexMin}`);

// # Bài 02
// Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng. Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”============================================================

// var number = [9, 2, 5,1, 4, 6, 5, 7, 12, 13];

// function checkPrime(n) {
//     for(var i = 2; i <= Math.sqrt(n); i++) {
//         if(n % i === 0) return false;
//     }
//     return n > 1;
// }

// var sum = 0, count = 0;

// for (var value of number) {
//     if(checkPrime(value) === true) {
//         sum += value;
//         count++;
//     }
// }

// console.log(sum / count);



// # Bài 03
// Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữ lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý ===========================================================================

var numbers = [9, 2, 5, 2, 3, 6, 6, 8, 13, 13];


for (var i = 0; i < numbers.length - 1; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
        if (numbers[j] === numbers[i]) {
            var lastArr = numbers.slice(j + 1);
            numbers = numbers.slice(0, j);
            numbers = numbers.concat(lastArr);
        }
    }
}

console.log(numbers);




// # Bài 04
// Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau

// Sắp xếp mảng theo thứ tự tăng dần

// Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng

// var numbers = [9, 2, 5, 1, 3, 6, 6, 8, 13, 13];
// var number = 14;

// numbers.sort(function(a, b) {
//     return a - b;
// });

// var index = numbers.length;

// for (var i = 0; i < numbers.length; i++) {
//     if (number <= numbers[i]) {
//         index = i;
//         break;
//     }
// }

// var lastArr = numbers.slice(index);
// lastArr.unshift(number);

// numbers = numbers.slice(0, index);

// for(var value of lastArr) {
//     numbers[numbers.length] = value;
// }

// console.log(numbers);


