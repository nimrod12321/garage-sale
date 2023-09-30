import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/register.css';

export default function Signin() {
    // Use state to manage input values
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform sign-in logic here with 'email' and 'password'
    };

    return (
        <div id="register-page">
            <h2 id="register-page-header">Sign in</h2>
            <div id="sign-in-container">
                <form id="sign-in-form" onSubmit={handleSubmit}>
                    <input
                        className="register-form-input"
                        type="text"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="register-form-input"
                        type="password"
                        placeholder="Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="n-button" type="submit">Sign in</button>
                </form>
                <div id="register-page-img-div">
                    <img
                        id="register-page-img"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxS7KPcPsRXifL5M-JveB7Z7HCRLAEt9lYw&usqp=CAU"
                        alt="Sign in"
                    />
                </div>
            </div>
            <Link id="register-link" to={"/"}>Not a member yet</Link>
        </div>
    )
}