import { useState } from "react";
import { useImmer } from "use-immer";

export default function Task(){
    const [item, setItem] = useState("");
    const [items, setItems] = useImmer([]);

    function handleChange(e){
        setItem(e.target.value);
    }

    function handleClick(e){
        e.preventDefault(); 
        setItems((items) => {
            items.push(item);
        });
        setItem("");
    }

    return(
        <div>
            <h1>Daftar Nama Calon</h1>
            <form >
                <input value={item} onChange={handleChange} />
                <button onClick={handleClick} >Tambah Nama
                </button>
            </form>
            <h1>List Tasks</h1>
            {/* <ul>
                {items.map((item, index) => 
                     <li key={index}>{item}</li> )
                }
            </ul> */}
           <table border="1" cellPadding="10" style={{ marginTop: "20px", width: "40%" }}>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    );
}