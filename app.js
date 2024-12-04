import { auth, createUserWithEmailAndPassword,collection,updateProfile, db,addDoc,doc,setDoc} from "./firebase.js";

let registerBtn = document.getElementById('signUpBtn')
let getEmail = document.getElementById('email')
let getPassword = document.getElementById('password')
let getName = document.getElementById('name')
let signIn = document.getElementById('signIn')
signIn.addEventListener('click',(()=>{
  location.href="Login/login.html"
}))
registerBtn.addEventListener('click',(()=>{
  const email = getEmail.value.trim();
const password = getPassword.value.trim();
const fullName = getName.value.trim();
if(!email||!password||!fullName){
    Swal.fire("Please fill out all the fields")
    return
}    
createUserWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            const uId = user.uid
            try {
                await setDoc(doc(db, "userData", uId), {
                    FullName: fullName,
                    Email: email,
                    UID: uId

                  });
                console.log(auth.currentUser)
                const saveUser = auth.currentUser
                updateProfile(await auth.currentUser, {
                    displayName: fullName
                  }).then(async() => {
                    console.log("displayName Updated",await auth.currentUser.displayName)
                  }).catch((error) => {
                    console.log(error)
                  });
                console.log("Document written with ID");
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                });
              } catch (e) {
                console.error("Error adding document");
              }
            setTimeout(()=>{
            location.href = "./Dashboard/dashboard.html"
            },3000)


        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode)
            switch (errorCode) {
                case "auth/invalid-email":
                    Swal.fire("Add/Invalid Email");
                    break;
                case "auth/weak-password":
                    Swal.fire("Password Should be atleast 6 Characters");
                    break;
                case "auth/missing-password":
                    Swal.fire("Password is Missing");
                    break;
                case "auth/email-already-in-use":
                    Swal.fire("Account Already Exists");
                    break;

                default:
                    console.log('huh')
            }
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
        });

    getEmail.value = ""
    getPassword.value = ""
    getName.value = ""
    }))
console.log('chal')