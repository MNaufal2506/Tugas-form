import { useState } from "react";
import { NotesDispatchContext } from "./NoteContext";
import { useContext } from "react";

export default function Note({note}){
    const dispatch = useContext(NotesDispatchContext);
    const [isEditing, setIsEditing] = useState(false);

    function handleChangeText(e){
    dispatch({
        type:'CHANGE_NOTE',
        id: note.id,
        text: e.target.value
    })
}

function handleChangeDone(e){
    dispatch({
        type:'CHANGE_DONE',
        id: note.id,
        done: e.target.checked
    })
}

    function handleDelete(){
        dispatch({
            type:'DELETE_NOTE',
            id: note.id
        })
    }

    let component;
    if(isEditing){
        component = (
            <>
                <input value={note.text} onChange={handleChangeText}/>
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        )
    }else{
        component = (
            <>
                {note.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }

    return(
        <label>
            <input type="checkbox" checked={note.done} onChange={handleChangeDone}/>
            {component}
            <button onClick={handleDelete}>Delete</button>
        </label>
    )

}

// export default function Note({note, onChange, onDelete}){
//     const [isEditing, setIsEditing] = useState(false);
//     let component;

//     function handleChangeText(e){
//         const newNote = {...note, text: e.target.value};
//         onChange(newNote);
//     }

//     if(isEditing){
//         component = (
//             <>
//                 <input value={note.text} onChange={handleChangeText}/>
//                 <button onClick={() => setIsEditing(false)}>Save</button>
//             </>
//         )
//     }else{
//         component = (
//             <>
//                 {note.text}
//                 <button onClick={() => setIsEditing(true)}>Edit</button>
//             </>
//         )
//     }

//     function handleChangeDone(e){
//         const newNote = {...note, done: e.target.checked};
//         onChange(newNote)
//     }

//     return(
//         <label>
//             <input type="checkbox" checked={note.done} onChange={handleChangeDone}/>
//             {component}
//             <button onClick={() => onDelete(note)}>Delete</button>
//         </label>
//     )

// }