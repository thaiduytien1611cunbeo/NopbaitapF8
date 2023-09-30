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
    div.setAttribute('draggable', 'true');
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
    div.setAttribute('draggable', 'true');
    span.innerText = lesson;
    div.append(text);
    div.append(span);
    wrapper.append(div);
});




var wrapper = document.querySelector('.wrapper');
var listItem = wrapper.children;
listItem = Array.from(listItem);
var listHidden, indexStart, currentIndex;


// listItem.


listItem.forEach(function (item, index) {
    item.addEventListener('dragstart', function (e) {
        listHidden = this;
        listHidden.style.opacity = '0.4';
        indexStart = index;
    })

    item.addEventListener('dragover', function (e) {
        e.preventDefault();
        currentIndex = index;
    })

    item.addEventListener('dragenter', function (e) {
        if(indexStart <= currentIndex) {
            wrapper.insertBefore(listHidden, this.nextElementSibling);
        } else {
            wrapper.insertBefore(listHidden, this);
        }
    })
    
    item.addEventListener('drop', function (e) {
        listHidden.style.opacity = '';
    })

    item.addEventListener('dragend', function (e) {
        item.style.opacity = '';
        handleCount(wrapper)
    })
})



var handleCount = function (wrapper) {
    
    var countModule = 1;
    var countLesson = 1;
    
    Array.from(wrapper.children).forEach(function (item) {
        if(item.classList.contains('active')) {
            console.log(1);
            var text = document.createTextNode(`Module: ${countModule}: `);
            countModule++;
        } else {
            var text = document.createTextNode(`Lesson: ${countLesson}: `);
            countLesson++;
        }
        

        item.replaceChild(text, item.childNodes[0]); 
        
    });

}