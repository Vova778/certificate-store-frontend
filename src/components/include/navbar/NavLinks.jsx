import React, {useEffect, useState} from 'react';
import UserNavLinks from "./auth/UserNavLinks";
import AdminNavLinks from "./auth/AdminNavLinks";
import UnAuthNavLinks from "./auth/UnAuthNavLinks";
import UserService from "../../pages/service/UserService";


const NavLinks = () => {

    const ADMIN_ROLE = 'ADMIN';
    const [role, setRole] = useState('');

    useEffect(() => {
        const localStorageEmail = localStorage.getItem("user-email");
        UserService.getUserByEmail(localStorageEmail)
            .then(response => {
                setRole(response.data.userRole);
            });
    }, []);

    return (
        <div className={'nav-links'}>
            {localStorage.getItem("user-email") ? (role === ADMIN_ROLE ? <AdminNavLinks/> : <UserNavLinks/>)
                : <UnAuthNavLinks/>}
        </div>
    );

};

export default NavLinks;