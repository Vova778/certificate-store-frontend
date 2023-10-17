import React from 'react';
import {Link} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const UnAuthNavLinks = () => {
    return (
        <div className={'nav-links'}>
            <Link className={'nav-link'} to={'/home'}>
                <div className={'material-icons'}><HomeIcon/></div>
            </Link>
            <Link id="login-button" className={'nav-link'} to={'/login'}>Login</Link>
            <Link id="sign-up-button" className={'nav-link'} to={'/register'}>Sign Up</Link>
        </div>
    );
};

export default UnAuthNavLinks;