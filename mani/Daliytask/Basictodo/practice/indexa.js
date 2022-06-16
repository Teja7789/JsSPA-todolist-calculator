function onFormSubmit(){
    const inputc = document.getElementById('title').value;
    console.log(inputc)
    data.push(inputc)
    const inputb = document.getElementById('content').value;
    console.log(inputb)
    data.push(inputb)
}
//get - all input values
function add(){

// render()
}
const data = ['test','exam']
let list = ''
list = list + `<li>${data[0]}</li>`
list = list +`<li>${data[1]}</li>` 
document.getElementById('main').innerHTML = list

function render(){
  //  let main = `<li>${inputa}</li>`; 
}