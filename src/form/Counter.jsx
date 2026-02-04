import { useState } from "react";

export default function Counter (){
    let [counter,setCOunter]=  useState(0)
    return(
        <div>
            <button onClick={() => {
                setCOunter(counter + 2); 
                console.log(counter)}}>
                Increment
            </button>
            <h1>Counter : {counter}</h1>
        </div>
    )
}