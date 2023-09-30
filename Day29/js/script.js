var database = {
    modules : [
        'Nhập môn lập trình web',
        'Ngôn ngữ HTML',
        'Ngôn ngữ CSS',
        'Responsive Web Design',
        'Xây dựng dự án Nature từ A - Z',
        'Deployment Github - Server',
    ],

    lessons : [
        'Giới thiệu Khóa học HTML-CSS',
        'Nhập môn lập trình web - Phần 2',
        'Nhập môn lập trình web - Phần 1',
        'Công cụ - Phần mềm cần chuẩn bị',
        'HTML cơ bản - Phần 1',
        'HTML cơ bản - Phần 2',
        'Giới thiệu ngôn ngữ CSS - Cách viết CSS',
        'Cấu trúc CSS - Bộ chọn (Selector) trong CSS - Phần 1',
        'Bộ chọn CSS (Tiếp theo) - Các thuộc tính định dạng văn bản',
        'Chồng chéo CSS và thứ tự ưu tiên trong CSS',
        'Thuộc tính Background',
        'Thuộc tính Border',
        'Thuộc tính Width - Height',
        'Thuộc tính text-align',
        'Thuộc tính overflow',
        'Thuộc tính opacity',
        'Thuộc tính Padding - Margin',
        'Reset CSS - Tại sao Reset CSS lại quan trọng?',
        'Thuộc tính Float trong CSS',
        'Thuộc tính clear - Kỹ thuật clearfix',
    ]

};

var wrapper = document.querySelector('.wrapper');

// render Database
database.modules.forEach(function (_module, index) {
    var div = document.createElement('div');
    var span = document.createElement('span');
    var text = document.createTextNode(`Module: ${index + 1}: `);
    div.classList.add('active');
    div.classList.add('list-item');
    span.innerText = _module;
    div.append(text);
    div.append(span);
    wrapper.append(div);
});

database.lessons.forEach(function (lesson, index) {
    var div = document.createElement('div');
    var span = document.createElement('span');
    var text = document.createTextNode(`Bài: ${index + 1}: `);
    div.classList.add('list-item');
    span.innerText = lesson;
    div.append(text);
    div.append(span);
    wrapper.append(div);
});

var listItem = wrapper.querySelectorAll('.list-item');
var itemHeight = wrapper.querySelector('.list-item').clientHeight;
var listHidden = wrapper.querySelector('.list-hidden');
var isDrag = false;
var initialPositionX, initialPositionY;
var itemClick, indexItemClick;
var movePositionX, movePositionY;
var updateIndex, updatePosition;


listItem.forEach(function (item, index) {
    item.addEventListener('mousedown', function (e) {
        if(e.which === 1) {
            e.preventDefault();
            isDrag = true;
            initialPositionX = e.clientX;
            initialPositionY = e.clientY;
            itemClick = item;
            indexItemClick = index

            // if(item.classList.contains('active')) {
            //     listHidden.style.backgroundColor = `#FF6F00 !important`;

            // } else {
            //     listHidden.style.backgroundColor = '#4286F4 !important';
            // }


        }
    })
})


var handleListHidden = function (item, index) {
    listHidden.innerHTML = item.innerHTML;
    var positionTop = (itemHeight + 3) * index;
    listHidden.style.top = `${positionTop}px`;
    listHidden.style.left = `0px`;
}

document.addEventListener('mouseup', function (e) {
    isDrag = false;
    itemClick.classList.remove('ghost');
    // listHidden.style.top = `-9999px`;
    // listHidden.style.left = `-9999px`;
    if(movePositionX > 100 || movePositionY < itemHeight) {
        itemClick.style.top = `0px`;
        itemClick.style.left = `0px`;
    } else {
        itemClick.style.top = `${updatePosition}px`;
        itemClick.style.left = `0px`;
    }

    [listItem[updateIndex], listItem[indexItemClick]] = [listItem[indexItemClick], listItem[updateIndex]]

})


document.addEventListener('mousemove', function (e) {
    e.preventDefault();
    if(isDrag) {
        itemClick.classList.add('ghost');
        handleListHidden(itemClick, indexItemClick);

        handlerMove(itemClick, indexItemClick, e);

        updateMove();

    }
}) 


var handlerMove = function (item, index, e) {
    movePositionX = e.clientX - initialPositionX;
    movePositionY = e.clientY - initialPositionY;

    item.style.top = `${movePositionY}px`;
    item.style.left = `${movePositionX}px`;
}

var updateMove = function () {
    updateIndex = indexItemClick +  Math.floor(movePositionY / (itemHeight + 3));
    updatePosition = updateIndex * ((itemHeight + 3));
    listHidden.style.top = `${updatePosition}px`;

    listItem.forEach(function (item, index) {
        if(index === updateIndex && index !== indexItemClick) {
            item.style.top = `${-(itemHeight + 3)}px`; 
            item.style.left = `0px`;
        }
    })
}

