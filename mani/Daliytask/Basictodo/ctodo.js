// const input = document.getElementById('todoInput').value;
const data = ['test','exam','sem']
 
const addBtns = document.getElementById("addBtn")
// console.log(addBtns);
// addBtns.addEventListener('click', () => {
//     console.log('hi');
// })
addBtns.addEventListener('click', add)
function add(){
    const inputElement = document.getElementById('todoInput')// reset the value
    const input = inputElement.value;
    // console.log(input)
  //  document.getElementById('todoInput').value reset the value
  
    data.push(input)
    // console.log(data);
    inputElement.value = " ";
    renderList(data)
}

// let list = '';
// list = list + `<li>${data[0]}</li>`
// list = list + `<li>${data[1]}</li>`
// list = list + `<li>${data[2]}</li>`
// list = list + `<li>${data[3]}</li>`

function renderList(dataArray){
    let list = ``;
    //link foreach instead of for loop by arrow function 
    dataArray.forEach((data)=>{
        // console.log(data);
        list = list + `<li>${data} - <button data-text='${data}'>delete</button></li>`
    });
    document.getElementById('todoList').innerHTML = list
    }
    renderList(data)
// list = list + `<li>${data[0]}</li>`
// list = list + `<li>${data[1]}</li>`
// list = list + `<li>${data[2]}</li>`
// list = list + `<li>${data[3]}</li>`


// document.getElementById('todoList').innerHTML = list

document.body.addEventListener('click', (e)=>{
    // console.log(e.target.tagName === 'LI');
    if(e.target.tagName === 'LI'){
// console.log('sdf');
e.target.classList.toggle("marked")
    }else if(e.target.tagName === "BUTTON"){
       const text = e.target.getAttribute('data-text')  //get array values directly by attribute getting values
     const  data = data.filter((item)=>{
        if(item === text){

        }else {
            return item
        }
      });
    //   const data = ['test','exam']
      //1st loop: inde3x -0 item = "test" === text
      // 2ndloop: index -1 item = "exam" tooth" === text 
    //   console.log(filterdata);
      renderList(data)
    }
    else{
        console.log('not li');
    }
// e.preventDefault();
})