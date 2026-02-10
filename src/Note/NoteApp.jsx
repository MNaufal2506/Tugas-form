import { useImmer } from "use-immer";
import NoteForm from "./NoteForm.jsx";
import NoteList from "./NoteList.jsx";
// import { useReducer } from "react";
import { useImmerReducer } from "use-immer";
import { act } from "react";

let id = 0;
const initialNotes = [
    {id: id++, text: 'Learn HTML', done: false},
    {id: id++, text: 'Learn CSS', done: false},
    {id: id++, text: 'Learn JavaScript', done: false},
    {id: id++, text: 'Learn React', done: false},
];

function notesReducer(draft, action){
    if(action.type === 'ADD_NOTE'){
        draft.push({
            id: id++,
            text: action.text,
            done: false
        });
    }else if(action.type === 'CHANGE_NOTE'){
        const index = draft.findIndex(note => note.id === action.id);
        draft[index].text = action.text;
        draft[index].done = action.done;
    }else if(action.type === 'DELETE_NOTE'){
        const index = draft.findIndex(note => note.id === action.id);
        draft.splice(index, 1)
    }

    // switch(action.type){
    //     case 'ADD_NOTE':
    //         return[
    //             ...notes,
    //             {
    //                 id: id++,
    //                 text: action.text,
    //                 done: false,
    //             }
    //         ];
    //     case 'CHANGE_NOTE':
    //         return notes.map(note =>
    //             note.id === action.id ? {...note, text: action.text, done: action.done} : note
    //         );
    //     case 'DELETE_NOTE':
    //         return notes.filter(note => note.id !== action.id);
    //     default:
    //         return notes;
    // }
}

export default function NoteApp(){
    const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

    function handleAddNote(text){
        dispatch({
            type: 'ADD_NOTE',
            text: text
        })
    }

    function handleChangeNote(note){
        dispatch({
            type: 'CHANGE_NOTE',
            id: note.id,
            text: note.text,
            done: note.done
        })
    }

    function handleDeleteNote(note){
        dispatch({
            type: 'DELETE_NOTE',
            id: note.id
        })
    }

    return(
        <div>
            <h1>Note App</h1>
            <NoteForm onAddNote={handleAddNote}/>
            <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote}/>
        </div>
    )
}