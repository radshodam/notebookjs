// }
// // variables
// const noteList = document.querySelector('#note-list')


// // eventlisteners
// eventlisteners()

// function eventlisteners() {
//     // form submission
//     document.querySelector('#form').addEventListener('submit', newNote)

//     // remove note
//     document.querySelector('#note-list').addEventListener('click', removeNote)

//     // get data from localstorage on loaded
//     document.addEventListener('DOMContentLoaded', localStorageOnload)
// }



// // functions

// // Adding new note to the list
// function newNote(e) {
//     e.preventDefault()
//         // access to the value
//     const note = document.querySelector('#note').value

//     // create remove element
//     const removeBtn = document.createElement('a')
//     removeBtn.textContent = 'X'
//     removeBtn.classList = 'remove-note'

//     // create <li> tag
//     const li = document.createElement('li')
//     li.appendChild(document.createTextNode(note))

//     // adding remove btn to the li
//     li.appendChild(removeBtn)

//     // adding li to the note-list
//     noteList.appendChild(li)

//     this.reset()

//     addNoteToLocalStorage(note)

//     alert('یادداشت با موفقیت ذخیره شد!')
// }

// // remove Note from list
// function removeNote(e) {
//     if (e.target.classList.contains('remove-note')) {
//         e.target.parentElement.remove()
//     }

//     // aslo remote the note from the Local Storage
//     removeNoteLocalStorage(e.target.parentElement.textContent)
// }

// // adding note to the local storage
// function addNoteToLocalStorage(note) {
//     // get the notes from localStorage 
//     const notes = getNotesFromLocalStorage()

//     // add new note to the notes array
//     notes.push(note)

//     // add new notes Array to the localStorage
//     localStorage.setItem('notes', JSON.stringify(notes))
// }

// // get notes from localStorage
// function getNotesFromLocalStorage() {
//     let notes;

//     // get previous notes from localStorage
//     let getFromLS = localStorage.getItem('notes');
//     if (getFromLS === null) {
//         // if not exist create empty array
//         notes = []
//     } else {
//         // if exist convert to the array 
//         notes = JSON.parse(getFromLS)
//     }

//     return notes
// }

// // get data from local storage on load
// function localStorageOnload() {
//     const notes = getNotesFromLocalStorage();

//     // print each item of array
//     notes.forEach(function(note) {
//         // create remove element
//         const removeBtn = document.createElement('a')
//         removeBtn.textContent = 'X'
//         removeBtn.classList = 'remove-note'

//         // create <li> tag
//         const li = document.createElement('li')
//         li.appendChild(document.createTextNode(note))

//         // adding remove btn to the li
//         li.appendChild(removeBtn)

//         // adding li to the note-list
//         noteList.appendChild(li)
//     });
// }

// // also Remove note from localStorage
// function removeNoteLocalStorage(noteContent) {
//     // delete X from the contetn
//     const noteDelete = noteContent.substring(0, noteContent.length - 1)

//     // get notes from localstorage
//     const notesFromLS = getNotesFromLocalStorage()

//     notesFromLS.forEach(function(note, index) {
//         if (note === noteDelete) {
//             notesFromLS.splice(index, 1)
//         }
//     });

//     // set new array of notes to the local storage
//     localStorage.setItem('notes', JSON.stringify(notesFromLS))

// }

//variables
const forms = document.querySelector("#form");
// console.log(forms)
const noteList = document.querySelector("#note-list");
// console.log(noteList);



//eventlisteners
eventlisteners();
// call eventlisteners
function eventlisteners() {
  forms.addEventListener("submit", newnote);
//   show form and use submit to get note
  noteList.addEventListener("click" ,removenote)
//   use remove btn for remove note li

document.addEventListener("DOMContentLoaded",localStorageOnload)
//use DOM
}

// function

function newnote(e) {
  e.preventDefault();
//   default submit 
  // console.log(document.querySelector("#note").value);
 
  const note = document.querySelector("#note").value;
//  get value on id note left list

if (note==="") {
} //dont show if note===" "
else {
    const li = document.createElement("li");
    const btnremove=document.createElement("a")
    btnremove.textContent="X"
    btnremove.classList="remove-note"
    li.appendChild(btnremove)
    li.appendChild(document.createTextNode(note))
    noteList.appendChild(li) 

}
// show note
this.reset()
// reset text area after submit
 addNoteToLocalStorage(note)
//add note to LS
}

function removenote(e){
    // console.log(e.target);
    // console.log(e.target.classList.contains('remove-note'));
    if (e.target.classList.contains('remove-note')) {
       const removeli= e.target.parentElement
       removeli.remove()
       
    }
    removeNoteLocalStorage(e.target.parentElement.textContent)
    // console.log(e.target.parentElement.textContent);
}
function localStorageOnload(){
    const notes =getNotesFromLocalStorage()
    notes.forEach(note => {
      const li = document.createElement("li");
      const btnremove=document.createElement("a")
      btnremove.textContent="X"
      btnremove.classList="remove-note"
      li.appendChild(btnremove)
      li.appendChild(document.createTextNode(note))
      noteList.appendChild(li) 
    });
    
}
function addNoteToLocalStorage(note){
  const notes=getNotesFromLocalStorage()
  notes.push(note)
  localStorage.setItem('notes', JSON.stringify(notes))
}
function getNotesFromLocalStorage(){
    let notes;
    let getFromLS = localStorage.getItem('notes');
if (getFromLS===null) {
    notes=[]
} else {
    notes=JSON.parse(getFromLS)
}
return notes;
}
function removeNoteLocalStorage(noteContent){

const noteDelete = noteContent.substring(0, noteContent.length - 1)
const notesFromLS = getNotesFromLocalStorage()
notesFromLS.forEach(function(note, index) {
            if (note === noteDelete) {
                notesFromLS.splice(index, 1)
            }
        });
    
        // set new array of notes to the local storage
        localStorage.setItem('notes', JSON.stringify(notesFromLS))
}
// function removeNoteLocalStorage(noteContent) {
//       // delete X from the contetn
//       const noteDelete = noteContent.substring(0, noteContent.length - 1)
  
//       // get notes from localstorage
//       const notesFromLS = getNotesFromLocalStorage()
  
//       notesFromLS.forEach(function(note, index) {
//           if (note === noteDelete) {
//               notesFromLS.splice(index, 1)
//           }
//       });
  
//       // set new array of notes to the local storage
//       localStorage.setItem('notes', JSON.stringify(notesFromLS))
  
//     }
