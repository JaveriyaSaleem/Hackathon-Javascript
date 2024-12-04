import { auth, createUserWithEmailAndPassword,collection, addDoc,db} from "./firebase.js";

let email = document.getElementById('email')
let password = document.getElementById('password')
document.getElementById('signIn').addEventListener('click',(()=>{
    try{
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then(async(userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    try {
      const docRef = await addDoc(collection(db, "users"), {
        Email: email.value,
        Password: password.value,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
    const errorMessage = error.message;
    console.log(errorMessage)
    
  });
    }catch(e){
console.log(e)
    }
}))
console.log('chal')