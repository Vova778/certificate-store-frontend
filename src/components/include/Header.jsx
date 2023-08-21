import React from 'react';
import {useNavigate} from "react-router-dom";
import certificateShopLogo from '../../assets/img/logo.png';
import '../../assets/styles/include/Header.css';
import NavLinks from "./navbar/NavLinks";

const Header = () => {
    useNavigate();
    return (
        <header>
            <div className={'logo'}>
                <img src={certificateShopLogo} className={'certificate-shop-logo'} alt={'icon'}/>
                <label className={'certificate-shop-name'}>Certificate Shop</label>
            </div>
            <nav>
                <ul className={'nav-links'}>
                        <NavLinks/>
                </ul>
            </nav>
        </header>
    );
};

export default Header;