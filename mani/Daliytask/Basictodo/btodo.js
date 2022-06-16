// const input = document.getElementById('todoInput').value;
const data = ['test','exam']
function add(){
    const input = document.getElementById('todoInput').value;
    // console.log(input)
    data.push(input)
    // console.log(data);
    renderList()
}

// let list = '';
// list = list + `<li>${data[0]}</li>`
// list = list + `<li>${data[1]}</li>`
// list = list + `<li>${data[2]}</li>`
// list = list + `<li>${data[3]}</li>`

function renderList(){
    let list = '';
    for(let i=0;i<data.length;i++){
        list = list + `<li>${data[i]}</li>`
    };
    document.getElementById('todoList').innerHTML = list
    }
    renderList()
// list = list + `<li>${data[0]}</li>`
// list = list + `<li>${data[1]}</li>`
// list = list + `<li>${data[2]}</li>`
// list = list + `<li>${data[3]}</li>`


// document.getElementById('todoList').innerHTML = list