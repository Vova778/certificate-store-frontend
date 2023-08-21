import React from "react";
import '../../../assets/styles/Login.css'

const Login = () => {

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form id="login-form">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />

                        <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;
