import { GoogleAuthProvider, signInWithPopup, browserPopupRedirectResolver } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth, db } from "./firebase.js";
const googleBtn = document.getElementById("google-login")
const loginErrorMsg = document.getElementById("login-error-msg")


googleBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider, browserPopupRedirectResolver)
.then((result) => {
    window.location.replace("/app.html")
}).catch((error) => {
   console.log(error)
   loginErrorMsg.innerHTML= errorCode
})
})