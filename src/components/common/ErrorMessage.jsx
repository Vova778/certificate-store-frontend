import React from 'react';
import '../../../src/assets/styles/common/ErrorMessage.css'

const ErrorMessage = ({message}) => {
    return (
        <div>
            {message !== '' && <p className={'error-message'}>{message}</p>}
        </div>
    );
};

export default ErrorMessage;