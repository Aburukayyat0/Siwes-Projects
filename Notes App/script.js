const notesContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

function shownotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

shownotes()
  
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}


createBtn.addEventListener("click", () =>{
    let inputBox = document.createElement("p");
    let button = document.createElement("button");
    button.classList.add("btnDelete");
    button.innerHTML = "Delete";
    button.setAttribute("contenteditable", "false");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    notesContainer.appendChild(inputBox).appendChild(button);
})

notesContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "button"){
        e.target.parentElement.remove();
        updateStorage()
    }else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(note => {
            note.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})