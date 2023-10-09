import React, {useEffect, useState} from 'react';
import '../../../../../assets/styles/include/SearchBox.css';
import {useDispatch, useSelector} from "react-redux";
import {WithContext as ReactTags} from "react-tag-input";
import {useSearchParams} from "react-router-dom";
import {Button} from "@mui/material";
import {setPageRefresh} from "../../../../../store/admin/AdminReducer";

const SearchBox = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const refresh = () => window.location.reload();
    const dispatch = useDispatch();

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [tags, setTags] = useState([]);
    const [searchedCertificateName, setSearchedCertificateName] = useState(searchParams.get('name') || '');
    const [searchedCertificateDescription, setSearchedCertificateDescription] = useState(searchParams.get('description') || '');


    useEffect(() => {
        if (searchParams.has('tagName')) {
            setTags(searchParams.get('tagName').split(',').map(tagName => ({id: tagName, text: tagName})));
        }
    }, []);

    const handleNameChange = (e) => {
        setSearchedCertificateName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setSearchedCertificateDescription(e.target.value);
    };
    const toggleForm = () => {
        setIsFormOpen(!isFormOpen);
    };

    const handleSubmit = () => {
        searchParams.set('name', searchedCertificateName)
        searchParams.set('description', searchedCertificateDescription)
        tags.length > 0 ? searchParams.set('tagName', tags[0].text) : searchParams.set('tagName', '');
        toggleForm();
        setSearchParams(searchParams);
        refresh();
    };


    const handleTagDelete = (i) => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleTagAdd = (tag) => {
        setTags([...tags, tag]);
    };

    const handleTagDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
        setTags(newTags);
    };

    return (
        <div className={'search-box-container'}>
            <div className={'search-box'}>
                <div onClick={toggleForm} className={'search-form-toggle'}>
                    {isFormOpen ? (
                        <span>Hide Search</span>
                    ) : (
                        <span>Show Search</span>
                    )}
                </div>
                {isFormOpen && (<div className={'search-form-content'}>
                        <div className={'search-form-input'}>
                            <input
                                id={'search-form-input-name'}
                                className={'search-form-input-name'}
                                type={'search'}
                                name={'search'}
                                value={searchedCertificateName}
                                placeholder={'Search by Name...'}
                                onChange={handleNameChange}
                            />
                            <textarea
                                id={'search-form-input-description'}
                                className={'search-form-input-description'}
                                name={'search'}
                                value={searchedCertificateDescription}
                                placeholder={'Search by Description...'}
                                onChange={handleDescriptionChange}
                            />
                        </div>
                        <div className={'tags-container'}>
                            <label className={'tag-label'}>Tags</label>
                            <ReactTags
                                tags={tags}
                                handleDelete={handleTagDelete}
                                handleAddition={handleTagAdd}
                                handleDrag={handleTagDrag}
                                inputFieldPosition="top"
                            />
                        </div>
                        <Button
                            id={'search-form-button'}
                            className={'search-form-button'}
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            Go!
                        </Button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default SearchBox;
