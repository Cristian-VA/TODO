import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js"

const logOutBtn = document.getElementById("log-out")
const confirmLogOutBtn = document.getElementById("confirm-log-out")

const modalEl =document.getElementById("modal")
const closeModal = document.getElementById("close")
const formContent = document.getElementById("log-out-form")

logOutBtn.addEventListener("click", () => {
  modalEl.style.display="block"
   
})

closeModal.addEventListener("click", ()=>{
  modalEl.style.display="none"
})


confirmLogOutBtn.addEventListener("click", ()=>{
  signOut(auth).then(() => {
    formContent.innerHTML=`
    
    <H1 class="logout-msg">Logging you out</H1>
    <img class="loading-svg" src="imgs/loadingsvg.svg"/>
    
    `
    setTimeout(() => {
      window.location.replace("/index.html")
    }, 2000); 

    }).catch((error) => {
 
    });
})





