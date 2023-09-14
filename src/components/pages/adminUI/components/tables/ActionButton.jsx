import React from 'react';

const ActionButton = ({buttonsClassName, name, handler}) => {
    return (
        <button id={'action-btn'} className={buttonsClassName} onClick={handler}>{name}</button>
    );
};

export default ActionButton;