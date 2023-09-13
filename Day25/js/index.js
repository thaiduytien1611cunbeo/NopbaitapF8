// Tạo các Elemment
var carousel = document.querySelector('.carousel');
var carouselInner = carousel.querySelector('.carousel-inner');
var carouselItem = carouselInner.children;

var carouselNextBtn = carousel.querySelector('.carousel-nav .next');
var carouselPrevBtn = carousel.querySelector('.carousel-nav .prev');
var carouselCheck = carousel.querySelector('.carousel-check');



// Tính kích thước 1 item
var itemWidth = carouselInner.clientWidth; // Lấy width của 1 item

// Tính tổng kích thước item
var totalWidth = carouselItem.length * itemWidth;

carouselInner.style.width = `${totalWidth}px`;

// Next slide
var position = 0;
carouselNextBtn.addEventListener('click', function (e) {
    if(-position < totalWidth - itemWidth) {
        position -= itemWidth;
        carouselInner.style.translate = `${position}px`;
    }
    checkPosition(position);
    return;
})

// prev Slide
carouselPrevBtn.addEventListener('click', function (e) {
    if(position < 0) {
        position += itemWidth;
        carouselInner.style.translate = `${position}px`;
    }
    checkPosition(position);
    return;
})

// Add Checkbox
for (let index = 0; index < carouselItem.length; index++) {
    carouselCheck.innerHTML += '<span></span>';
}

// Check Slide
var carouselCheckItem = carouselCheck.querySelectorAll('span');
carouselCheckItem.forEach(function (item, index) {
    item.addEventListener('click', function (e) {
        carouselCheckItem.forEach(function (element) {
            element.style.background = 'white';
        })
        position = -(itemWidth * index);
        carouselInner.style.translate = `${position}px`;
        item.style.background = 'yellow';
    })
})

var checkPosition = function (position) {
    carouselCheckItem.forEach(function (element) {
        element.style.background = 'white';
    })
    carouselCheckItem.forEach(function (item, index) {
        if(position === -(itemWidth * index)) item.style.background = 'yellow';
    })
}
checkPosition(position);


// Claw Slide


carouselInner.addEventListener('mousedown', function (e) {
    var clientX = e.clientX;
    var newPosition = position;
    var positionMin;

    var handler = function (e) {
        carouselInner.style.transition = 'translate 0s linear'
        var newClientX = e.clientX;
        positionMin = Math.abs(clientX - newClientX);
        if(newPosition - (clientX - newClientX) < 150 && newPosition - (clientX - newClientX) > itemWidth - totalWidth - 150) {
            position = newPosition - (clientX - newClientX);
            if(Math.abs(clientX - newClientX) > itemWidth / 10) {
                if(clientX - newClientX > 0) {
                    position = newPosition - itemWidth;
                }
                else position = newPosition + itemWidth;
                carouselInner.style.transition = 'translate 0.4s linear';
                carouselInner.removeEventListener('mousemove', handler);
                checkPosition(position);
            }
        }
        carouselInner.style.translate = `${position}px`;
    }

    carouselInner.addEventListener('mousemove', handler)
    carouselInner.addEventListener('mouseup', function () {
        carouselInner.style.transition = 'translate 0.4s linear'
        if(positionMin < itemWidth / 10) {
            position = newPosition;
            carouselInner.style.translate = `${position}px`;
        }
        if(position > 0) {
            position = 0;
            carouselInner.style.translate = `${position}px`;
        }
        if(position < itemWidth - totalWidth) {
            position = itemWidth - totalWidth;
            carouselInner.style.translate = `${position}px`;
        }
        carouselInner.removeEventListener('mousemove', handler)
    })
})
