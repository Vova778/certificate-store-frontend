import React from 'react';
import '../../assets/styles/common/NotFound.css';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className={'not-found'}>
        <div className={'not-found-container'}>
            <h1 className={'not-found-header'}>Page Not Found</h1>
            <h3>This page might not exist...</h3>
            <button className={'back-home-button'}>
                <Link to={'/certificates'} className={'back-home-link'}>Home</Link>
            </button>
        </div>
            <div className="not-found-place-holder"></div>
        </div>
    );
};

export default NotFound;