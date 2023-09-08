import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import AuthService from "../service/AuthService";
import '../../../assets/styles/auth/Login.css'
import {Cookies} from "react-cookie";
import {post} from "axios";

const Login = () => {

    const ADMIN_ROLE = 'ADMIN';
    const cookies = new Cookies();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isValid) {
            const authRequest = {
                email: email,
                password: password,
            };
            AuthService.login(authRequest)
                .then(response => {
                    sessionStorage.setItem('user-email', response.data.email);

                    cookies.set("user-token", response.data.token, {
                        path: "/",
                        sameSite: "strict",
                        maxAge: 604800,
                    });
                    sessionStorage.setItem('user-role', response.data.role);
                    response.data.role === ADMIN_ROLE ? navigate('/home') : navigate('/home');
                })
                .catch(e => {
                    console.log(e.response.status)
                });
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form id="login-form" method={'post'} onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" value={email}
                       onChange={handleEmailChange} required/>

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password}
                       onChange={handlePasswordChange} required/>

                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;
