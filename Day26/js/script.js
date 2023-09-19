// creater Elemtn

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
    console.log(1);
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
var playBtn = document.querySelector('.player .play-btn');
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



// Next bai
var btn = document.querySelector('.btn');
var listSrc = [
    'mp3/KeoEmVeLamVo.mp3',
    'mp3/moneytema.mp3',
    'mp3/nguoiDuocChon.mp3',
    'mp3/RollingDown.mp4'
];


btn.addEventListener('click', function (e) {
    audio.addEventListener('loadeddata', function (e) {
        durationEl.innerText = getTime(this.duration);
    })
    var random = Math.floor(Math.random() * (listSrc.length));
    document.querySelector('.audio').setAttribute('src', `${listSrc[random]}`);
    audio.currentTime = 0.01;
    audio.play();
})

btn.addEventListener('mousemove', function (e) {
    btn.style.userSelect = 'none';
    e.stopPropagation();
})

