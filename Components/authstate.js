import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js"

import { auth, db } from "./firebase.js"
const welcomeMsgEl = document.getElementById("welcome-msg")

const userEl = document.getElementById("user")
const displayProfileEl = document.getElementById("display-profile-pic")

onAuthStateChanged(auth, async (user) =>{
    
    const displayName = user.isAnonymous ? "Guest" : 
    user.displayName? user.displayName : 
    user.reloadUserInfo.screenName? user.reloadUserInfo.screenName : user.email 
    
    userEl.innerHTML = displayName

    const displayImage = user.photoURL? user.photoURL : ""
   

    if (displayImage){
        displayProfileEl.innerHTML += `<img class="logo border" src=${displayImage} alt="">`
    }

  welcomeMsgEl.textContent = `Welcome ${displayName}`
    
})