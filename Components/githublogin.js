import { GithubAuthProvider, signInWithPopup, browserPopupRedirectResolver  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";

const ghBtn = document.getElementById("github-login")
const loginErrorMsg = document.getElementById("login-error-msg")

ghBtn.addEventListener("click", (e) =>{
    
    e.preventDefault()
    const provider = new GithubAuthProvider()
    signInWithPopup(auth, provider, browserPopupRedirectResolver )

  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    window.location.replace("/app.html")
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    console.log(error.code)
    // ...
    loginErrorMsg.innerHTML= errorCode
  });
})