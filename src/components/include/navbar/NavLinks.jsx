import React from 'react';
import UnAuthNavLinks from "./auth/UnAuthNavLinks";


const NavLinks = () => {

    return (
        <div className={'nav-links'}>
          <UnAuthNavLinks/>
        </div>
    );

};

export default NavLinks;