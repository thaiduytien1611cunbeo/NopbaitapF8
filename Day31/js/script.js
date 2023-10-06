var listTabItem = document.querySelectorAll('.tab-item');
var listTabPane = document.querySelectorAll('.tab-pane');
var line = document.querySelector('.line');


listTabItem.forEach(function (item, index) {
    item.addEventListener('click', function (e) {

        listTabItem.forEach(function (_item, _index) {
            if(_item.classList.contains('active')) {
                _item.classList.remove('active');
                listTabPane[_index].classList.remove('active');
            }
        })

        this.classList.add('active');
        listTabPane[index].classList.add('active');

        line.style.width =  this.clientWidth + 'px';
        line.style.left = this.offsetLeft + 'px';
    });
})

line.style.width =  listTabItem[0].clientWidth + 'px';