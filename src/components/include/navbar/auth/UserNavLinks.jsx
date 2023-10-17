import React from 'react';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {Link} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";

const UserNavLinks = ({handleLogout}) => {
    return (
        <div className={'nav-links'}>
            <label className={'adminUI-name'}>{localStorage.getItem("user-first-name")} {localStorage.getItem("user-last-name") } </label>
            <Link className={'nav-link'} to={'/home'}>
                <div className={'material-icons'}><HomeIcon/></div>
            </Link>
            <Link className={'nav-link'} to={'/checkout'}>
                <div className={'material-icons'}><ShoppingCartIcon/></div>
            </Link>
            <Link className={'nav-link'} onClick={handleLogout}>
                <div className={'material-icons'}><LogoutIcon/></div>
            </Link>
        </div>
    );
};

export default UserNavLinks;