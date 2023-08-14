var content = `Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, aliquid voluptatem corrupti quidem consequatur accusamus in qui quis, aperiam libero rem. Necessitatibus repudiandae excepturi nobis nihil quidem officiis, obcaecati sit?`;

var newContent = `${content} `; // Em tạo 1 content mới để cắt từng từ của content

var position = 0; // vị trí mình sẽ cắt từ bôi đỏ tiếp theo
var result; // cập nhập đáp án hiện tại
var index = 0; // cập nhập vị trí của positon trong String content

function myStep() {
    position = newContent.indexOf(" "); 

    result = content.slice(0, index) + ` <span style="color: #f1d667a2; background-color: #16A085;  border-radius: 3px;">${newContent.slice(0, position)}</span> ` + newContent.slice(position + 1, newContent.length);
    console.log(result);
    newContent = newContent.slice(position + 1); 

    index += position + 1;
    
    // Cập nhật lặp lại để chữ nhảy từ cuối lên đầu
    if (position === -1) {
        position = 0;
        newContent = `${content} `; 
        index = 0;
    }
    document.getElementById("demo").innerHTML = result;
}

// window.onload = myTimer;

var myInterval = setInterval(myStep, 500);

function myStop() {
    clearInterval(myInterval);
  }