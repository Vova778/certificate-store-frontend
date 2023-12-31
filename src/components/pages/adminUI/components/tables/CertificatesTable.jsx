import React, {useEffect, useState} from 'react';
import {format} from 'date-fns';
import CertificateService from "../../../service/CertificateService";
import ActionButton from "./ActionButton";
import PaginationComponent from "../../../../include/pagination/PaginationComponent";
import AddIcon from '@mui/icons-material/Add';
import SearchBox from "./SearchBox";
import {useDispatch, useSelector} from "react-redux";
import * as adminActions from "../../../../../store/admin/AdminReducer";
import TagList from "./components/TagList";
import {setPageQty} from "../../../../../store/pagination/PaginationReducer";
import {useNavigate, useSearchParams} from 'react-router-dom';
import CertificateView from "./components/modal/CertificateView";
import CertificateDelete from "./components/modal/CertificateDelete";
import CertificateAdd from "./components/modal/CertificateAdd";
import CertificateEdit from "./components/modal/CertificateEdit";
import {setPageRefresh} from "../../../../../store/admin/AdminReducer";


const CertificatesTable = () => {

    const tags_max_count = 3;
    const description_max_length = 64;
    const [isViewModalVisible, setViewModalVisible] = useState(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [isAddModalVisible, setAddModalVisible] = useState(false);
    const [isEditModalVisible, setEditModalVisible] = useState(false);


    const dispatch = useDispatch();
    const certificates = useSelector(state => state.adminData.certificates);
    const selectedCertificate = useSelector(state => state.adminData.selectedCertificate);

    const [searchParams, setSearchParams] = useSearchParams();
    const searchedCertificationTitle = searchParams.get('name') || '';
    const searchedCertificationDescription = searchParams.get('description') || '';
    const searchedTagNames = searchParams.get('tagName') || [];
    const sortByName = searchParams.get('sortByName') || '';
    const sortByDate = sortByName ==='' ? searchParams.get('sortByDate') || '' : 'DESC';

    const page = searchParams.get('page') || 0;
    const size = searchParams.get('size') || 10;

    const navigate = useNavigate();

    const newSearchParams = {
        tagName: searchedTagNames,
        name: searchedCertificationTitle,
        description: searchedCertificationDescription,
        sortByName: sortByName,
        sortByDate: sortByDate,
        page: page,
        size: size,
    }


    useEffect(() => {
        CertificateService.getAllWithParams( newSearchParams )
            .then(response => {
                dispatch(adminActions.setCertificates(response.data._embedded.giftCertificateModelList));
                dispatch(setPageQty(response.data.page.totalPages));
            })
            .catch(e => console.log(e));
    }, [dispatch]);


    const handleSortClick = (column) => {
        if (column === 'sortByDate') {
            newSearchParams.sortByName = '';
            newSearchParams.sortByDate = newSearchParams.sortByDate === 'ASC' ? 'DESC' : 'ASC';
        } else if (column === 'sortByName') {
            newSearchParams.sortByName = newSearchParams.sortByName === 'ASC' ? 'DESC' : 'ASC';
            newSearchParams.sortByDate = '';
        }
        updateSearchParams();
    };
    const updateSearchParams = () => {
        setSearchParams(newSearchParams);
        navigate(0);
    };


    const openViewModal = () => setViewModalVisible(true);
    const openAddModal = () => setAddModalVisible(true);
    const openEditModal = () => setEditModalVisible(true);
    const openDeleteModal = () => setDeleteModalVisible(true);


    const closeViewModal = () => setViewModalVisible(false);
    const closeAddModal = () => setAddModalVisible(false);
    const closeEditModal = () => setEditModalVisible(false);
    const closeDeleteModal = () => setDeleteModalVisible(false);


    return (
        <div>
            <CertificateAdd
                setVisible={isAddModalVisible}
                handleClose={closeAddModal}
            />
            <CertificateEdit
                setVisible={isEditModalVisible}
                handleClose={closeEditModal}
                certificateToUpdate={selectedCertificate}
            />
            <CertificateView
                setVisible={isViewModalVisible}
                handleClose={closeViewModal}
                certificate={selectedCertificate}
            />
            <CertificateDelete
                setVisible={isDeleteModalVisible}
                handleClose={closeDeleteModal}
                certificate={selectedCertificate}
            />

            <div className={'table-container-header'}>
                <SearchBox/>
                <button
                    className={'add-certificate-button'} onClick={openAddModal}>
                    <AddIcon/> Add new
                </button>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th onClick={() => handleSortClick('sortByDate')}>
                        Create Date {newSearchParams.sortByDate === 'ASC' ? <>&#9650;</> : <>&#9660;</>}
                    </th>
                    <th onClick={() => handleSortClick('sortByName')}>
                        Title {newSearchParams.sortByName === 'ASC' ? <>&#9650;</> : <>&#9660;</>}
                    </th>
                    <th>Description</th>
                    <th>Tags</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {certificates.map(certificate =>
                    <tr key={certificate.id}>
                        <td>{format(new Date(certificate.createDate), "yyyy-MM-dd HH:mm:ss")}</td>
                        <td>{certificate.name}
                        </td>
                        <td>
                            {certificate.description.length > description_max_length
                                ? certificate.description.slice(0, description_max_length) + "..."
                                : certificate.description}
                        </td>
                        <td>
                            <TagList tags={
                                certificate.tags.length > tags_max_count
                                    ? [
                                        ...certificate.tags.slice(0, tags_max_count),
                                        {id: -1, name: "..."},
                                    ]
                                    : certificate.tags
                            }/>
                        </td>
                        <td>${certificate.price}</td>
                        <td>
                            <div className={'action-container'}>
                                <ActionButton buttonsClassName={'view-btn'} name={'View'} handler={() => {
                                    dispatch(adminActions.setSelectedCertificate(certificate));
                                    openViewModal();
                                }}/>
                                <ActionButton buttonsClassName={'edit-btn'} name={'Edit'} handler={() => {
                                    dispatch(adminActions.setSelectedCertificate(certificate));
                                    openEditModal();
                                }}/>
                                <ActionButton buttonsClassName={'delete-btn'} name={'Delete'} handler={() => {
                                    dispatch(adminActions.setSelectedCertificate(certificate));
                                    openDeleteModal();
                                }}/>
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