let nav = 0

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const calendar = document.getElementById("calendar")






function renderCalendar(){

  const date = new Date


 if (nav !== 0){
  date.setMonth(new Date().getMonth() + nav)
 }


 const day = date.getDate()
 const month = date.getMonth()
 const year = date.getFullYear()

 const daysInMonth = new Date(year, month+1, 0).getDate()
 const firstDayMonth = new Date(year, month, 1)
 const dateString = firstDayMonth.toLocaleDateString("en-us",{
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric"
 })
 const fillerDays = weekdays.indexOf(dateString.split(",")[0])
 
 document.getElementById("month-display").innerText = 
 `${date.toLocaleDateString("en-us", {month:"long"})} ${year}`
 
calendar.innerHTML = ""

 for (let i = 1; i<= fillerDays + daysInMonth; i++){
  const daysGrid = document.createElement("div")
  daysGrid.classList.add("day")



  if (i > fillerDays){
 daysGrid.innerText = i - fillerDays

 if (i - fillerDays === day && nav === 0) {
  daysGrid.id = 'currentDay';
}

  }else{
    daysGrid.classList.add("padding")
  }

  calendar.appendChild(daysGrid)
 }
}


function initButtons() {
  document.getElementById('next-button').addEventListener('click', () => {
    nav++;
    renderCalendar();
  });

  document.getElementById('back-button').addEventListener('click', () => {
    nav--;
    renderCalendar();
  });

}







renderCalendar()
initButtons()