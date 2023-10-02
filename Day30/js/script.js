var content = document.querySelector('div.content');
var listBtn = document.querySelectorAll('.menu-controls-container .btn');

// edit Text
listBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        var elName = btn.getAttribute('data-el');
        if(elName === 'i') {
            document.execCommand("italic", false, "")
        } else if(elName === 'b') {
            document.execCommand( "bold", false, "" );
        } else if(elName === 'u') {
            document.execCommand("underline", false, "")
        }
        
    })
})

//edit Color
var ipColor = document.querySelector('.ip-color');
ipColor.addEventListener('change', function (e) {
    var color = e.target.value;
    console.log(color);
    document.execCommand('styleWithCSS', false, true);
    document.execCommand("foreColor", false, color)
})


// Counting word and characters
var characters = document.querySelector('.var-count').children[0];
var words = document.querySelector('.var-count').children[1];

var count = document.createTextNode('0');
characters.append(count);
var count = document.createTextNode('0');
words.append(count);

var countCharacters, countWords;
content.addEventListener('input', function (e) {
    var value = this.textContent;

    // đếm số kí tự
    countCharacters = value.length;
    characters.removeChild(characters.childNodes[1]);
    var count = document.createTextNode(countCharacters);
    characters.append(count);

    // đếm số từ
    countWords = value.trim().replace(/\s+/g, ' ').split(' ').length;
    if(value === '') {
        countWords = 0;
    }

    words.removeChild(words.childNodes[1]);
    var count = document.createTextNode(countWords);
    words.append(count);
})

// reset style CSS WHen paste content 
content.addEventListener('paste', function (e) {
    e.preventDefault();

  let paste = (e.clipboardData || window.clipboardData).getData("text");
  const selection = window.getSelection();
  if (!selection.rangeCount) return;
  selection.deleteFromDocument();
  selection.getRangeAt(0).insertNode(document.createTextNode(paste));
  selection.collapseToEnd();
})



// handle btn-file
var btnFile = document.querySelector('.btn-file');
var boxList = document.querySelector('.boxed-list-item');

var handleBox = function (e) {
    e.stopPropagation();
    boxList.classList.toggle('none');
    boxList.classList.toggle('flex');
}
btnFile.addEventListener('click', handleBox);
document.addEventListener('click', function () {
    boxList.classList.add('none');
    boxList.classList.remove('flex');
});

// handle save file
var newFile = boxList.children[0];
var saveTxt = boxList.children[1];
var savePdf = boxList.children[2];
var nameFileInput = document.querySelector('.name-file');
var nameFile = nameFileInput.value;
nameFileInput.addEventListener('change', function (e) {
    nameFile = e.target.value;
})

newFile.addEventListener('click', function () {
    content.textContent = '';
    handleBox();
})

saveTxt.addEventListener('click', function () {
    var blob = new Blob(["This is a sample file content."], {
        type: "text/plain;charset=utf-8",
    });
    saveAs(blob, `${nameFile}.txt`);
    handleBox();
})

savePdf.addEventListener('click', function () {
    var element = document.getElementById('element-to-print');
    var opt = {
        margin:       1,
        filename:     `${nameFile}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
    handleBox();
})