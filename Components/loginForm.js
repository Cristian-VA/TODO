import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";

const loginForm = document.getElementById("login-form")
const loginEmail = document.getElementById("login-email")
const loginPassword = document.getElementById("login-password")
const loginErrorMsg = document.getElementById("login-error-msg")

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()


    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((userCredential) => {
       const user = userCredential.user;
    console.log(user.email)
    window.location.replace("/app.html")

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    loginErrorMsg.innerHTML= errorCode
    
  })
})