var inputListLogin = document.querySelectorAll('.input-login input');
inputListLogin.forEach(function (item) {
    item.addEventListener('input', function (e) {
        inputListLogin.forEach(function (newItem) {
            newItem.classList.add('outline');
        })
        document.querySelectorAll('p[class^=text-error]').forEach(function (item) {
            item.innerText = 'Vui lòng nhập thông tin';
        })
        document.querySelector('.login').style.height = '510px';
    })
})

// // Check login

// // Check email-login

var login = document.querySelector('.input-login')
var inputEmail = login.querySelector('input[type=email]');

inputEmail.addEventListener('blur', function (e) {
    login.querySelectorAll('input').forEach(function (item) {
        item.classList.add('outline');
    })
    login.querySelectorAll('p[class^=text-error]').forEach(function (item) {
        item.innerText = 'Vui lòng nhập thông tin';
    })
    document.querySelector('.login').style.height = '520px';
})

inputEmail.addEventListener('input', function (e) {
    var value = e.target.value;
    if(login.querySelector('input[type=password]').value !== '') {
        login.querySelector('.text-error-password').innerText = '';
    }
    if(value.includes('@') && value.indexOf('@') > 2) {
        this.classList.remove('outline');
        this.classList.add('background');
        login.querySelectorAll('.text-error-email').forEach(function (item) {
            item.innerText = '';
        })
        
    }
})

// // End Check Email







// // Check Register



// // Check Email Register
