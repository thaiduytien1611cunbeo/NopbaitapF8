// CONSTRUCTOR USER
var User = function (name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
};

// KHỞI TẠO NƠI LƯU TRỮ DATA
var data = [];

// HÀM handleRegister
var handleRegister = function (name, password, email) {
    if(typeof name === 'undefined' || typeof password === 'undefined' || typeof email === 'undefined') {
        console.log('Nhập đầy đủ thông tin');
    }
    else {
        var user = new User(name, password, email);
        user.role = 'user';
        data.push(user);
    }
};

// HÀM handleLogin
var handleLogin = function (name, password) {
    if(typeof name === 'undefined' || typeof password === 'undefined') {
        return 'Nhập đầy đủ thông tin';
    }
    else {
        var output = data.find(function (user) {
            return user['name'] === name && user['password'] === password;
        })
        output = typeof output !== 'undefined' ? output : 'Thông tin đăng nhập không hợp lệ'
        return output;
    }
};

// TEST INPUT -->> OUTPUT

var data = [];

var dataRegister = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
var dataRegister = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
var dataRegister = handleRegister(
  "Nguyen Van C",
  "12345678",
  "nguyenvanc@email.com"
);

var dataLogin = handleLogin("Nguyen Van B", "12345678");


//OUTPUT

console.log(`các tài khoản người dùng đã nhập vào : `);
console.log(data);
// ==========================================
console.log(`tài khoản người dùng cần tìm : `);
console.log(dataLogin);












// var numbers = [1, 2, 3, 4, 5];

// var number = numbers.find(function (number) {
//     return number > 2;
// })

// console.log(number);