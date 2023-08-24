// Object Constructor=================================
var Person = function (name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
};

//Object Prototype
Person.prototype.shortName = function () {
    var name = this.name;
    var newName = name.split(' ');
    newName.splice(1, 1);
    return newName.join(' ');
};

//INPUT===================================================
var customers = [
    new Person("Nguyễn Văn A", 11, "Ha Noi"),
    new Person("Nguyễn Văn B", 2, "Hai Phong"),
    new Person("Nguyễn Văn C", 12, "TP.HCM"),
    new Person("Nguyễn Văn D", 15, "Nghe An"),
];

// ==========================================================

// Thêm short name vào object và sắp xếp theo tuổi
var createCustomers = function (myArray) {
    for(var item of myArray) {
        item['shortName'] = item.shortName();
    };

    myArray.sort(function (a, b) {
        return a.age - b.age;
    });
    return myArray
}

//OUTPUT======================================
var result = createCustomers(customers); 

console.log(result);