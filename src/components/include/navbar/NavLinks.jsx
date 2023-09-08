import React, {useEffect, useState} from 'react';
import UserNavLinks from "./auth/UserNavLinks";
import AdminNavLinks from "./auth/AdminNavLinks";
import UnAuthNavLinks from "./auth/UnAuthNavLinks";
import UserService from "../../pages/service/UserService";


const NavLinks = () => {

    const ADMIN_ROLE = 'ADMIN';
    const [role, setRole] = useState('');

    useEffect(() => {
        if(sessionStorage.getItem("user-email")){
        const sessionStorageEmail = sessionStorage.getItem("user-email");
        UserService.getUserByEmail(sessionStorageEmail)
            .then(response => {
                setRole(response.data.role);
            });
        }
    }, []);

    return (
        <div className={'nav-links'}>
            {sessionStorage.getItem("user-email") !== null ? (role === ADMIN_ROLE ? <AdminNavLinks/> : <UserNavLinks/>)
                : <UnAuthNavLinks/>}
        </div>
    );

};

export default NavLinks;