const fs = require("fs");

const fetchData = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.txt"));
  } catch (error) {
    console.log("there is an error", error);
    return [];
  }
};

const logNot = (note) => {
  console.log("note here", note);
  console.log(`title:${note.title}`);
  console.log(`body:${note.body}`);
};

const addNote = (title, body) => {
  var notes = fetchData();
  var note = { title, body };

  const existe = notes.filter((note) => note.title === title);

  console.log("existe", existe);
  if (existe.length === 0) {
    notes.push(note);
    fs.writeFileSync("notes.txt", JSON.stringify(notes));
    logNot(note);
  } else {
    console.log("note alreday existe");
  }
};

const getAll = () => {
  var notes = fetchData();
  notes.forEach((el) => {
    logNot(el);
  });
};

const getOneNote = (title) => {
  var notes = fetchData();
  const note = notes.find((el) => el.title === title);
  logNot(note);
};

const removeNote = (title) => {
  var notes = fetchData();
  const note = notes.filter((note) => note.title !== title);
  fs.writeFileSync("notes.txt", JSON.stringify(note));
  console.log(note);
  logNot(note);
};

module.exports = {
  addNote,
  getAll,
  getOneNote,
  removeNote,
};
