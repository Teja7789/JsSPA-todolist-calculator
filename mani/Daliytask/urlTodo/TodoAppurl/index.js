// https://jsonplaceholder.typicode.com/todos/1

(function load(){
    console.log("js");
   const $form = document.querySelector("#js_form-task")
   
   const $emptyContainer  = document.querySelector("js_message-empty-task")
   const $containerTask = document.querySelector("#js_container-task")
    
// function to print HTML DOM
//@ params {*} $ container
//@param {*} task


    function printTaskHtml($container, task,inputtask){
        $container.innerHTML +=` 
        <li class="print-task-item">
        <span>
          <input type="checkbox" />
          <span class="task">Test task of this application ${task} - ${inputtask}</span>
          <input type="text" class="input-edit" />
        </span>
        <section class="buttons-actions">
          <div class="js_delete"></div>
          <div class="js_edit_update"></div>
        </section>
      </li> 
        `;
    }
    // event for submit
    // const $form = document.querySelector("submit",(event) =>{
        $form.addEventListener("submit",(event)=>{
        event.preventDefault();
//start use form data
const data = new FormData($form);
const taskText = data.get("text_Task");
const inputText = data.get("textTask");
document.querySelector("#input-task").value = "";
document.querySelector("#input").value= "";
// $emptyContainer.classList.remove("active");
// const input = data.get("input");
printTaskHtml($containerTask,taskText,inputText);
    })

})();
