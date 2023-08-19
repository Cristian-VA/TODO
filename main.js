
import "./Components/logout.js"
import "./Components/authstate.js"
import "./Todo.js"
import "./calendar.js"

const welcomeMsgEl = document.getElementById("welcome-msg")

const todoApp =document.getElementById("ToDo")
const todoBtn = document.getElementById("ToDo-btn")

const calendarApp = document.getElementById("calendar-section")
const calendarBtn = document.getElementById("Calendar-btn")

todoBtn.addEventListener("click", ()=>{
  todoApp.style.display = "flex"
  welcomeMsgEl.style.display="none"
  calendarApp.style.display="none"
})

calendarBtn.addEventListener("click", ()=>{
  todoApp.style.display = "none"
  welcomeMsgEl.style.display="none"
  calendarApp.style.display="grid"
})


