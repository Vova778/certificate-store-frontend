import React from 'react';

const ModalFormErrorMessage = ({message}) => {
    return (
        <div>
            {message !== '' && <p className={'error-message'}>{message}</p>}
        </div>
    );
};

export default ModalFormErrorMessage;