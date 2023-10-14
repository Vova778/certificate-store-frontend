import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import AuthService from "../service/AuthService";
import '../../../assets/styles/auth/Login.css'
import UserValidator from "../../../validator/UserValidator";
import {Cookies} from "react-cookie";
import Alert from "../../common/Alert";
import ErrorMessage from "../../common/ErrorMessage";


const Login = () => {

    const ADMIN_ROLE = 'ADMIN';
    const cookies = new Cookies();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const validateForm = () => {
        let errorMessages
            = UserValidator.validateValuesForLogin(email, password);

        setEmailErrorMessage(errorMessages.emailErrorMessage);
        setPasswordErrorMessage(errorMessages.passwordErrorMessage);
        setIsValid(emailErrorMessage === '' && passwordErrorMessage === '');
        setShowAlert(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        validateForm();
        if (isValid) {
            const authRequest = {
                email: email,
                password: password,
            };
            AuthService.login(authRequest)
                .then(response => {
                    localStorage.setItem('user-email', response.data.email);

                    cookies.set("user-token", response.data.token, {
                        path: "/",
                        sameSite: "strict",
                        maxAge: 604800,
                    });
                    localStorage.setItem('user-role', response.data.role);
                    response.data.role === ADMIN_ROLE ? navigate('/home') : navigate('/home');
                })
                .catch(e => {
                    console.log(e.response.status)
                    if (e.response.status === 500) {
                        setShowAlert(true);
                    }
                });
        }
    };

    return (
        <div className="login">

            <div className="login-container">
                <Alert condition={showAlert} message={'User not found. Try using a different Email or Password.'}/>
                <h2>Login</h2>
                <form id="login-form" method={'post'} onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" value={email}
                           onChange={handleEmailChange} required/>
                    <ErrorMessage message={emailErrorMessage}/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password}
                           onChange={handlePasswordChange} required/>
                    <ErrorMessage message={passwordErrorMessage}/>
                    <button type="submit">Log In</button>
                </form>
            </div>
            <div className="login-place-holder"></div>
        </div>
    );
};

export default Login;
