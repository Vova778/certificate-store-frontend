import React, {useState} from 'react';
import '../../../../../assets/styles/include/SearchBox.css';
import {useDispatch, useSelector} from "react-redux";
import {
    setCertificatesOpinions,
    setSearchedCertificateDescription,
    setSearchedCertificateName, setSelectedOpinion
} from "../../../../../store/admin/AdminReducer";

const SearchBox = ({ opinions }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const searchedCertificateName = useSelector(
        (state) => state.adminData.searchedCertificateName
    );
    const searchedCertificateDescription = useSelector(
        (state) => state.adminData.searchedCertificateDescription
    );
    const selectedOpinion = useSelector(
        (state) => state.adminData.selectedOpinion
    );

    const dispatch = useDispatch();

    const toggleForm = () => {
        setIsFormOpen(!isFormOpen);
    };

    const handleNameInputChange = (e) => {
        dispatch(setSearchedCertificateName(e.target.value));
    };

    const handleDescriptionInputChange = (e) => {
        dispatch(setSearchedCertificateDescription(e.target.value));
    };

    return (
        <div className={'search-box-container'}>
            <div className={'search-box'}>
                <div onClick={toggleForm} className={'search-form-toggle'}>
                    <span>Search...</span>
                </div>
                {isFormOpen && (
                    <div className={'search-form'}>
                        <input
                            id={'search-form-input'}
                            className={'search-form-input'}
                            type={'search'}
                            name={'search'}
                            value={searchedCertificateName}
                            onChange={handleNameInputChange}
                            placeholder={'Search by Name...'}
                        />
                        <input
                            id={'search-form-input-description'}
                            className={'search-form-input'}
                            type={'search'}
                            name={'search'}
                            value={searchedCertificateDescription}
                            onChange={handleDescriptionInputChange}
                            placeholder={'Search by Description...'}
                        />
                    </div>
                )}
                <select
                    id="dropdown"
                    className={'dropdown'}
                    onChange={(e) => dispatch(setSelectedOpinion(e.target.value))}
                >
                    {opinions.map((opinion) => (
                        <option key={opinion} value={opinion}>
                            {opinion}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default SearchBox;