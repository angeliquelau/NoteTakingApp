import AsyncStorage from "@react-native-async-storage/async-storage";

export type Note = {
    text: string;
    id: string;
};

export type NoteStore = {
    notes: Array<Note>;
};

const STORE_KEY = 'TAKE_NOTES_STORE';

export const getAllNotes = async () => {
    const storeItem = await AsyncStorage.getItem(STORE_KEY);

    if(storeItem) {
        return JSON.parse(storeItem) as NoteStore // convert to store it as NoteStore
    }
    return { notes: [] };
};

export const getNote = async (id: string) => {
    const noteStore = await getAllNotes();
    const note = noteStore.notes.find(note => note.id == id);
    return note;
};

export const saveNote = async (text: string, noteId: string | undefined) => {
    const noteStore = await getAllNotes();
    if(noteId) { // if i have note id
         //edit the note
         const noteIndex = noteStore.notes.findIndex(note => note.id == noteId);
         noteStore.notes.splice(noteIndex, 1, { id: noteId, text: text }) //replace array element with that noteId with new edited text
    }
    else {
        //add a note
        noteStore.notes.push({ id: Date.now().toString(), text: text }); //push new note onto the existing array
    }

    await AsyncStorage.setItem(STORE_KEY, JSON.stringify(noteStore)); //requires key and value
};

export const deleteNote = async (noteId: string) => {
    const noteStore = await getAllNotes();
    const noteIndex = noteStore.notes.findIndex(note => note.id == noteId);

    noteStore.notes.splice(noteIndex, 1); //remove the element with this index
    const newStore = JSON.stringify(noteStore); //stringify the array
    await AsyncStorage.setItem(STORE_KEY, newStore); //store it back into AsyncStorage
}