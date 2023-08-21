import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/auth/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/auth/register/SignUp";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>} exact={true}/>
            <Route path="/register" element={<SignUp/>} exact={true}/>
            <Route path="*" element={<NotFound/>} exact={true}/>
        </Routes>
    );
};

export default AppRouter;