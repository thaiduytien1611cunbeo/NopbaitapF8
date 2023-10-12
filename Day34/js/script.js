const btn = document.querySelector('.btn');
const message = document.querySelector('.message');
const result = document.querySelector('.result');
const note = document.querySelector('.note');
const img = document.querySelector('.img');
let count = 0;
let isDrag = false, currentValue, isSuccess = true;


if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.lang = 'vi-VN';

    // ADD EVENT Click
    btn.addEventListener('click', function () {
        recognition.start();
        isDrag = false;
        message.innerText = 'Hãy nói nội dung bạn muốn';
        message.style.color = 'red';
    })

    // ADD event onresult
    recognition.onresult = function(event) {
        isDrag = true;
        result.classList.add('show');
        var value = event.results[0][0].transcript;
        currentValue = value
        result.innerHTML = `Đang thực hiện : <span class='text'>${value}</span>`;
    }

    recognition.onend = function () {
        if(isDrag === true) {
            message.innerText = 'Đã nói xong. Hy vọng kết quả như ý bạn';
            message.style.color = 'rgb(39, 39, 147)';
            note.innerText = `hehe Nạp thêm 10k để sử dụng tiếp dịch vụ`;
            
            handlerCurrentValue(currentValue);

            if(isSuccess) {
                result.innerHTML = `Đã thực hiện xong`;
                img.style.display = 'block';
            } else {
                result.innerHTML = `Không thực hiện được yêu cầu`
            }
        }
        
    }

} 
else {
    alert('Trình duyệt của bạn không hỗ trợ Web Speech API.');
}


const handlerCurrentValue = (currentValue) => {
    currentValue = (currentValue).trim().toLowerCase().replaceAll('.', '');

    switch (currentValue) {
        case 'google':
            window.open('https://www.google.com/')
            break;
        case 'facebook':
            window.open('https://www.facebook.com/')
            break;
        case 'youtube':
            window.open('https://www.youtube.com/')
            break;
        case 'google drive':
            window.open('https://drive.google.com/drive')
            break;
        case 'google maps': 
        case 'bản đồ':
            window.open('https://www.google.com/maps')
            break;


        case currentValue.includes('tới vinhomes smart city') ? currentValue : undefined : 
            window.open('https://www.google.com/maps/search/vinhomes+smart+city+t%C3%A2y+m%E1%BB%97/@21.0041336,105.745652,16z/data=!3m1!4b1?entry=ttu')
            break;
        case currentValue.includes('mở video') ? currentValue : undefined :
            var value = currentValue.slice(('mở video').length).trim();
            window.open(`https://www.youtube.com/results?search_query=${value}`)
            break;
        case currentValue.includes('mở bài hát') ? currentValue : undefined :
            var value = currentValue.slice(('mở bài hát').length).trim();
            window.open(`https://zingmp3.vn/tim-kiem/tat-ca?q=${value}`)
            break;

        default:
            isSuccess = false;
            break;
    }
}
