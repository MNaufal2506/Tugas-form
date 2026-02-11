import React, { useState, useContext } from "react";
import { StudentContext } from "./StudentContext";

export default function StudentList() {
  const { students, dispatch } = useContext(StudentContext);

  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ nama: "", umur: "", kelas: "" });

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_STUDENT", payload: id });
  };

  const startEdit = (student) => {
    setEditId(student.id);
    setEditData({
      nama: student.nama,
      umur: student.umur,
      kelas: student.kelas,
    });
  };

  const saveEdit = (id) => {
    dispatch({
      type: "UPDATE_STUDENT",
      payload: { id, ...editData },
    });
    setEditId(null);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Umur</th>
          <th>Kelas</th>
          <th>Sunting</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s, i) => (
          <tr key={s.id}>
            <td>{i + 1}</td>
            <td>{editId === s.id ? ( <input value={editData.nama} onChange={(e) => setEditData({ ...editData, nama: e.target.value })} /> ) : ( s.nama )}</td>
            <td>{editId === s.id ? ( <input type="number" min="1" max="100" step="1" value={editData.umur} onChange={(e) => setEditData({ ...editData, umur: e.target.value })} /> ) : ( s.umur )}</td>
            <td>{editId === s.id ? ( <input value={editData.kelas} onChange={(e) => setEditData({ ...editData, kelas: e.target.value })}/> ) : ( s.kelas )}</td>
            <td>
              {editId === s.id ? (
                <button className="edit" onClick={() => saveEdit(s.id)}>
                  Simpan
                </button>
              ) : (
                <button className="edit" onClick={() => startEdit(s)}>
                  Edit
                </button>
              )}
              <button className="delete" onClick={() => handleDelete(s.id)}>
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
