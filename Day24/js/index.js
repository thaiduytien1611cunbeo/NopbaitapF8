var container = document.querySelector('.container');
var containerInput = container.querySelector('.container-input');
var input = containerInput.querySelector('.input');
var addBtn = containerInput.querySelector('.add');
var listTask = [], count = 0;


// ADD TASK
var addTask = function (value) {
    value = String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    if(value !== '') {
        listTask.push(`<div class="task task${count++}"><p class="task-text">${value}</p><div class="task-icon"><i class="fa-solid fa-pen-to-square square"></i><i class="fa-solid fa-trash trash"></i></div></div>`);
        document.querySelector('.list-task').innerHTML = listTask.join('') 
        input.value = '';
    }
}// END ADD TASK

// REMOVE TASK

var removeTask = function () {
    var contentTaskList = [];
    document.querySelectorAll('.task').forEach(function (item) {
        contentTaskList.push(item);
    })

    var trashList = [];
    document.querySelectorAll('.trash').forEach(function (item) {
        trashList.push(item);
    })

    trashList.forEach(function (item, index) {
        item.addEventListener('click', function (e) {
            listTask.splice(listTask.indexOf(contentTaskList[index].outerHTML), 1);
            contentTaskList[index].outerHTML = '';
        })
    })
}// END REMOVE TASK

// CHANGE TASK

var changeTask = function () {
    var contentTaskList = [];
    document.querySelectorAll('.task').forEach(function (item) {
        contentTaskList.push(item);
    })

    var squareList = [];
    document.querySelectorAll('.square').forEach(function (item) {
        squareList.push(item);
    })

    squareList.forEach(function (item, index) {
        item.addEventListener('click', function (e) {
            contentTaskList[index].outerHTML = `<div class="container-input"><input type="text" class="input" placeholder="Update Task"><span class="add">Add Task</span></div>`;

            var value;
            document.querySelector('.list-task .container-input .input').addEventListener('input', function (e) {
                value = e.target.value;
                value = String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
            });

            var listContainerInput = document.querySelectorAll('.list-task .container-input');
            var listBtn = document.querySelectorAll('.list-task .add');
            var listInput = document.querySelectorAll('.list-task .input');
            var eventChange = function (e) {
                listContainerInput.forEach(function (item) {
                    var content = `<div class="task task${count++}"><p class="task-text">${e.target.value}</p><div class="task-icon"><i class="fa-solid fa-pen-to-square square"></i><i class="fa-solid fa-trash trash"></i></div></div>`;
                     item.outerHTML = content;
                    listTask.splice(listTask.indexOf(contentTaskList[index].outerHTML), 1, content);
                    changeTask();
                    removeTask(); 
                    // addTask();
                })
            }

            listInput.forEach(function (item, index) {
                item.addEventListener('change', eventChange);

                // listInput[index].addEventListener('keydown', function (e) {
                //     if(e.key === 'Enter') {
                //         eventChange();
                //     }
                // })
            })
        })
    })
} // END CHANG TASK




addBtn.addEventListener('click', function (e) {
    var value = input.value;
    addTask(value);
    changeTask();
    removeTask();
});


input.addEventListener('keydown', function (e) {
    if(e.key === 'Enter') {
        var value = input.value;
        addTask(value);
        changeTask();
        removeTask(); 
    }
})






