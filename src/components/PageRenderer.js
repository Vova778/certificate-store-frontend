import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/auth/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/auth/register/Register";
import Store from "./pages/store/Store";
import AdminUI from "./pages/adminUI/AdminUI";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Store/>} exact={true}/>
            <Route path="/home" element={<Store/>} exact={true}/>
            <Route path="/certificates" element={<Store/>} exact={true}/>
            <Route path="/login" element={<Login/>} exact={true}/>
            <Route path="/register" element={<Register/>} exact={true}/>
            <Route path="*" element={<NotFound/>} exact={true}/>
            <Route path="/admin/certificates" element={<AdminUI/>} exact={true}/>
        </Routes>
    );
};

export default AppRouter;