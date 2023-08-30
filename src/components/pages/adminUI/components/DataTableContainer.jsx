import React from 'react';
import UsersTable from "./tables/UsersTable";
import CertificatesTable from "./tables/CertificatesTable";

const DataTableContainer = ({contentType}) => {
    const certificates = 'certificates';

    return (
        <div>
            {contentType === certificates
                ? <CertificatesTable/>
                : <UsersTable/>}

        </div>
    );
};

export default DataTableContainer;