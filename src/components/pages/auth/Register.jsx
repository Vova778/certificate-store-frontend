import React, {useState} from "react";
import '../../../assets/styles/auth/Register.css'
import AuthService from "../service/AuthService";
import {useNavigate} from "react-router-dom";
import Alert from "../../common/Alert";
import ErrorMessage from "../../common/ErrorMessage";
import UserValidator from "../../../validator/UserValidator";

const Register = () => {
    const navigate = useNavigate();
    const [firstNameErrorMessage, setFirstNameErrorMessage] = useState('');
    const [lastNameErrorMessage, setLastNameErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [repeatPasswordErrorMessage, setRepeatPasswordErrorMessage] = useState('');
    const [equalsPasswordsErrorMessage, setEqualsPasswordErrorMessage] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        repeatPassword: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const {
            firstNameErrorMessage,
            lastNameErrorMessage,
            emailErrorMessage,
            passwordErrorMessage,
            repeatPasswordErrorMessage,
            equalsPasswordsErrorMessage,
        } = UserValidator.validateValuesForSignUp(...Object.values(formData));

        setFirstNameErrorMessage(firstNameErrorMessage);
        setLastNameErrorMessage(lastNameErrorMessage);
        setEmailErrorMessage(emailErrorMessage);
        setPasswordErrorMessage(passwordErrorMessage);
        setRepeatPasswordErrorMessage(repeatPasswordErrorMessage);
        setEqualsPasswordErrorMessage(equalsPasswordsErrorMessage);

        setIsValid(
            emailErrorMessage === ''
            && passwordErrorMessage === ''
            && firstNameErrorMessage === ''
            && lastNameErrorMessage === ''
            && repeatPasswordErrorMessage === ''
            && equalsPasswordsErrorMessage === '');

        setShowAlert(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        validateForm();
        if (isValid) {
            const authRequest = {
                email: formData.email,
                firstName: formData.firstName,
                lastName: formData.lastName,
                password: formData.password,
            };
            AuthService.register(authRequest)
                .then(() => navigate('/login'))
                .catch(e => {
                    console.log(e.response.status);
                    if (e.response.status === 500) {
                        setShowAlert(true);
                    }
                });
        }
    };

    return (
        <div className="register-container">
            <Alert condition={showAlert} message={'User with same email exist. Try change email.'}/>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <ErrorMessage message={emailErrorMessage}/>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                    />
                    <ErrorMessage message={firstNameErrorMessage}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                    />
                    <ErrorMessage message={lastNameErrorMessage}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                    <ErrorMessage message={passwordErrorMessage}/>
                </div>
                <div className="form-group">
                    <label htmlFor="repeatPassword">Repeat Password:</label>
                    <input
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        value={formData.repeatPassword}
                        onChange={handleInputChange}
                        required
                    />
                    <ErrorMessage message={repeatPasswordErrorMessage}/>
                    <ErrorMessage message={equalsPasswordsErrorMessage}/>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
