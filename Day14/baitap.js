// Bài 01

var a = 3;
var b = 5;

a = a - b;
b = b + a;
a = b - a;

console.log(`a : ${a}`);
console.log(`b : ${b}`);

// End Bai 01
// ---------------------------------------------------------------------
// Bai 02

var s = 10 + 20 + (5 ** 10) / 2;
console.log(`s : ${s}`);

// End Bai 02
// --------------------------------------------------------------------
// Bai 03

var a = 10, b = 9, c = 15;

if (a >= b) {
    if (b >= c) {
        console.log(`a : ${a}`);
    } else {
        if (a >= c) {
            console.log(`a : ${a}`);
        } else {
            console.log(`c : ${c}`);
        }
    }
} else {
    if (a >= c) {
        console.log(`b : ${b}`);
    } else {
        if (b >= c) {
            console.log(`b : ${b}`);
        } else {
            console.log(`c : ${c}`);
        }
    }
}

// End Bai 03
// --------------------------------------------------------------------
// Bai 04

var a = -5, b = 6;
var temp = a * b;

if (temp > 0) {
    console.log("a và b cùng dấu");
}else if (temp < 0) {
    console.log("a và b khác dấu");
} else {
    console.log("nhập lại a và b");
}

// End Bai 04
// --------------------------------------------------------------------
// Bai 05

var a = 3, b = 2, c = 5;
var temp;

if (a > b) {
    temp = a;
    a = b;
    b= temp;
}
if (a > c) {
    temp = a;
    a = c;
    c = temp;
}
if (b > c) {
    temp = b;
    b = c;
    c = temp;
}

console.log(`a : ${a}`);
console.log(`b : ${b}`);
console.log(`c : ${c}`);
