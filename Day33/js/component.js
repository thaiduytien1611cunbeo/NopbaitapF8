class F8 {
    constructor() {
        console.log(1);
    }

    // Build component
    static component(nameEl, options = {}) {
        // Define HTML element
        customElements.define(`${nameEl}`, class extends HTMLElement {
            constructor() {
                super();
            }

            connectedCallback() {
                
                // Khởi tạo templateElemnet và gán innnerHTML = giá trị return của hàm
                const templateEl = document.createElement('template');
                templateEl.innerHTML = handelVariableTemplate(options.template, options);
                

                // Create Node Template để append vào element vừa được Define
                const templateNode = templateEl.content.cloneNode(true);
                handlerTemplate(templateNode, options);
                document.querySelector(`${nameEl}`).append(templateNode);
                    
            }
        })
    }
}

// Handles events assigned to element properties
const handlerTemplate = (templateNode, options) => {
    const arrayNode = Array.from(templateNode.children);
    let newObject = {...options.data?.()};
    let {count, title} = newObject;
    const nodeCounts = templateNode.querySelectorAll('.count');
    const nodeTitle = templateNode.querySelectorAll('.title');
    
    arrayNode.forEach((node) => {
        const nodeAttribute = node.attributes;

        if(nodeAttribute.length) {
            Array.from(nodeAttribute).forEach((att) => {
                // Get the necessary properties and methods
                const nameNode = att.nodeName;
                const valueNode = att.nodeValue;
                const nameEvent = nameNode.slice(nameNode.indexOf(':') + 1);

                // assign the nameEvent is Value vừa lấy
                node.addEventListener(`${nameEvent}`, function () {
                    eval(valueNode);

                    // ở đây em đang lấy các node bằng cách thêm thẻ span và class vào đấy anh có thể cho em xin ý tưởng khác để có thể thay đổi được value của count và title mà không cần đặt biến cố định không ạ
                    if(nodeCounts) {
                        nodeCounts.forEach((node) => {
                            node.innerText = count;
                        })
                    }

                    if(nodeTitle) {
                        nodeTitle.forEach((node) => {
                            node.innerText = title;
                        })
                    }
                })
            })
        }
    })
    return templateNode;
}   



// handles assigning variables appearing in the template to variables in data
const handelVariableTemplate = (strTemplate, options) => {
    const results = strTemplate.match(/{{.+?}}/g);
    if(results) {
        results.forEach(result => {
            let variableRes = result.match(/{{(.+?)}}/)[1].trim();

            let variableResChange = options?.data?.()[variableRes];


            strTemplate = strTemplate.replaceAll(result, `<span class="${variableRes}">${variableResChange}</span>`);
        });
    }
    return strTemplate;
}

