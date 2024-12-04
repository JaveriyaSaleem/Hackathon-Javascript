import { auth, signInWithEmailAndPassword,sendPasswordResetEmail } from "../firebase.js";
let getEmail = document.getElementById('email')
let getPassword = document.getElementById('password')
let signUpBtn = document.getElementById('signUpBtn')
signUpBtn.addEventListener('click',(()=>{
    location.href = "../index.html"
}))
document.getElementById('signInBtn').addEventListener("click",(()=>{
    console.log("okay")
    signInWithEmailAndPassword(auth, getEmail.value, getPassword.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
    //   Swal.fire({
    //       icon: "success",
    //       text: "Login Successfully",
    //     });
        setTimeout(()=>{
          location.href = "../Dashboard/dashboard.html"
        },3000)
        console.log("working")
  
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      switch(errorCode){
          case "auth/invalid-email":
          Swal.fire("Add/Invalid Email");
          break;
          case "auth/invalid-credential":
              Swal.fire("Invalid Credential");
              break;
      }
    });
}))