var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự"
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email"
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại"
    }
}

var getError = function (field) {
    for(var value in errors) {
        if(value === field) {
            for(var item in errors[field]) {
                console.log(errors[field][item]);
                break;
            }
        }
    }
}

getError('name') //Vui lòng nhập họ tên
getError('email') //Định dạng email không hợp lệ
getError('password')
