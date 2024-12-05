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
document.getElementById('searchBtn').addEventListener('click', async () => {
    const selectedCategory = document.getElementById('selectedOptionOfSearch').value; 
    allPosts.innerHTML = ""; // Clear existing posts
    console.log(`Selected category: ${selectedCategory}`);

    try {
        const q = query(collection(db, "Posts"), where("Topic", "==", selectedCategory));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data().Post);

            let createElement = document.createElement('div');
            createElement.setAttribute('id', 'post');
            createElement.setAttribute('class', 'border p-2 m-2');

            let makeTime = doc.data().Timestamp.toDate();
            let date = new Date(makeTime);
            let time = moment(date).format("MMM Do");

            allPosts.prepend(createElement);

            let postDiv = document.getElementById('post');
            postDiv.innerHTML = `
                <div>
                    <p class="font-medium">${time}</p>
                    <h1 class="font-bold text-[26px]">${doc.data().PostTitle}</h1>
                    <p>${doc.data().Post}</p>
                    <div class="flex flex-row items-center gap-2">
                        <button class="py-1 px-4 border-2 border-[#b4b4b4] rounded-full">${doc.data().Topic}</button>
                        <p>By ${doc.data().Name}</p>
                        <span class="font-medium">7 min read</span>
                    </div>
                </div>`;
        });
    } catch (e) {
        console.log(e);
    }
});
// technology 
technology.addEventListener('click',(async()=>{
    allPosts.innerHTML =""
    console.log("hello")
    
    try{
        const q = query(collection(db, "Posts"), where("Topic", "==", "Technology"));
        const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data().Post);
  let createElement = document.createElement('div')
  createElement.setAttribute('id','post')
  createElement.setAttribute('class','border p-2 m-2')
  let makeTime = doc.data().Timestamp.toDate()
  let date = new Date(makeTime)
  let time = moment(date).format("MMM Do")
  console.log(time)
  allPosts.prepend(createElement)
  let postDiv = document.getElementById('post')
  postDiv.innerHTML=`<div>
          <p class="font-medium">${time}</p>
          <h1 class="font-bold text-[26px]">${doc.data().PostTitle}</h1>
              <p>${doc.data().Post}</p>
                  <div class="flex flex-row items-center gap-2">
                  <button class="py-1 px-4 border-2 border-[#b4b4b4] rounded-full">${doc.data().Topic}</button> <p>By ${doc.data().Name}</p> <span class="font-medium">7 min read</span>
              </div>
          </div>`

});
    }catch(e){  
        console.log(e)
    }
}))
// company
company.addEventListener('click',(async()=>{
    allPosts.innerHTML =""
    console.log("hello")
    
    try{
        const q = query(collection(db, "Posts"), where("Topic", "==", "Company"));
        const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data().Post);
  let createElement = document.createElement('div')
  createElement.setAttribute('id','post')
  createElement.setAttribute('class','border p-2 m-2')
  let makeTime = doc.data().Timestamp.toDate()
  let date = new Date(makeTime)
  let time = moment(date).format("MMM Do")
  console.log(time)
  allPosts.prepend(createElement)
  let postDiv = document.getElementById('post')
  postDiv.innerHTML=`<div>
          <p class="font-medium">${time}</p>
          <h1 class="font-bold text-[26px]">${doc.data().PostTitle}</h1>
              <p>${doc.data().Post}</p>
                  <div class="flex flex-row items-center gap-2">
                  <button class="py-1 px-4 border-2 border-[#b4b4b4] rounded-full">${doc.data().Topic}</button> <p>By ${doc.data().Name}</p> <span class="font-medium">7 min read</span>
              </div>
          </div>`

});
    }catch(e){  
        console.log(e)
    }
}))
// design 
design.addEventListener('click',(async()=>{
    allPosts.innerHTML =""
    console.log("hello")
    
    try{
        const q = query(collection(db, "Posts"), where("Topic", "==", "Design"));
        const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data().Post);
  let createElement = document.createElement('div')
  createElement.setAttribute('id','post')
  createElement.setAttribute('class','border p-2 m-2')
  let makeTime = doc.data().Timestamp.toDate()
  let date = new Date(makeTime)
  let time = moment(date).format("MMM Do")
  console.log(time)
  allPosts.prepend(createElement)
  let postDiv = document.getElementById('post')
  postDiv.innerHTML=`<div>
          <p class="font-medium">${time}</p>
          <h1 class="font-bold text-[26px]">${doc.data().PostTitle}</h1>
              <p>${doc.data().Post}</p>
                  <div class="flex flex-row items-center gap-2">
                  <button class="py-1 px-4 border-2 border-[#b4b4b4] rounded-full">${doc.data().Topic}</button> <p>By ${doc.data().Name}</p> <span class="font-medium">7 min read</span>
              </div>
          </div>`

});
    }catch(e){  
        console.log(e)
    }
}))
//crypto
crypto.addEventListener('click',(async()=>{
    allPosts.innerHTML =""
    console.log("hello")
    
    try{
        const q = query(collection(db, "Posts"), where("Topic", "==", "Crypto"));
        const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data().Post);
  let createElement = document.createElement('div')
  createElement.setAttribute('id','post')
  createElement.setAttribute('class','border p-2 m-2')
  let makeTime = doc.data().Timestamp.toDate()
  let date = new Date(makeTime)
  let time = moment(date).format("MMM Do")
  console.log(time)
  allPosts.prepend(createElement)
  let postDiv = document.getElementById('post')
  postDiv.innerHTML=`<div>
          <p class="font-medium">${time}</p>
          <h1 class="font-bold text-[26px]">${doc.data().PostTitle}</h1>
              <p>${doc.data().Post}</p>
                  <div class="flex flex-row items-center gap-2">
                  <button class="py-1 px-4 border-2 border-[#b4b4b4] rounded-full">${doc.data().Topic}</button> <p>By ${doc.data().Name}</p> <span class="font-medium">7 min read</span>
              </div>
          </div>`

});
    }catch(e){  
        console.log(e)
    }
}))
//artificialIntelligence
artificialIntelligence.addEventListener('click',(async()=>{
    allPosts.innerHTML =""
    console.log("hello")
    
    try{
        const q = query(collection(db, "Posts"), where("Topic", "==", "Artificial Intelligence"));
        const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data().Post);
  let createElement = document.createElement('div')
  createElement.setAttribute('id','post')
  createElement.setAttribute('class','border p-2 m-2')
  let makeTime = doc.data().Timestamp.toDate()
  let date = new Date(makeTime)
  let time = moment(date).format("MMM Do")
  console.log(time)
  allPosts.prepend(createElement)
  let postDiv = document.getElementById('post')
  postDiv.innerHTML=`<div>
          <p class="font-medium">${time}</p>
          <h1 class="font-bold text-[26px]">${doc.data().PostTitle}</h1>
              <p>${doc.data().Post}</p>
                  <div class="flex flex-row items-center gap-2">
                  <button class="py-1 px-4 border-2 border-[#b4b4b4] rounded-full">${doc.data().Topic}</button> <p>By ${doc.data().Name}</p> <span class="font-medium">7 min read</span>
              </div>
          </div>`

});
    }catch(e){  
        console.log(e)
    }
}))
// work
work.addEventListener('click',(async()=>{
    allPosts.innerHTML =""
    console.log("hello")
    
    try{
        const q = query(collection(db, "Posts"), where("Topic", "==", "Work"));
        const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data().Post);
  let createElement = document.createElement('div')
  createElement.setAttribute('id','post')
  createElement.setAttribute('class','border p-2 m-2')
  let makeTime = doc.data().Timestamp.toDate()
  let date = new Date(makeTime)
  let time = moment(date).format("MMM Do")
  console.log(time)
  allPosts.prepend(createElement)
  let postDiv = document.getElementById('post')
  postDiv.innerHTML=`<div>
          <p class="font-medium">${time}</p>
          <h1 class="font-bold text-[26px]">${doc.data().PostTitle}</h1>
              <p>${doc.data().Post}</p>
                  <div class="flex flex-row items-center gap-2">
                  <button class="py-1 px-4 border-2 border-[#b4b4b4] rounded-full">${doc.data().Topic}</button> <p>By ${doc.data().Name}</p> <span class="font-medium">7 min read</span>
              </div>
          </div>`

});
    }catch(e){  
        console.log(e)
    }
}))


addPost2.addEventListener('click',(async()=>{
    modal.classList.remove('hidden')
      

}))
document.getElementById('addPost2').addEventListener('click',(()=>{
    modal.classList.remove('hidden')
}))
doneBtn.addEventListener("click",(async()=>{
    try {
        const docRef = await addDoc(collection(db, "Posts"), {
          Name: modalFullName.value,
          PostTitle: modalTitle.value,
          Post: modalPost.value,
          Topic: selectedOption.value,
          Timestamp: serverTimestamp(),
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
          let makeTime = doc.data().Timestamp.toDate()
          let date = new Date(makeTime)
          let time = moment(date).format("MMM Do")
          console.log(time)

        let createElement = document.createElement('div')
        createElement.setAttribute('id','post')
        createElement.setAttribute('class','border p-2 m-2')
        allPosts.prepend(createElement)
        let postDiv = document.getElementById('post')
        postDiv.innerHTML=`                <div>
                <p class="font-medium">${time}</p>
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