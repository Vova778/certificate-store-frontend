import React, {useState} from 'react';
import UserNavLinks from "./auth/UserNavLinks";
import AdminNavLinks from "./auth/AdminNavLinks";
import UnAuthNavLinks from "./auth/UnAuthNavLinks";
import {useNavigate} from "react-router-dom";
import AuthService from "../../pages/service/AuthService";


const NavLinks = () => {

    const ADMIN_ROLE = 'ADMIN';
    const [role] = useState( localStorage.getItem("user-role"));
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();
        AuthService.logout()
            .then(() => {
                navigate('/login');
            })
            .catch(e => console.log(e.response.status));
    };


    return (
        <div className={'nav-links'}>
            {localStorage.getItem("user-email") ?
                (role === ADMIN_ROLE ? <AdminNavLinks handleLogout={handleLogout}/> : <UserNavLinks handleLogout={handleLogout}/>)
                : <UnAuthNavLinks/>}
        </div>
    );

};

export default NavLinks;
