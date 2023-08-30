import React from 'react';
import {Link} from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";

const AdminNavLinks = () => {
    return (
        <div className={'nav-links'}>
            <Link id="admin-page-button" className={'nav-link'}
                  to={'/admin/certificates'}>Admin Page</Link>
            <Link className={'nav-link'} to={'/home'}>
                <div className={'material-icons'}><HomeIcon/></div>
            </Link>
            <Link className={'nav-link'} to={'/admin/users'}>
                <div className={'material-icons'}><PeopleIcon/></div>
            </Link>
            <Link className={'nav-link'} to={'/logout'}>
                <div className={'material-icons'}><LogoutIcon/></div>
            </Link>
        </div>
    );
};

export default AdminNavLinks;