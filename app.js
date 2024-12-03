import { auth, createUserWithEmailAndPassword} from "./firebase.js";

let email = document.getElementById('email')
let password = document.getElementById('password')
document.getElementById('signIn').addEventListener('click',(()=>{
    try{
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    
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