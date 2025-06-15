import { useState } from "react";
import { Form } from "./Form";
import "./Modal.css";

export const Modal = () => {
  const [isButtonClicked, setIsbuttonClicked] = useState(false);

  const openForm = () => {
    setIsbuttonClicked(true);
  };
  const closeForm = () => {
    setIsbuttonClicked(false);
  };

  return (
    <div className="container">
      <h1>User Details Modal</h1>
      <button onClick={openForm}>Open Form</button>

      {isButtonClicked && (
        <div className="modal" onClick={closeForm}>
          <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
            <Form setIsbuttonClicked={setIsbuttonClicked} />
          </div>
        </div>
      )}
    </div>
  );
};
