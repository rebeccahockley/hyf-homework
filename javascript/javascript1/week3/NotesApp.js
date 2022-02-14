const notes = [];

function saveNote(Task, IDNum) {
  const note = { content: Task, id: IDNum };
  notes.push(note);
}

saveNote("Change bedding", 1);
saveNote("Wash clothes", 2);
saveNote("Plant flowers", 3);

console.log(notes);

function getNote(id) {
  const firstNote = [];
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      firstNote.push(notes[i].content);
      console.log(firstNote);
    }
  }
}

getNote(2);

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      "The note with ID: " +
        notes[i].id +
        " has the following text: " +
        notes[i].content
    );
  }
}

logOutNotesFormatted();

//* Unique Idea to Delete Note *//

function deleteNote(IDNum) {
  notes.splice(IDNum, 1);
}

deleteNote(2);
console.log(notes);
