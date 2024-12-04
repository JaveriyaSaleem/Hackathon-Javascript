import { orderBy,auth, onAuthStateChanged,db,getDoc,doc,query, where, setDoc,arrayUnion,updateDoc,collection,getDocs, serverTimestamp, addDoc} from "../firebase.js";
let doneBtn = document.getElementById('doneBtn')
let addPostBtn = document.getElementById('addPost')
let modal = document.getElementById('modalBody')
let modalPost = document.getElementById('modalPost')
let modalTitle = document.getElementById('modalTitle')
let modalFullName = document.getElementById('modalFullName')
let selectedOption = document.getElementById('selectedOption')
let  work= document.getElementById('work')
let  artificialIntelligence= document.getElementById('artificialIntelligence')
let  crypto= document.getElementById('crypto')
let  technology= document.getElementById('technology')
let  design= document.getElementById('design')
let  company= document.getElementById('company')
let allPosts = document.getElementById('allPosts')
// let searchBar = document.getElementById('searchBar')
// let searchBtn = document.getElementById('searchBtn')
// searchBtn.addEventListener('click',(()=>{
//     let searchValue = searchBar.value.toLowerCase()

//     console.log(searchValue)
//     // switch () {
//     //     case "auth/invalid-email":
//     //         Swal.fire("Add/Invalid Email");
//     //         break;
//     //     case "auth/weak-password":
//     //         Swal.fire("Password Should be atleast 6 Characters");
//     //         break;
//     //     case "auth/missing-password":
//     //         Swal.fire("Password is Missing");
//     //         break;
//     //     case "auth/email-already-in-use":
//     //         Swal.fire("Account Already Exists");
//     //         break;

//     //     default:
//     //         console.log('huh')
//     // }
// }))

addPostBtn.addEventListener('click',(async()=>{
    modal.classList.remove('hidden')
      

}))
doneBtn.addEventListener("click",(async()=>{
    try {
        const docRef = await addDoc(collection(db, "Posts"), {
          Name: modalFullName.value,
          PostTitle: modalTitle.value,
          Post: modalPost.value,
          Topic: selectedOption.value
        });
        console.log("Document written with ID: ", docRef.id);
        let createElement = document.createElement('div')
        createElement.setAttribute('id','post')
        createElement.setAttribute('class','border p-2 m-2')
        allPosts.prepend(createElement)
        let postDiv = document.getElementById('post')
        postDiv.innerHTML=`                <div>
                <p class="font-medium">Mar 1</p>
                <h1 class="font-bold text-[26px]">${modalTitle.value}</h1>
                    <p>${modalPost.value}</p>
                        <div class="flex flex-row items-center gap-2">
                        <button class="py-1 px-4 border-2 border-[#b4b4b4] rounded-full">${selectedOption.value}</button> <p>By ${modalFullName.value}</p> <span class="font-medium">7 min read</span>
                    </div>
                </div>`
                setTimeout(()=>{
                    modal.classList.add('hidden')
                },2000)
      } catch (e) {
        console.error("Error adding document: ", e);
      }

}))

// fetching posts when reload 
async function fetchWhenReload(){
    try {
        allPosts.innerHTML = "";
        const q = query(
            collection(db, "Posts")
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async(doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data().Name);
        //   let makeTime = doc.data().Timestamp.toDate()
        //   let date = new Date(makeTime)
        //   let time = moment(date).format("MMM Do YY")
        //   console.log(time)

        let createElement = document.createElement('div')
        createElement.setAttribute('id','post')
        createElement.setAttribute('class','border p-2 m-2')
        allPosts.prepend(createElement)
        let postDiv = document.getElementById('post')
        postDiv.innerHTML=`                <div>
                <p class="font-medium">Mar 1</p>
                <h1 class="font-bold text-[26px]">${doc.data().PostTitle}</h1>
                    <p>${doc.data().Post}</p>
                        <div class="flex flex-row items-center gap-2">
                        <button class="py-1 px-4 border-2 border-[#b4b4b4] rounded-full">${doc.data().Topic}</button> <p>By ${doc.data().Name}</p> <span class="font-medium">7 min read</span>
                    </div>
                </div>`

        });


    } catch (error) {
        console.log(error)
    }



    console.log("hello!")
  }
  window.addEventListener('load',fetchWhenReload)