import React from "react";
import "./index.css";
import { useState } from "react";

export default function App() {

// state for names
 const [firstname, setFirstname] = useState("");
 const [lastname, setLastname] = useState("");
 const [email, setEmail] = useState("");

 // state for checking name
 const [isfirstname, setIsFirstname] = useState(false);
 const [islastname, setIsLastname] = useState(false);
 const [isemail, setISEmail] = useState(false);

 // submit state
 const [submit, setsubmit] = useState(false)


 const onsubmit =(event)=>{
  event.preventDefault()

  if (firstname === "" && lastname === "" && email === "" ) {
    setIsFirstname(true)
    setIsLastname(true)
    setISEmail(true)
  }

  if (firstname !== "" && lastname !== "" && email !== "") {
    setsubmit(true)
    setFirstname("")
    setLastname("")
    setEmail("")
    setIsFirstname(false)
    setIsLastname(false)
    setISEmail(false)
  }
 }

  return (
    <div class="form-container">
      
      <form onSubmit={onsubmit} class="register-form">
        {/* Uncomment the next line to show the success message */}
        {submit === true ? <div class="success-message">Success! Thank you for registering</div> : ""}
        <input onChange={(event) =>setFirstname(event.target.value)} value={firstname}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {isfirstname === true ?<span id="first-name-error">Please enter a first name</span> : ""}
        <input onChange={(event) =>setLastname(event.target.value)} value={lastname}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {islastname === true ? <span id="last-name-error">Please enter a last name</span> :""}
        <input onChange={(event) =>setEmail(event.target.value)} value={email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email" 
        />
        {/* Uncomment the next line to show the error message */}
        {isemail === true ?  <span id="email-error">Please enter an email address</span>: ""}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
