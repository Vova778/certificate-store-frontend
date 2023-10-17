import React, {useEffect, useState} from 'react';
import UserNavLinks from "./auth/UserNavLinks";
import AdminNavLinks from "./auth/AdminNavLinks";
import UnAuthNavLinks from "./auth/UnAuthNavLinks";
import {useNavigate} from "react-router-dom";
import AuthService from "../../pages/service/AuthService";
import UserService from "../../pages/service/UserService";
import {setRole} from "../../../store/user/UserReducer";


const NavLinks = () => {

    const ADMIN_ROLE = 'ADMIN';
    const [role] = useState(localStorage.getItem("user-role"));
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();
        AuthService.logout()
            .then(() => {
                navigate('/login');
            })
            .catch(e => console.log(e.response.status));
    };

    useEffect(() => {
        if(localStorage.getItem("user-email")){
            const localStorageEmail = localStorage.getItem("user-email");
            UserService.getUserByEmail(localStorageEmail)
                .then(response => {
                    localStorage.setItem("user-role", response.data.userRole);
                    localStorage.setItem("user-first-name", response.data.firstName);
                    localStorage.setItem("user-last-name", response.data.lastName);
                })
                .catch((e) => console.log(e));
        }
    }, []);


    return (

        <div className={'nav-links'}>
            {localStorage.getItem("user-email") ?
                (role === ADMIN_ROLE ? <AdminNavLinks handleLogout={handleLogout}/>
                    : <UserNavLinks handleLogout={handleLogout}/>)
                : <UnAuthNavLinks/>}
        </div>
    );

};

export default NavLinks;