// Bai 01 =====================================================

var distance = 10;
var money = 0;

if (distance < 0) {
    console.log('Nhập lại');
} else if (distance <= 1) {
    money = 15000;
} else if (distance <= 5) {
    money = distance * 13500;
} else if (distance <= 120) {
    money = distance * 11000;
} else {
    money = distance * 11000 / 10;
}

console.log(`Tien TAXI : ${money}`);

// Bai 02 ======================================================

var numberKwh = 100;
var money = 0;

if (numberKwh <= 0) {
    console.log('Nhập lại');
} else {
    for (var i = 1; i <= numberKwh; i++) {
        if (i <= 50) {
            money += 1678;
        }else if (i <= 100) {
            money += 1374;
        }else if (i <= 200) {
            money += 2014;
        }else if (i <= 300) {
            money += 2536;
        }else if (i <= 400) {
            money += 2834;
        }else {
            money += 2927;
        }
    }
}


// console.log(`Tiền Điện = ${money}`);

// Bai 03 ====================================================

var n = 3;
var s = 0;
for (var i = 1; i <= n; i++) {
    s += i * (i + 1);
}

console.log(`S = ${s}`);


// Bai 04 =====================================================

function prime(n) {
    for (var i = 2; i <=Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    } return n > 1;
}

var a = 1;

if (prime(a)) {
    console.log(`a is prime`);
} else {
    console.log(`a is not prime`);
}

// Bai 05 =======================================================

var row = 5;
var count = 1;

for (var i = 1; i <= row; i++) {
    var temp = "";
    for (var  j = 1; j <=i; j++) {
        if (j === i) {
            temp += `${count++}`;
        } else {
            temp += `${count++} `;
        }        
    }
    console.log(temp);
}

// Bài 06 ===================================================
    
    for (var i = 1; i <= 8; i++) {
        var temp = "";
        for (var j = 1; j <= 8; j++) {
            var ans ;
            if (i * j % 2 === 0) {
                ans = 'black';
            }else {
                ans = 'white';
            }
            temp += `${ans} `;
        }
        console.log(temp);
    }

// Bài 07 ===================================================
    
    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= 10; j++) {
            var temp = "";
            var ans = i * j;
            temp += `${i} * ${j} = ${ans}`;
            console.log(temp);
        }
    }

// Bài 08 ===================================================

function total(n) {
    if (n > 1) {
        return 1/n + total(n-1); 
    }
    return 1;
}

var n = 3;

console.log(total(n));