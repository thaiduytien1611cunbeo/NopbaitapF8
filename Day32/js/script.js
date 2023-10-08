const counter = document.querySelector(".counter");
counter.innerText = 2;
const btn = document.querySelector(".btn");

let startTime;
let cnt = 0;

const timer = function (currentTime) {
    if (!startTime)  startTime = currentTime;

    const elapsed = currentTime - startTime;
        

    if (elapsed >= 1000) {
        counter.textContent--;
        startTime = currentTime;
    };

    if(+counter.textContent > 0) {
        requestAnimationFrame(timer);
        cnt++;
    }
    else checkClick(btn);
};

requestAnimationFrame(timer);

function checkClick(btn) {
    if (+counter.textContent === 0) {
        btn.removeAttribute('disabled'); 
        btn.classList.add("action");
        btn.addEventListener("click", function() {
            window.location.href='https://fullstack.edu.vn'; 
        });
    };
}

document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
      console.log("Tab không còn hiển thị");
    } else {
      console.log("Tab đang hiển thị");
    }
});