import { FacebookAuthProvider, signInWithPopup, browserPopupRedirectResolver } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";

const fbBtn = document.getElementById("fb-login")
const loginErrorMsg = document.getElementById("login-error-msg")


fbBtn.addEventListener("click", (e)=> {
    
    e.preventDefault()
    const provider = new FacebookAuthProvider()
    signInWithPopup(auth, provider, browserPopupRedirectResolver)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    console.log("hello")
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    window.location.replace("/app.html")
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    loginErrorMsg.innerHTML= errorCode
    // ...
  });
})