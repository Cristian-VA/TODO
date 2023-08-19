import { signInAnonymously} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";

const anonBtn =document.getElementById("anon-btn")

anonBtn.addEventListener("click", () =>{

    signInAnonymously(auth)
    .then(() => {
      window.location.replace("/app.html")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });

})