import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext.jsx";

export default function NoteForm() {
  const [text, setText] = useState("");
  const dispatch = useContext(NotesDispatchContext);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    dispatch({
      type: "ADD_NOTE",
      text: text,
    });
    setText("");
  }

  return (
    <>
      <input placeholder="Add Note" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </>
  );
}

// export default function NoteForm({onAddNote}){
//     const [text, setText] = useState('');

//     function handleChange(e){
//         setText(e.target.value);
//     }

//     function handleClick(){
//         setText('');
//         onAddNote(text);
//     }

//     return(
//         <>
//             <input placeholder="Add Note" value={text} onChange={handleChange}/>
//             <button onClick={handleClick}>Add</button>
//         </>
//     )

// }
