import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/auth/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/auth/register/Register";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>} exact={true}/>
            <Route path="/register" element={<Register/>} exact={true}/>
            <Route path="*" element={<NotFound/>} exact={true}/>
        </Routes>
    );
};

export default AppRouter;