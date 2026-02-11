import React, { useState, useContext } from "react";
import { StudentContext } from "./StudentContext";

export default function StudentForm() {
  const { dispatch } = useContext(StudentContext);

  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [kelas, setKelas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !umur || !kelas) return;

    dispatch({
      type: "ADD_STUDENT",
      payload: { id: Date.now(), nama, umur, kelas },
    });

    setNama("");
    setUmur("");
    setKelas("");
  };

  return (
    <table className="table form-table">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Umur</th>
          <th>Kelas</th>
          <th>Tambah Data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="Umur"
              value={umur}
              onChange={(e) => setUmur(e.target.value)}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="Kelas"
              value={kelas}
              onChange={(e) => setKelas(e.target.value)}
            />
          </td>
          <td>
            <button onClick={handleSubmit}>Tambah</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
