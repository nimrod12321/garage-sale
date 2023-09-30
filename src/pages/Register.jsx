import { Link } from "react-router-dom";
import React, { useState } from "react";
import emailValidator from "email-validator";

export default function Register() {
  const [user,setUser] = useState({
    username: '',
    email: '',
    password: ''
  })
  
  const [passwordValid, setPasswordValid] = useState('');
  const [error, setError] = useState('');


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (name.trim().length === 0) {
      setError("Full name is required.");
    } else if (!emailValidator.validate(email)) {
      setError("Invalid email address.");
    } else if (password.length < 5) {
      setError("Password must be at least 5 characters long.");
    } else if (password !== passwordValid) {
      setError("Passwords do not match.");
    } else {
      setError('Success');
    }
  };

  return (
    <div id="register-page">
      <h2 id="register-page-header">Register</h2>
      <div id="register-container">
        <div id="register-form">
          <input
            className="register-form-input"
            type="text"
            placeholder="Your Full Name"
            value={name}
            onChange={handleChange}
          />
          <input
            className="register-form-input"
            type="text"
            placeholder="Your Email"
            value={email}
            onChange={handleChange}
          />
          <input
            className="register-form-input"
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={handleChangeg}
          />
          <input
            className="register-form-input"
            type="password"
            placeholder="Repeat Your Password"
            value={passwordValid}
            onChange={(e) => setPasswordValid(e.target.value)}
          />
        </div>
        <div id="register-page-img-div">
          <img
            id="register-page-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxS7KPcPsRXifL5M-JveB7Z7HCRLAEt9lYw&usqp=CAU"
            alt="Registration Image"
          />
        </div>
      </div>
      {error && <p className="error-message">{error}</p>}
      <button className="n-button" onClick={validateForm}>
        Register
      </button>
      <Link id="register-link" to={"/Signin"}>
        I am already a member
      </Link>
    </div>
  );
}
