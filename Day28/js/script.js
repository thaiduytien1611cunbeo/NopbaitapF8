var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

//Yêu cầu: Chuyển đổi hết thành phần trăm (%)

var handleUpdateValue = function (value) {
  progress.style.width = `${value}%`;
};

//Tính độ dài của progress-bar
var progressBarWidth = progressBar.clientWidth;
var isDrag = false; //Cắm cờ
var initialClientX;
var initialValue = 0;
var value;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;
    value = (offsetX * 100) / progressBarWidth;
    initialValue = value;
    initialClientX = e.clientX;
    isDrag = true;
    handleUpdateValue(value);

    var currentTime = (value / 100) * audio.duration;

    currentTimeEl.innerText = getTime(currentTime);

    audio.currentTime = currentTime;
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    isDrag = true;
    initialClientX = e.clientX;
  }
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var moveWidth = e.clientX - initialClientX;
    value = (moveWidth * 100) / progressBarWidth;
    value = initialValue + value;

    if (value < 0) {
      value = 0;
    }

    if (value > 100) {
      value = 100;
    }

    handleUpdateValue(value);

    var currentTime = (value / 100) * audio.duration;

    currentTimeEl.innerText = getTime(currentTime);

    timePreview.classList.remove("show");
    timePreview.innerText = 0;
    timePreview.style.left = 0;
  }
});

document.addEventListener("mouseup", function () {
  if (isDrag) {
    isDrag = false;
    initialValue = value;

    var currentTime = (value / 100) * audio.duration;
    audio.currentTime = currentTime;
  }
});

progressSpan.addEventListener("mousemove", function (e) {
  e.stopPropagation();
});

//Xây dựng trình phát nhạc
var audio = document.querySelector(".audio");

var durationEl = progressBar.nextElementSibling;

var currentTimeEl = progressBar.previousElementSibling;

var playBtn = document.querySelector(".play-btn");

var pauseBtnIcon = `<i class="fa-solid fa-pause"></i>`;

var playBtnIcon = `<i class="fa-solid fa-play"></i>`;

var timePreview = progressBar.querySelector(".time-preview");

var getTime = function (seconds) {
  //Giây => Phút và giây
  var mins = Math.floor(seconds / 60);
  seconds -= mins * 60;
  seconds = Math.floor(seconds);

  return `${mins < 10 ? `0${mins}` : mins}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};
//Lắng nghe sự kiện load xong nhạc
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseBtnIcon;
  } else {
    audio.pause();
    this.innerHTML = playBtnIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  //Lấy ra tỷ lệ phần trăm dựa vào currentTime và duration
  var value = (audio.currentTime * 100) / audio.duration;

  if (!isDrag) {
    currentTimeEl.innerText = getTime(audio.currentTime);

    handleUpdateValue(value);
  }
});

progressBar.addEventListener("mousemove", function (e) {
  timePreview.classList.add("show");
  var rate = (e.offsetX * 100) / progressBarWidth;
  var currentTime = (rate / 100) * audio.duration;
  timePreview.innerText = getTime(currentTime);
  timePreview.style.left = `${e.offsetX}px`;
});

progressBar.addEventListener("mouseout", function () {
  timePreview.classList.remove("show");
  timePreview.innerText = 0;
  timePreview.style.left = 0;
});

audio.addEventListener("ended", function () {
  playBtn.innerHTML = playBtnIcon;
  handleUpdateValue(0);
  audio.currentTime = 0;
});

audio.addEventListener("play", function () {
  playBtn.innerHTML = pauseBtnIcon;
});

audio.addEventListener("pause", function () {
  playBtn.innerHTML = playBtnIcon;
});

// End player

// Karaoke slip
var wrapperKara = document.querySelector('.wrapper-kara');
var btnMicro = document.querySelector('.micro-btn');
var btnSlip = wrapperKara.querySelector('.btn-slip');

btnMicro.addEventListener('click', function () {
    wrapperKara.classList.toggle('slip');
    btnSlip.classList.add('appear');
    if(!wrapperKara.classList.contains('slip')) {
        btnSlip.classList.remove('appear');
    } else {
        karaoke();
    }
})

btnSlip.addEventListener('click', function (e) {
    wrapperKara.classList.remove('slip');
    btnSlip.classList.remove('appear');
})

// Karaoke Lyric
var karaLyric = wrapperKara.querySelector('.kara-lyric');
var karaTitle = wrapperKara.querySelector('.kara-title');
var listSentences = Array.from(lyric.data.sentences);
var firstSentence = karaTitle.children[0];
var lastSentence = karaTitle.children[1];

var listTimeStart = listSentences.map(function (sentence) {
    return sentence.words[0].startTime;
});
var listTimeEnd = listSentences.map(function (sentence) {
    return sentence.words[sentence.words.length - 1].endTime;
});

var listWords = listSentences.map(function (sentence) {
    return sentence.words.map(function (word) {
        return word.data;
    }).join(' ');
});

// karaoke

var karaoke = function () {

    // create lyric
    listWords.forEach(function (sentence) {
        var p = document.createElement('p');
        p.innerText = `${sentence}`;
        karaLyric.append(p);
    })


    // change color
    audio.addEventListener('timeupdate', function (e) {
        var time = e.target.currentTime * 1000;
        var valueBottom = 0;
        if(time < listTimeStart[0]) {
            firstSentence.innerText = `Bài hát: ${lyric.name[0]}`;
            lastSentence.innerText = `Ca sĩ: ${lyric.name[1]}`;
        } else {
            karaTitle.classList.add('none');
            karaLyric.classList.remove('none');
            var indexSentence;
            var check = 0;
            for(var i = 0; i < listTimeStart.length; i++) {
                if(time > listTimeStart[i]) {
                    indexSentence = i;
                    check = 1;
                    if(indexSentence > 2) {
                        karaLyric.children[indexSentence - 2].style.color = 'white';
                    }
                } else {
                    break;
                }
            }


            if(check === 1) {
                karaLyric.children[indexSentence].style.color = 'yellow';
                karaLyric.children[indexSentence + 1].style.color = 'rgba(255, 255, 255, 0.493)';
                karaLyric.children[indexSentence + 2].style.color = 'rgba(255, 255, 255, 0.2)';
                karaLyric.children[indexSentence + 3].style.color = 'rgba(255, 255, 255, 0.1)';
                karaLyric.children[indexSentence - 1].style.color = 'rgba(255, 255, 255, 0.493)';
            }

            if(indexSentence >= 1) {
                valueBottom = karaLyric.children[0].clientHeight * (indexSentence - 1);
                karaLyric.style.bottom = `${valueBottom}px`;
            }
            

            if(listTimeStart[indexSentence + 1] - listTimeEnd[indexSentence] >= 5000) {
                if(time >= (listTimeEnd[indexSentence] + 1000)) {
                    karaTitle.classList.remove('none');
                    karaLyric.classList.add('none');
                    firstSentence.innerText = `Bài hát: ${lyric.name[0]}`;
                    lastSentence.innerText = `Ca sĩ: ${lyric.name[1]}`;
                }
            } 
            // else {
            //     karaTitle.classList.add('none');
            //     karaLyric.classList.remove('none');
            // }
        }
    });
}

var handlerWord = function (word) {
    
}

// document.createElement('span')
