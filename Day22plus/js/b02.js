Object.prototype.getCurrency = function (unit) {
    var price = +this;
    if(isNaN(price)) return;
    return price.toLocaleString('us');
}

//Case 1
var price = 12000;
console.log(price.getCurrency('đ')) //Hiển thị: 12,000 đ

//Case 2
var price = "12000000";
console.log(price.getCurrency('đ')) //Hiển thị: 12,000,000 đ

