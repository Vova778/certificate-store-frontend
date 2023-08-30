import React from 'react';
import '../../../assets/styles/Admin.css';
import DataTableContainer from "./components/DataTableContainer";

const AdminUI = ({contentType}) => {

    return (
        <div className={'admin-table-container'}>
            <DataTableContainer contentType={contentType}/>
        </div>

    );
};

export default AdminUI;