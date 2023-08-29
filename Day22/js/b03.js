var database = [
    {
      id: 1,
      name: "Chuyên mục 1",
      parent: 0,
    },
    {
      id: 2,
      name: "Chuyên mục 2",
      parent: 0,
    },
    {
      id: 3,
      name: "Chuyên mục 3",
      parent: 0,
    },
    {
      id: 4,
      name: "Chuyên mục 2.1",
      parent: 2,
    },
    {
      id: 5,
      name: "Chuyên mục 2.2",
      parent: 2,
    },
    {
      id: 6,
      name: "Chuyên mục 2.3",
      parent: 2,
    },
    {
      id: 7,
      name: "Chuyên mục 3.1",
      parent: 3,
    },
    {
      id: 8,
      name: "Chuyên mục 3.2",
      parent: 3,
    },
    {
      id: 9,
      name: "Chuyên mục 3.3",
      parent: 3,
    },
    {
      id: 10,
      name: "Chuyên mục 2.2.1",
      parent: 5,
    },
    {
      id: 11,
      name: "Chuyên mục 2.2.2",
      parent: 5,
    },
    {
        id: 12,
        name: "Chuyên mục 2.2.3",
        parent: 5,
    },
    {
        id: 13,
        name: "Chuyên mục 2.3.1",
        parent: 6,
    },
    {
        id: 13,
        name: "Chuyên mục 2.4",
        parent: 2,
    },
  ];

  var categories = JSON.parse(JSON.stringify(database));

  var result = function (array) {
    var ans = []; // Tạo ra một mảng mới để lưu đáp án
    if(!Array.isArray(array) || array.length === 0) {
      console.log("Check lại database");
      return;
    }
    else {
        for(var item of array) {
            if(item.parent === 0) {
                ans.push(item);
                delete item.parent;
            }
            else {
                for(var newItem of array) {
                    if(newItem.id === item.parent) {
                        if(typeof newItem.children === 'undefined') {
                            newItem.children = [];
                            newItem.children.push(item);
                            delete item.parent;
                        } else {
                            newItem.children.push(item);
                            delete item.parent;
                        }
                    }
                }
            }
        }
    }
    console.log(ans);
  }
  
  result(categories)