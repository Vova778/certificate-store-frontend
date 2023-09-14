import React from 'react';
import '../../../assets/styles/Admin.css';
import DataTableContainer from "./components/DataTableContainer";

const AdminUI = () => {

    return (
        <div className={'admin-table-container'}>
            <DataTableContainer/>
        </div>

    );
};

export default AdminUI;