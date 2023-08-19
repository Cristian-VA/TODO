import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js"

const signUpEmail =document.getElementById("signup-email")
const signUpPassword =document.getElementById("signup-password")
const signEl = document.getElementById("sign-btn")
const messageSignUp = document.getElementById("message")
const signUpForm =document.getElementById("sign-up")

const modalEl =document.getElementById("modal")
const closeModal = document.getElementById("close")


//function close modal

function closeM(){
    modalEl.style.display="none"
}



signEl.addEventListener("click", ()=>{
    modalEl.style.display="block"
  })
  
  closeModal.addEventListener("click", ()=>{
    closeM()
  })




//Sign Up

signUpForm.addEventListener("submit", (e)=>{
    e.preventDefault()
   
    createUserWithEmailAndPassword(auth, signUpEmail.value, signUpPassword.value)
    .then(() => {     
        closeModal.classList.add("disable")
        messageSignUp.innerHTML= `<img class="loading-svg" src="imgs/loadingsvg.svg"/>`
        
        setTimeout(() => {
        messageSignUp.innerHTML= `<h2> Sign up successfull </h2>`
        
        }, 1500);
        
        setTimeout(() => {
           closeM()
           closeModal.classList.remove("disable")
           messageSignUp.innerHTML = ` <button class="login-btn" type="submit"> Sign UP</button>`
            
           signUpEmail.value=""
           signUpPassword.value=""
           //window.location.replace("/app.html")
        }, 3000);

   
      })
      .catch((error) => {
       message.classList.add("disable")
       message.innerHTML += `<h2 class="error-msg">${error.code} </h2>`
        
            setTimeout(() => {
                message.innerHTML = ` <button class="login-btn" type="submit"> Sign UP</button>`
                message.classList.remove("disable")
            }, 2000);
    
      });
      
})