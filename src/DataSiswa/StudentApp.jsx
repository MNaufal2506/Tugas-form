import React from "react";
import { useImmerReducer } from "use-immer";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import { StudentContext } from "./StudentContext";

const initialState = [];

function reducer(draft, action) {
  switch (action.type) {
    case "ADD_STUDENT":
      draft.push(action.payload);
      draft.sort((a, b) => a.nama.localeCompare(b.nama));
      break;

    case "DELETE_STUDENT":
      return draft.filter((s) => s.id !== action.payload);

    case "EDIT_STUDENT":
      const idx = draft.findIndex((s) => s.id === action.payload.id);
      if (idx !== -1) {
        draft[idx] = action.payload;
        draft.sort((a, b) => a.nama.localeCompare(b.nama));
      }
      break;

    default:
      break;
  }
}

export default function StudentApp() {
  const [students, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <StudentContext.Provider value={{ students, dispatch }}>
    <div className="container">
      <h1>Manajemen Data Siswa</h1>
      <div className="table-wrapper">
        <StudentForm/>
        <StudentList/>
      </div>
    </div>
    </StudentContext.Provider>
  );
}
