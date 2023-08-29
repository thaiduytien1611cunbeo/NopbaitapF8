var sum = function (...args) {
    var total = 0, check = true;
    for(var value of args) {
        if(typeof value !== 'number' || +value) {
            console.log('Lỗi nha má');
            check = false
            break;
        } else total += value;
    }
    if(check) {
        console.log(total);
        return total;
    }
}

// sum(1, 2, 3, 'a')

//  DẤU CỘNG Ở CHỖ VALUE LÀ EM CHECK XEM NÓ CÓ PHẢI NaN HAY KHÔNG
