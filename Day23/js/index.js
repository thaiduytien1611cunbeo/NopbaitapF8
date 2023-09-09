var overlay = document.querySelector('.overlay');
var overlayClass = overlay.classList;
overlayClass.add('opacity'); // thêm class opacity vào overlay

var loginClass = document.querySelector('.login').classList;
loginClass.add('none'); // Thêm class none vào login

var registerClass = document.querySelector('.register').classList;
registerClass.add('none'); // Thêm class none vào register

var linkLogin = document.querySelector('.link-login');
linkLogin.addEventListener('click', function() {
    overlayClass.remove('opacity');
    loginClass.remove('none');
}) // khi click vào link thì xóa class none và opacity để login hiện ra

overlay.addEventListener('click', function() {
    overlayClass.add('opacity');
    loginClass.add('none');
    registerClass.add('none');
}) // khi click vào ovarlay thì thêm class none và opacity để login mất đi

var btnRegister = document.querySelector('.login .title-login h2:last-child');
btnRegister.onclick = function() {
    document.querySelector('.login').classList.add('none')
    document.querySelector('.register').classList.remove('none')
} // khi click vào register thì login mất register hiện ra

var btnLogin = document.querySelector('.register .title-register h2:first-child');
btnLogin.onclick = function() {
    document.querySelector('.register').classList.add('none')
    document.querySelector('.login').classList.remove('none')
} // khi click vào register thì register mất login hiện ra


// End JS Giao Dien



// Check nội dung người dùng nhập vào

// Check login


var login = document.querySelector('.input-login')
var inputLogin = login.querySelectorAll('input');
var inputEmail = login.querySelector('input[type=email]')

// Check khi blur ra ngoài
inputLogin.forEach(function (it) {
    it.addEventListener('blur', function (e) {
        inputLogin.forEach(function (item, index) {
            if(item.value === '') {
                item.classList.add('outline');
                login.querySelectorAll('p[class^=text-error]')[index].innerText = 'Vui lòng nhập thông tin';
            }
            document.querySelector('.login').style.height = '510px';
        })
    })
})

// Check email-login
inputEmail.addEventListener('input', function (e) {
    var value = e.target.value;
    if(value !== '' && login.querySelector('input[type=password]').value === '') {
        this.classList.add('outline');
        document.querySelector('.input-login .text-error-email').innerText = 'Vui lòng nhập đúng định dạng email';
        login.querySelector('.text-error-password').innerText = 'Vui lòng nhập thông tin';
        login.querySelector('input[type=password]').classList.add('outline');
        document.querySelector('.login').style.height = '520px';
    }
    if(login.querySelector('input[type=password]').value !== '') {
        login.querySelector('.text-error-password').innerText = '';
    }
    if(value.includes('@') && value.lastIndexOf('@') !== (value.length - 1) && value.indexOf('@') > 2) {
        this.classList.remove('outline');
        this.classList.add('background');
        login.querySelectorAll('.text-error-email').forEach(function (item) {
            item.innerText = '';
        })
        
    }
})


// End Check Email login


// // Check PassWord

var iconPass = document.querySelectorAll(".icon-pass");
var inputPass = document.querySelector('.input-login input[type=password]');

inputPass.addEventListener('input', function (e) {
    if(e.target.value !== '') {
        inputPass.classList.remove('outline');
        login.querySelector('.text-error-password').innerText = '';
    } 
})

// XỬ lý con mắt ẩn hiện
iconPass.forEach(function (item) {
    item.addEventListener('click', function (e) {
        var inputPassword = document.querySelector('.password-input input');
        if(e.target.classList.contains('fa-eye-slash')) {
            inputPassword.setAttribute('type', 'password');
            e.target.classList.remove('fa-eye-slash');
            e.target.classList.add('fa-eye');
        } else {
            inputPassword.setAttribute('type', 'text');
            e.target.classList.add('fa-eye-slash');
            e.target.classList.remove('fa-eye');
        }
    })
}) 


// // End Check Login


// Check Register

