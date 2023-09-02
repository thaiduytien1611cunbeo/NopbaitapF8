var categories = [
    {
      id: 1,
      name: "Chuyên mục 1",
    },
    {
      id: 2,
      name: "Chuyên mục 2",
      children: [
        {
          id: 4,
          name: "Chuyên mục 2.1",
        },
        {
          id: 5,
          name: "Chuyên mục 2.2",
          children: [
            {
              id: 10,
              name: "Chuyên mục 2.2.1",
            },
            {
              id: 11,
              name: "Chuyên mục 2.2.2",
            },
            {
              id: 12,
              name: "Chuyên mục 2.2.3",
            },
          ],
        },
        {
          id: 6,
          name: "Chuyên mục 2.3",
        },
      ],
    },
    {
      id: 3,
      name: "Chuyên mục 3",
      children: [
        {
          id: 7,
          name: "Chuyên mục 3.1",
        },
        {
          id: 8,
          name: "Chuyên mục 3.2",
        },
        {
          id: 9,
          name: "Chuyên mục 3.3",
        },
      ],
    },
  ]

  var newArray = [];
  var flat = function (array) {
    for(var item of array) {
        if(Array.isArray(item.children)) {
            newArray.push(item);
            flat(item.children);
            delete item.children;
        } 
        else {
            newArray.push(item);
        }
      }
      return newArray;
  }

  var contentHtml = '';
  flat(categories).forEach(function (value, index) {
    if(value.name.slice(value.name.lastIndexOf(' ') + 1).length === 3) {
        contentHtml += `<option value="${index + 1}">--|${value.name}</option>`; 
    } else if(value.name.slice(value.name.lastIndexOf(' ') + 1).length === 5) {
        contentHtml += `<option value="${index + 1}">--|--|${value.name}</option>`; 
    } else {
        contentHtml += `<option value="${index + 1}">${value.name}</option>`; 
    }
  })

  var html = `
  <select>
  <option value="0">Chọn chuyên mục</option>
  ${contentHtml}
  </select>
  `

  console.log(html);
  document.write(html)