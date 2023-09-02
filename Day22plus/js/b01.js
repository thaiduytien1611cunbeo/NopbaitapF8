var sum = function (...args) {
    var total = 0;
    for(var number of args) {
        if(Number.isNaN(number) || typeof number !== 'number') {
            console.log('Lỗi nha má');
            return;
        }
        else total += number;
    }
    console.log(total);
}

sum(1, 2, 3, 'a')