const notesContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || ""; // Use empty string if no notes
}

showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}
 
createBtn.addEventListener("click", () => {
  const inputBox = document.createElement("p");
  const button = document.createElement("button");
  button.classList.add("btnDelete");
  button.textContent = "Delete"; // Use textContent for consistency
  button.disabled = true; // Disable initially for accessibility
  inputBox.classList.add("input-box");
  button.contentEditable = false;
  inputBox.contentEditable = true;
  inputBox.addEventListener("focus", () => button.disabled = false); // Enable delete button on focus
  notesContainer.appendChild(inputBox).appendChild(button);

  inputBox.addEventListener("keyup", updateStorage); // Attach keyup listener once
 
//   button.addEventListener("click", ()=>{
//     inputBox.remove();
// })
});


notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    inputBox.remove();
    e.target.closest(".input-box").remove();
    updateStorage();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
