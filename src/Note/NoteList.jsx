import Note from "./Note.jsx";
import { useContext } from "react";
import { NotesContext } from "./NoteContext.jsx";

export default function NoteList(){
    const notes = useContext(NotesContext);
    return(
        <ul>
            {notes.map(note => (
                <li key={note.id}>
                    <Note note={note}/>
                </li>
            ))}
        </ul>
    )
}

// export default function NoteList({notes, onChange, onDelete}){
//     return(
//         <ul>
//             {notes.map(note => (
//                 <li key={note.id}>
//                     <Note note={note} onChange={onChange} onDelete={onDelete}/>
//                 </li>
//             ))}
//         </ul>
//     )
// }