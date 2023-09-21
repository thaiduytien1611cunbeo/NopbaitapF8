// Create DataBase
var root = document.querySelector('.root');
var cart = root.querySelector('.cart');
var footer = cart.querySelector('.footer');
var tbody = cart.querySelector('tbody');
var listIdCart = [];

var Table = function (name, price) {
    this.name = name;
    this.price = price;
}

var tableContent = [];
var quantityPr = 4;
var quantity = 0, totalMoney = 0;
for(var i = 1; i <= quantityPr; i++) {
    var product = new Table(`Product ${i}`, i * 1000);
    product.id = i;
    product.stt = i;
    tableContent.push(product);
}

var table = document.querySelector('.table');

var handleTable = function (table, id, stt, name, price) {
    var tr = document.createElement('tr');
    tr.innerHTML = `<td style="width: 8%;">${stt}</td><td style="width: 70%;">${name}</td><td>${price}</td>`;

    var tdInput = document.createElement('td');
    tdInput.style.width = '10%';

    var input = document.createElement('input');
    input.type = 'number';
    input.value = 1;

    var button = document.createElement('button');
    button.className = 'btn';
    button.style.width = '100%';
    button.innerText = 'Add to Basket';

    tdInput.append(input);
    tdInput.append(button);
    tr.append(tdInput);
    table.append(tr);
    var inputEl = tdInput.querySelector('input');
    // var buttonEl = tdInput.querySelector('button');

    var handleCart = function () {
        // Displays the dialog box
        root.style.display = '';
        document.querySelector('.text').style.display = 'none';
        
        // End Displays the dialog box


        // ADD PRODUCT
        if(!listIdCart.includes(id)) {
            listIdCart.push(id);  // push Go to an array to check if that product exists or not
            
            if(inputEl.value <= 0) {
                inputEl.value = 1;
            } // Check quantity input

            // Create tag tr 
            var tr = document.createElement('tr');
            tr.innerHTML = `<td style="width: 8%;">${listIdCart.length}</td><td style="width: 30%;">${name}</td><td style="width: 20%;">${price}</td><td class="input-tb"></td><td style="width: 20%;" class="money">${price * inputEl.value}</td><td style="width: 5%;" class="button-tb"></td>`;

            var inputTb = tr.querySelector('.input-tb');
            var input = document.createElement('input');
            input.type = 'number';
            input.value = +(inputEl.value);
            inputTb.append(input);
            var buttonTB = tr.querySelector('.button-tb');
            var button = document.createElement('button');
            button.innerText = 'Delete';
            buttonTB.append(button);

            tbody.append(tr);
            // End Create tag tr 

            // Delete product in shopping cart
            button.addEventListener('click', function () {
                if(confirm('Are you sure?')) {
                    quantity -= +(tr.querySelector('.input-tb input').value);
                    totalMoney -= price * (tr.querySelector('.input-tb input').value);
                    footer.children[1].innerText = quantity;
                    footer.children[2].innerText = totalMoney;
                    tbody.removeChild(tr);
                    listIdCart.splice(listIdCart.indexOf(id), 1);
                    if(quantity === 0) {
                        root.style.display = 'none';
                        document.querySelector('.text').style.display = '';
                    }
                }
            })
            // End Delete product in shopping cart

        } else {
            var quantityPrCart = tbody.children[listIdCart.indexOf(id)].querySelector('.input-tb input');
            quantityPrCart.value = +(quantityPrCart.value) + +(inputEl.value);
            var moneyPrCart = tbody.children[listIdCart.indexOf(id)].querySelector('.money');
            moneyPrCart.innerText = `${price * quantityPrCart.value}`;
        }


        // update total
        if(+(inputEl.value) <= 0) {
            inputEl.value = 1; 
        }
        quantity += +(inputEl.value);
        footer.children[1].innerText = quantity;
        totalMoney += price * inputEl.value;
        footer.children[2].innerText = totalMoney;
    }

    button.addEventListener('click', handleCart);

};



tableContent.forEach(function (product) {
    handleTable(table, product.id, product.stt, product.name, product.price);
})

// handle Cart

// delete ALL 
root.querySelector('.delete-all').addEventListener('click', function () {
    if(confirm('Are you sure?')) {
        for(var i = 0; i < listIdCart.length; i++) tbody.children[0].remove();
        root.style.display = 'none';
        document.querySelector('.text').style.display = '';
        quantity = 0;
        totalMoney = 0;
        listIdCart = [];
    }
})

// Update shopping cart

root.querySelector('.update').addEventListener('click', function () {
    alert('Update shopping cart success'); 
    var quantity = 0;
    var totalMoney = 0; 
    var price;
    for(var i = 0; i < listIdCart.length; i++) {
        var temp = +(tbody.children[i].querySelector('.input-tb input').value);
        var temp2 = temp;
        if(temp <= 0) {
            temp = 1;
            tbody.children[i].querySelector('.input-tb input').value = 1;
            tbody.children[i].querySelector('.input-tb').nextElementSibling.innerText = - +(tbody.children[i].querySelector('.input-tb').nextElementSibling.innerText) / temp2;
        }
        tableContent.forEach(function (item) {
            if(item.id === listIdCart[i]) {
                price = item.price;
            }
        })
        quantity += temp;
        tbody.children[i].querySelector('.input-tb').nextElementSibling.innerText = temp * price;
        totalMoney += +(tbody.children[i].querySelector('.input-tb').nextElementSibling.innerText);
    }
    footer.children[1].innerText = quantity;

    footer.children[2].innerText = totalMoney;
})


