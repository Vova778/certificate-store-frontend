import React, {useEffect, useState} from 'react';
import CertificateService from "../../../service/CertificateService";
import ActionButton from "./ActionButton";
import PaginationComponent from "../../../../include/pagination/PaginationComponent";
import AddIcon from '@mui/icons-material/Add';
import SearchBox from "./SearchBox";
import {useDispatch, useSelector} from "react-redux";
import * as adminActions from "../../../../../store/admin/AdminReducer";
import TagList from "./components/TagList";
import {setPageQty} from "../../../../../store/pagination/PaginationReducer";
import {Modal} from "@mui/material";
import { useSearchParams } from 'react-router-dom';



const CertificatesTable = () => {

    const tags_max_count = 3;
    const description_max_length = 64;
    const [isViewModalVisible, setViewModalVisible] = useState(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);


    const dispatch = useDispatch();
    const certificates = useSelector(state => state.adminData.certificates);

    const [searchParams, setSearchParams] = useSearchParams();

    const page = searchParams.get('page') || 0;
    const size = searchParams.get('size') || 10;




    useEffect(() => {
        CertificateService.getAll(page, size)
            .then(response => {
                dispatch(adminActions.setCertificates(response.data._embedded.giftCertificateModelList));
                dispatch(setPageQty(response.data.page.totalPages, size));
            })
            .catch(e => console.log(e));
    }, [dispatch, page, size]);

    const showViewModal = () => setViewModalVisible(true);

    const showDeleteModal = () => setDeleteModalVisible(true);


    return (
        <div>


            <div className={'table-container-header'}>
                <SearchBox/>
                <button
                className={'add-certificate-button'}>
                <AddIcon/> Add new
            </button>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Tags</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Last Update</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {certificates.map(certificate =>
                    <tr key={certificate.id}>
                        <td>{certificate.name}</td>

                        <td>
                            <TagList tags={
                                certificate.tags.length > tags_max_count
                                    ? [
                                        ...certificate.tags.slice(0, tags_max_count),
                                        { id: -1, name: "..." },
                                    ]
                                    : certificate.tags
                            } />
                        </td>

                        <td>
                            {certificate.description.length > description_max_length
                                ? certificate.description.slice(0, description_max_length) + "..."
                                : certificate.description}
                        </td>
                        <td>${certificate.price}</td>
                        <td>{new Date(certificate.lastUpdateDate).toLocaleDateString()}</td>
                        <td>
                            <div className={'action-container'}>
                                <ActionButton buttonsClassName={'view-btn'} name={'Details'}/>
                                <ActionButton buttonsClassName={'edit-btn'} name={'Edit'}/>
                                <ActionButton buttonsClassName={'delete-btn'} name={'Delete'}/>
                            </div>
                        </td>
                    </tr>)}
                </tbody>
            </table>
            <PaginationComponent/>
        </div>
    );
};

export default CertificatesTable;