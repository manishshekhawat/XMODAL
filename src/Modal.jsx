import { useState } from "react"
import { Form } from "./Form"
import  "./Modal.css"

export const Modal=()=>{
    const [isButtonClicked,setIsbuttonClicked]=useState(false);

    const openForm=()=>{
        setIsbuttonClicked(true);
    }

    return(
        <div className="container">
            <h1>User Details Modal</h1>
            <button onClick={openForm}>Open Form</button>

            
              {isButtonClicked && <Form setIsbuttonClicked={setIsbuttonClicked}/>}  
            
            
        </div>
    )
}