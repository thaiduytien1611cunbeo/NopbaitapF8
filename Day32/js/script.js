const counter = document.querySelector(".counter");
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
    console.log(cnt);
  }
  else btn.classList.add("action");

};

requestAnimationFrame(timer);

btn.addEventListener("click", function() {
    if (+counter.textContent === 0) {
        window.location.href='https://fullstack.edu.vn'
    };
});