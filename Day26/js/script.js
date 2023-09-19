// creater Elemnt

var progressBar = document.querySelector('.progress-bar')
var progress = progressBar.querySelector('.progress');
var progressSpan = progress.querySelector('span');
var progressBarWidth = progressBar.clientWidth;
var value;
var initialClientX, currentValue = 0;


progressBar.addEventListener('mousedown', function(e) {
    if(e.which === 1) {
        value = (e.offsetX) / progressBarWidth * 100;
        progress.style.width = `${value}%`;
        document.addEventListener('mousemove', handlerDrag);
        initialClientX = e.clientX;
        currentValue = value;
    }
})

progressSpan.addEventListener('mousedown', function (e) {
    e.stopPropagation();
    initialClientX = e.clientX;
    document.addEventListener('mousemove', handlerDrag)
})

document.addEventListener('mouseup', function (e) {
    document.removeEventListener('mousemove', handlerDrag);
    audio.addEventListener('timeupdate', updateTime);
    currentValue = value;
    audio.currentTime = (audio.duration * value) / 100;
});

var handlerDrag = function (e) {
    var moveWidth = e.clientX - initialClientX;
    value = moveWidth / progressBarWidth * 100 + currentValue;
    if(value < 0)  value = 0;
    if (value > 100) value = 100;
    progress.style.width = `${value}%`;
    audio.removeEventListener('timeupdate', updateTime);
}


// ADD audio

var audio = document.querySelector('.audio');
var currentTimeEl = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;
var playBtn = document.querySelector('.player .btn-toggle-play');
var playIcon = `<i class="fa-solid fa-play"></i>`;
var pauseIcon = `<i class="fa-solid fa-pause"></i>`;
var timeHover = progressBar.querySelector('.time-hover');


var getTime = function (seconds) {
    if(seconds === 0) return '';
    var mins = Math.floor(seconds/60);
    seconds = Math.floor(seconds - mins * 60);
    return `${mins < 10 ? '0' + mins : mins}:${seconds < 10 ? '0' + seconds : seconds}`
}


// Lắng nghe event loaded data -> Khi nào file tải xong
audio.addEventListener('loadeddata', function (e) {
    durationEl.innerText = getTime(this.duration);
    currentTimeEl.innerText = '00:00';
})

// Click vào để phát nhạc
playBtn.addEventListener('click', function () {
    handlerPlay();
})
document.addEventListener('keydown', function (e) {
    if(e.key === ' ') handlerPlay();
})

var handlerPlay = function () {
    if(audio.paused) {
        audio.play();
        playBtn.innerHTML = pauseIcon;
    } else {
        audio.pause();
        playBtn.innerHTML = playIcon;
    }
}

audio.addEventListener('play', function () {
    playBtn.innerHTML = pauseIcon;
})

audio.addEventListener('pause', function () {
    playBtn.innerHTML = playIcon;
})

var updateTime = function () {
    currentTimeEl.innerText = getTime(this.currentTime);
    value = audio.currentTime * 100 / audio.duration;
    progress.style.width = `${value}%`;
}
audio.addEventListener('timeupdate', updateTime)

// Tua audio
progressBar.addEventListener('mousedown', function(e) {
    audio.currentTime = audio.duration * value / 100;
})


// Check Time
var valueTime;
progressBar.addEventListener('mousemove', function (e) {
    timeHover.style.display = 'inline';
    var offsetX = e.offsetX;
    if(offsetX < 20) offsetX = 0
    valueTime = offsetX / progressBarWidth * 100;
    timeHover.style.left = `${valueTime}%`;
    timeHover.innerText = `${getTime(valueTime * audio.duration / 100)}`;
})

progressBar.addEventListener('mouseout', function (e) {
    timeHover.innerText = '';
})

progressSpan.addEventListener('mouseout', function (e) {
    e.stopPropagation();
})

timeHover.addEventListener('mousemove', function (e) {
    e.stopPropagation();
})

audio.addEventListener('ended', function (e) {
    audio.currentTime = 0.01;
})




// xử lý phần box
// Chữ chạy
var titleBox = document.querySelector('.title-box');
var lengthContent = titleBox.innerHTML.length;
titleBox.innerHTML = titleBox.innerHTML.split('').map(function (word) {
    return `<span>${word}</span>`;
}).join('');
var runString = function () {
    var count = 0;
    setInterval(function () {
        var value = count % (lengthContent);
        count++;
        console.log(value);
        titleBox.children[value].style.color = '#3BAFD9';
        titleBox.children[value].style.fontSize = '30px';
        if(value === 0) {
            titleBox.children[lengthContent - 1].style.color = 'black';
            titleBox.children[lengthContent - 1].style.fontSize = '20px';
        } else {
            titleBox.children[value - 1].style.color = 'black';
            titleBox.children[value - 1].style.fontSize = '20px';
        }
    }, 500)
};
runString();


// img quay
var count = 0;
setInterval(function () {
    count++;
    var imgBox = document.querySelector('.img-box');
    imgBox.style.transform = `rotate(${count}deg)`;
}, 10);


// Next bai
var btnNext = document.querySelector('.btn-next');
var btnPrev = document.querySelector('.btn-prev');
var listSrc = [
    'mp3/KeoEmVeLamVo.mp3',
    'mp3/moneytema.mp3',
    'mp3/nguoiDuocChon.mp3',
    'mp3/RollingDown.mp4'
];
var listImg = [
    'images/keoemvelamvo.jpg',
    'images/moneyteam.jpg',
    'images/nguoiduochon.jpg',
    'images/rollingdown.jpg',
]
var listName = [
    'Kéo Em Về Làm Vợ',
    'Da Money Team',
    'Người Được Chọn',
    'Rolling Down',
]

btnNext.addEventListener('click', function (e) {
    audio.addEventListener('loadeddata', function (e) {
        durationEl.innerText = getTime(this.duration);
    })
    var random = Math.floor(Math.random() * (listSrc.length));
    document.querySelector('.img-box').setAttribute('src', `${listImg[random]}`);
    document.querySelector('.audio').setAttribute('src', `${listSrc[random]}`);
    document.querySelector('.title-box').innerText = `${listName[random]}`
    audio.currentTime = 0.01;
    audio.play();
})
btnPrev.addEventListener('click', function (e) {
    audio.addEventListener('loadeddata', function (e) {
        durationEl.innerText = getTime(this.duration);
    })
    if(audio.currentTime < 0.3) audio.currentTime = 0.01; 
    else {
        var random = Math.floor(Math.random() * (listSrc.length));
        document.querySelector('.img-box').setAttribute('src', `${listImg[random]}`);
        document.querySelector('.audio').setAttribute('src', `${listSrc[random]}`);
        document.querySelector('.title-box').innerText = `${listName[random]}`
        audio.currentTime = 0.01;
        audio.play();
    }
})

btnNext.addEventListener('mousemove', function (e) {
    btnNext.style.userSelect = 'none';
    e.stopPropagation();
})
btnPrev.addEventListener('mousemove', function (e) {
    btnPrev.style.userSelect = 'none';
    e.stopPropagation();
})