document.querySelector('.login .title-login h2:last-child').addEventListener('click', function () {

    var register = document.querySelector('.input-register') 
    var inputRegister = register.querySelectorAll('input');

    // Check khi blur ra ngoài
    inputRegister.forEach(function (it) {
        it.addEventListener('blur', function (e) {
            inputRegister.forEach(function (item, index) {
                if(item.value === '') {
                    item.classList.add('outline');
                    register.querySelectorAll('p[class^=text-error]')[index].innerText = 'Vui lòng nhập thông tin';
                }
                document.querySelector('.register').style.height = '540px';
            })
        })
    })

    // Check name Register
    var inputName = document.querySelector('input[type=text]');
    console.log(inputName);
    inputName.addEventListener('input', function (e) {
        if(e.target.value !== '') {
            inputName.classList.remove('outline');
            register.querySelector('.text-error-name').innerText = '';
        } 
    })// End Check Name Register


    // Check email-register
    var inputEmail = register.querySelector('input[type=email]')
    inputEmail.addEventListener('input', function (e) {
        var value = e.target.value;
        if(value !== '' && register.querySelector('input[type=password]').value == '') {
            this.classList.add('outline');
            document.querySelector('.input-register .text-error-email').innerText = 'Vui lòng nhập đúng định dạng email';
            register.querySelector('.text-error-password').innerText = 'Vui lòng nhập thông tin';
            register.querySelector('input[type=password]').classList.add('outline');
            document.querySelector('.register').style.height = '540px';
        }
        if(register.querySelector('input[type=password]').value !== '') {
            register.querySelector('.text-error-password').innerText = '';
        }
        if(value.includes('@') && value.lastIndexOf('@') !== (value.length - 1) && value.indexOf('@') > 2) {
            this.classList.remove('outline');
            this.classList.add('background');
            register.querySelectorAll('.text-error-email').forEach(function (item) {
                item.innerText = '';
            })
            
        }
    })


    // End Check Email register


    // Check PassWord Register

    // var iconPass = document.querySelectorAll(".icon-pass");
    var inputPass = document.querySelector('.input-register input[type=password]');

    inputPass.addEventListener('input', function (e) {
        if(e.target.value !== '') {
            inputPass.classList.remove('outline');
            register.querySelector('.text-error-password').innerText = 'Mật khẩu tối thiểu 6 - 20 ký tự';
            if(e.target.value.length >= 6) {
                register.querySelector('.text-error-password').innerText = '';
            }
            if(e.target.value.length >= 20) {
                register.querySelector('.text-error-password').innerText = 'Mật khẩu tối thiểu 6 - 20 ký tự';
            }
            document.querySelector('.register').style.height = '540px';
        } 
    })// End Check PassWord Register

    // Check Button

    // Đăng Ký
    var register = document.querySelector('.input-register')
    document.querySelector('.btn-register').addEventListener('click', function (e) {
        if(register.querySelector('input[type=email]').value === '' && register.querySelector('input[type=password]').value === ''&& register.querySelector('input[type=text]').value === '') {
            register.querySelector('input[type=text]').classList.add('outline');
            document.querySelector('.input-register .text-error-name').innerText = 'Vui lòng nhập thông tin';
            register.querySelector('input[type=email]').classList.add('outline');
            document.querySelector('.input-register .text-error-email').innerText = 'Vui lòng nhập thông tin';
            register.querySelector('.text-error-password').innerText = 'Vui lòng nhập thông tin';
            register.querySelector('input[type=password]').classList.add('outline');
            document.querySelector('.register').style.height = '550px';
        }
    })

})
// End Check Register





// Check tất cả các input khi bị xóa value thì hiện vui lòng nhập thông tin

var inputList = document.querySelectorAll('input');
inputList.forEach(function (item, index) {
    item.addEventListener('focus', function (e) {
        this.addEventListener('input', function (e) {
            if(e.target.value === '') {
                item.classList.add('outline');
                document.querySelectorAll('p[class^=text-error]')[index].innerText = 'Vui lòng nhập thông tin';
            }
        })
    })
}) 



// Check phần quên mật khẩu

document.querySelector('.forget-pass').addEventListener('click', function (e) {
    document.querySelector('.forget-pass-content').classList.toggle('none');
    document.querySelector('.login').classList.add('none');
    linkLogin.addEventListener('click',  function() {
        document.querySelector('.forget-pass-content').classList.add('none');
    })
    overlay.addEventListener('click', function() {
        document.querySelector('.forget-pass-content').classList.add('none');
    })
})


// Check Button

// Đăng Nhập
document.querySelector('.btn-login').addEventListener('click', function (e) {
    if(login.querySelector('input[type=email]').value === '' && login.querySelector('input[type=password]').value === '') {
        login.querySelector('input[type=email]').classList.add('outline');
        document.querySelector('.input-login .text-error-email').innerText = 'Vui lòng nhập thông tin';
        login.querySelector('.text-error-password').innerText = 'Vui lòng nhập thông tin';
        login.querySelector('input[type=password]').classList.add('outline');
        document.querySelector('.login').style.height = '520px';
    }
})

