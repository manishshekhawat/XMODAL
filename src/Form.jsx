import { useState } from "react";
import "./Form.css";

export const Form = ({setIsbuttonClicked}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    ph_number: "",
    dob: "",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();

    let resp=formValidation(formData);
    if (resp===true) {
      console.log("Form submitted");
      console.log(formData);

      setFormData({
        username: "",
        email: "",
        ph_number: "",
        dob: "",
      });
    } else {
      alert(resp);
      console.log("Invalid form");
    }

    
  };

  const formValidation = (form) => {
    const {username,email,ph_number,dob}=form;

    if(ph_number.length!=10 || isNaN(Number(ph_number))){
      return "invalid phone number";
    }

    let nowDate=new Date();
    let dobDate=new Date(dob);
    if(dobDate>nowDate){
      return "invalid date of birth";
    }

    return true;
  };

  

  return (
    <div className="formContainer">
      <h2>Fill Details</h2>

      <form onSubmit={handleForm}>
        <label>Username:</label>
        <input
        id="username"
          type="text"
          name="username"
          value={formData.username}
          required
          onChange={handleInput}
        />

        <label>Email Address:</label>
        
        <input
        id="email"
          type="email"
          name="email"
          value={formData.email}
          required
          onChange={handleInput}
        />

        <label>Phone Number:</label>
        <input
          type="text"
          name="ph_number"
          value={formData.ph_number}
          required
          onChange={handleInput}
        />

        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          required
          onChange={handleInput}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
