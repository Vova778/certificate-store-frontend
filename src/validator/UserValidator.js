class UserValidator {
    static regexPatterns = {
        email: /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/,
        password: /^([A-Za-z0-9_]{4,30})$/,
        firstName: /^([A-Za-z0-9_ ]{3,30})$/,
        lastName: /^([A-Za-z0-9_ ]{3,30})$/,
    };

    static errorMessages = {
        email: 'Enter a valid email in the joe@abc.com format',
        password: 'Password length must not be less than 4 characters and greater than 30 characters and can only contain letters, numbers and underscores',
        firstName: 'First Name length must not be less than 3 and greater than 30 characters',
        lastName: 'Last Name length must not be less than 3 and greater than 30 characters',
        passwordEquals: "Password and Repeat Password aren't the same",
    };

    static validateField(value, fieldName) {
        if (!this.regexPatterns[fieldName].test(value)) {
            return this.errorMessages[fieldName];
        }
        return '';
    }

    static checkEqualsPasswords(password, repeatPassword) {
        if (password !== repeatPassword) {
            return this.errorMessages.passwordEquals;
        }
        return '';
    }

    static validateValuesForLogin(email, password) {
        const emailErrorMessage = this.validateField(email, 'email');
        const passwordErrorMessage = this.validateField(password, 'password');

        return {
            emailErrorMessage,
            passwordErrorMessage,
        };
    }

    static validateValuesForSignUp(email, firstName, lastName, password, repeatPassword) {
        const firstNameErrorMessage = this.validateField(firstName, 'firstName');
        const lastNameErrorMessage = this.validateField(lastName, 'firstName');
        const emailErrorMessage = this.validateField(email, 'email');
        const passwordErrorMessage = this.validateField(password, 'password');
        const repeatPasswordErrorMessage = this.validateField(repeatPassword, 'password');
        const equalsPasswordsErrorMessage
            = this.checkEqualsPasswords(password, repeatPassword);

        return {
            firstNameErrorMessage,
            lastNameErrorMessage,
            emailErrorMessage,
            passwordErrorMessage,
            repeatPasswordErrorMessage,
            equalsPasswordsErrorMessage,
        };
    }
}

export default UserValidator;
