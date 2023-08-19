
import { db, saveTasks, onGetTasks, deleteTask, updateTask} from "./Components/firebase.js";
import {  doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js"


const inputTaskEl = document.getElementById("todo-task")
const importanceTaskEl = document.getElementById("todo-importance")
const typeTaskEl = document.getElementById("todo-type")
const postTaskBtn =document.getElementById("todo-post-btn")

const taskContainer = document.getElementById("tasks-container")
//const querySnapshot = await getDocs(collection(db, "tasks"))

let isEditing = false
let id = ""

postTaskBtn.addEventListener("click", async (e)=>{
  
  if (isEditing){
    postTaskBtn.textContent = "+"
    isEditing = false
   await  updateTask(id,{
    task: inputTaskEl.value ,
          importance: importanceTaskEl.value,
          type: typeTaskEl.value
   })
  } else{

    try {
      saveTasks(inputTaskEl.value,importanceTaskEl.value, typeTaskEl.value) 
      } catch (e) {
        console.error("Error adding document: ", e);
      } 
    }   
})




onGetTasks((querySnapshot) =>{
  taskContainer.innerHTML= ""
   
  querySnapshot.forEach((doc) => {
    const task = doc.data();
    taskContainer.innerHTML +=`
    <div class="todo-template">
        <div class="content-flex"              
              <h2 id="title" class="template-text title">${task.task}</h2>
              <button id="${doc.id}" class="light-btn edit"> Edit </button>
        </div>

        <div class="content-flex border-top">
            <h2  class="template-text redtext">${task.importance}</h2>
            <h2  class="template-text redtext">${task.type}</h2>
            <button id="${doc.id}" class="dark-btn sub"> -</button>
    
        </div>
    </div>
    `
})

const btnDeleteTask = taskContainer.querySelectorAll(".sub")
const btnEditTask = taskContainer.querySelectorAll(".edit")


btnDeleteTask.forEach(btn => {  
  btn.addEventListener("click", ({target}) =>{
    deleteTask(target.id)
}) 
})



btnEditTask.forEach( btn => {
  btn.addEventListener("click", async ({target}) => {
    const singledoc = await getDoc(doc(db, "tasks", (target.id)))
      const task = singledoc.data()
      console.log(task)
    
      inputTaskEl.value= task.task
      importanceTaskEl.value= task.importance
      typeTaskEl.value= task.type

      isEditing = true
      id = target.id
      postTaskBtn.textContent = "update"
  })
})
})
