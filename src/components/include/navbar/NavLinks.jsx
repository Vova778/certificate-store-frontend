import React from 'react';
import UnAuthNavLinks from "./auth/UnAuthNavLinks";
import UserNavLinks from "./auth/UserNavLinks";
import AdminNavLinks from "./auth/AdminNavLinks";


const NavLinks = () => {

    return (
        <div className={'nav-links'}>
          <AdminNavLinks/>
        </div>
    );

};

export default NavLinks;