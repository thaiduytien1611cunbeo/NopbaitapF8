const preventSubmit = function () {
  document.addEventListener("submit", function (e) {
    e.preventDefault();
  });
};

preventSubmit();
