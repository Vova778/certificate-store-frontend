import React, {useState} from 'react';
import UserNavLinks from "./auth/UserNavLinks";
import AdminNavLinks from "./auth/AdminNavLinks";
import UnAuthNavLinks from "./auth/UnAuthNavLinks";


const NavLinks = () => {

    const ADMIN_ROLE = 'ADMIN';
    const [role] = useState( localStorage.getItem("user-role"));


    return (
        <div className={'nav-links'}>
            {localStorage.getItem("user-email") ?
                (role === ADMIN_ROLE ? <AdminNavLinks/> : <UserNavLinks/>)
                : <UnAuthNavLinks/>}
        </div>
    );

};

export default NavLinks;
