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



// // End Check Email







// // Check Register



// // Check Email Register
