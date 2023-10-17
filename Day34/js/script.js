const btnCompleted = document.querySelector('.btn_completed');
const listItems = document.querySelector('.list_items');
const listItemsSuccess = document.querySelector('.list_items_success');
const counterItemsSuccess = document.querySelector('.btn_completed .text .counter');
const addTodo = document.querySelector('.search .search-btn');
const searchInput = document.querySelector('.search .search-input .input');
const overlay = document.querySelector('.overlay');

const boxAddTodo = document.querySelector('.box_add-todo');
const btnCancelAdd = boxAddTodo.querySelector('.list-btn .btn:last-child');
const btnSaveAdd = boxAddTodo.querySelector('.list-btn .btn:first-child');

const boxEditTodo = document.querySelector('.box_edit-todo');
const btnCancelEdit = boxEditTodo.querySelector('.list-btn .btn:last-child');
const btnSaveEdit = boxEditTodo.querySelector('.list-btn .btn:first-child');


// show todo completed
btnCompleted.addEventListener('click', function (e) {
    btnCompleted.classList.toggle('active');
    listItemsSuccess.classList.toggle('hidden');
})

const toggleOverlay = () => {
    overlay.classList.toggle('show_overlay');
    boxAddTodo.classList.toggle('hidden');
}

addTodo.addEventListener('click', toggleOverlay)
btnCancelAdd.addEventListener('click', toggleOverlay)

btnCancelEdit.addEventListener('click', function () {
    overlay.classList.toggle('show_overlay');
    boxEditTodo.classList.toggle('hidden');
})



// handler data from API
const serverApi = `https://nk7sd7-8080.csb.app`;
fetch(`${serverApi}/todo`).then((response) => {
    return response.json();
}).then(todo => {
    render(todo);
    saveElement(todo);
})


//Render
const render = (todo) => {
    todo.forEach((element) => {
        addElement(element.name, element.completed, +element.id);
    });
}
counterItemsSuccess.innerText = 0;


// ADD Event BTN
const addEventBtn = (element) => {
    
    const btnDelete = element.querySelector('.list_icon .icon-delete');
    btnDelete.addEventListener('click', deleteElement)

    const btnEdit = element.querySelector('.list_icon .icon-edit');
    btnEdit.addEventListener('click', function () {
        overlay.classList.toggle('show_overlay');
        boxEditTodo.classList.toggle('hidden');
    })

    const btnCompleted = element.querySelector('.list_icon .icon-completed');
    btnCompleted.addEventListener('click', completedElement)

}

// ADD Element
const addElement = (value, completed, id) => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.setAttribute('data-id', `${id}`);
    div.setAttribute('data-completed', `${completed}`);
    div.innerHTML = `
    <h2 class="title">${value}</h2>

    <div class="list_icon">
        <button class="icon icon-delete">
            <i class="fa-solid fa-trash"></i>
        </button>
        <button class="icon icon-edit">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="icon icon-completed">
            <i class="fa-solid fa-calendar-check"></i>
        </button>
    </div>
    `;

    addEventBtn(div);

    if(completed) {
        listItemsSuccess.append(div);
        counterItemsSuccess.innerText++;
    } else {
        listItems.append(div);
    }
}


// SAVE Element
const saveElement = (todo) => {
    btnSaveAdd.addEventListener('click', function (e) {
        if(e.which === 1) {
            const inputAddTodo = boxAddTodo.querySelector('.input');
            const value = inputAddTodo.value.trim();
            const id = todo[todo.length - 1]?.id + 1;
            if(value) {
                inputAddTodo.value = '';
                overlay.classList.toggle('show_overlay');
                boxAddTodo.classList.toggle('hidden');

                addElement(value, false, id);
                postTodo({
                    "name": `${value}`,
                    "completed": false,
                })
            }
        }
    })
}


// POST todo
const postTodo = async (data) => {
    const response = await fetch(`${serverApi}/todo`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

// Delete todo
const delTodo = async (id) => {
    const response = await fetch(`${serverApi}/todo/${id}`, {
        method: "DELETE",
    });
    const json = await response.json();
    console.log(json);
}

// completed todo
const completedTodo = async (id, value) => {
    const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "completed": value,
        }),
    };

    const response = await fetch(`${serverApi}/todo/${id}`, options);
    const json = await response.json();
    console.log(json);
}

// edit todo
const editTodo = async (id, value) => {
    const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "name": value,
        }),
    };

    const response = await fetch(`${serverApi}/todo/${id}`, options);
    const json = await response.json();
    console.log(json);
}


// DELETE Element
const deleteElement = function (e) {
    if(e.which === 1) {
        const id = +this.parentNode.parentNode.getAttribute('data-id');

        if(this.parentNode.parentNode.getAttribute('data-completed') === 'true') {
            console.log(1);
            counterItemsSuccess.innerText--;
        }

        delTodo(id);
        this.parentNode.parentNode.remove();
    }
}

// COMPLETED Element
const completedElement = function (e) {
    if(e.which === 1) {
        const id = +this.parentNode.parentNode.getAttribute('data-id');

        const node = this.parentNode.parentNode.cloneNode(true);
        addEventBtn(node);
        
        this.parentNode.parentNode.remove();

        if(node.getAttribute('data-completed') === 'true') {
            completedTodo(id, false);
            node.setAttribute('data-completed', false)
            listItems.append(node);
            counterItemsSuccess.innerText--;
        } else {
            completedTodo(id, true);
            node.setAttribute('data-completed', true)
            listItemsSuccess.append(node);
            counterItemsSuccess.innerText++;
        }
    }
}

// EDIT Element
const editElement = function (e) {
    overlay.classList.toggle('show_overlay');
    boxEditTodo.classList.toggle('hidden');
    if(e.which === 1) {
        const id = +this.parentNode.parentNode.getAttribute('data-id');
        const value = boxEditTodo.querySelector('.input').value;
        
        editTodo(id, value);
        this.parentNode.parentNode.title.innerText = value;
    }
}


btnSaveEdit.addEventListener('click', editElement)