import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js"
import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js"


const firebaseConfig = {
  apiKey: "AIzaSyD67GyAa6tTnjlrpITUY0-YOy94Yak70tQ",
  authDomain: "todo-7e173.firebaseapp.com",
  projectId: "todo-7e173",
  storageBucket: "todo-7e173.appspot.com",
  messagingSenderId: "890551649285",
  appId: "1:890551649285:web:49b07e38b6039e96b4486c"
}

//Firebase Auth
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

//Firebase Firestore

export const db = getFirestore(app)


export function saveTasks(task,importance,type){
  addDoc(collection(db, "tasks"), { task, importance, type })
}

export function onGetTasks(callback){
  onSnapshot(collection(db, "tasks"), callback)}

export function deleteTask(id){
  deleteDoc(doc(db, "tasks", id))
}

export function getTask (id){
  getDoc(doc(db, "tasks", id))
}

export function updateTask(id, updateInfo){
  updateDoc(doc(db, "tasks", id), updateInfo);
}

