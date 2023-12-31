import React from 'react';
import {Link} from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";

const AdminNavLinks = ({handleLogout}) => {


    return (
        <div className={'nav-links'}>
            <label className={'adminUI-name'}>{localStorage.getItem("user-first-name")} {localStorage.getItem("user-last-name") } </label>
            <Link id="admin-page-button" className={'nav-link'}
                  to={'/admin/certificates'}>Admin Page</Link>
            <Link className={'nav-link'} to={'/home'}>
                <div className={'material-icons'}><HomeIcon/></div>
            </Link>
            <Link className={'nav-link'} onClick={handleLogout}>
                <div className={'material-icons'}><LogoutIcon/></div>
            </Link>
        </div>
    );
};

export default AdminNavLinks;