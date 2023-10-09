import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Button,
    TextField,
} from '@mui/material';
import {WithContext as ReactTags} from 'react-tag-input'
import '../../../../../../../assets/styles/CertificateForm.css';
import ModalFormErrorMessage from "./error/ModalFormErrorMessage";
import CertificateService from "../../../../../service/CertificateService";
import {setPageRefresh} from "../../../../../../../store/admin/AdminReducer";

const CertificateAdd = ({setVisible, handleClose}) => {
    const [isValid] = useState(true);
    const [certificate, setCertificate] = useState({
        name: '', description: '', price: 1, duration: 0, tags: []
    });
    const [tags, setTags] = useState([]);
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [descriptionErrorMessage, setDescriptionErrorMessage] = useState('');
    const [priceErrorMessage, setPriceErrorMessage] = useState('');
    const [durationErrorMessage, setDurationErrorMessage] = useState('');
    const [tagsErrorMessage, setTagsErrorMessage] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setTags(tags);
        mapTagInCertificate();
    }, [tags]);

    const handleTagDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
        mapTagInCertificate();
    };

    const handleTagAdd = tag => {
        setTags([...tags, tag]);
        mapTagInCertificate();
    };

    const mapTagInCertificate = () => {
        setCertificate({...certificate, tags: tags.map((tag) => ({name: tag.text}))});
    }

    const handleTagDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
        setTags(newTags);
    };

    const handleNameChange = (event) => {
        setCertificate({...certificate, name: event.target.value});
    }

    const handleDescriptionChange = (event) => {
        setCertificate({...certificate, description: event.target.value});
    }

    const handlePriceChange = (event) => {
        setCertificate({...certificate, price: event.target.value});
    }

    const handleDurationChange = (event) => {
        setCertificate({...certificate, duration: event.target.value});
    }

    const handleCloseForm = () => {
        setCertificate({
            ...certificate,
            name: '',
            description: '',
            price: 1,
            duration: 0,
            tags: []
        });
        setTags([]);
        setNameErrorMessage('');
        setDescriptionErrorMessage('');
        setPriceErrorMessage('');
        setDurationErrorMessage('');
        setTagsErrorMessage('');
        handleClose();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        mapTagInCertificate();

        if (isValid) {
            CertificateService.save(certificate)
                .then(() => {
                    handleCloseForm();
                })
                .catch(e => {
                    console.log(e.errorText);
                });
            window.local.reload();
        }
    };

    return (
            <Dialog  className="modal-form-container" open={setVisible} onClose={handleCloseForm}>
                <DialogTitle className="certificate-header">Add Certificate</DialogTitle>
                <DialogContent>
                    <form method="post" onSubmit={handleSubmit}>
                        <div className={'input-field'}>
                            <TextField
                                type={'text'}
                                label={'Title'}
                                value={certificate.name}
                                onChange={handleNameChange}
                                required={true}
                            />
                        </div>
                        <ModalFormErrorMessage message={nameErrorMessage}/>
                        <div className={'input-field'}>
                            <TextField
                                type={'text'}
                                label={'Description'}
                                value={certificate.description}
                                onChange={handleDescriptionChange}
                                required={true}
                            />
                        </div>
                        <ModalFormErrorMessage message={descriptionErrorMessage}/>

                        <div className={'number'}>
                            <TextField
                                type={'text'}
                                label={'Price'}
                                value={certificate.price}
                                onChange={handlePriceChange}
                                required={true}
                            />
                        </div>
                        <ModalFormErrorMessage message={priceErrorMessage}/>
                        <div className={'number'}>
                            <TextField
                                type={'text'}
                                label={'Duration'}
                                value={certificate.duration}
                                onChange={handleDurationChange}
                                required={true}
                            />

                            <ModalFormErrorMessage message={durationErrorMessage}/>

                        </div>
                        <div className={'tags-container'}>
                            <label className={'tag-label'}>Tags</label>
                            <ReactTags
                                tags={tags}
                                handleDelete={handleTagDelete}
                                handleAddition={handleTagAdd}
                                inputFieldPosition="top"
                                autocomplete
                            />
                        </div>
                        <ModalFormErrorMessage message={tagsErrorMessage}/>
                        <div className={'buttons-column'}>
                            <div className={'button'}>
                                <Button type="button"
                                        variant="outlined"
                                        className={'cancel-button'}
                                        onClick={handleCloseForm}>
                                    Cancel
                                </Button>
                            </div>
                            <div className={'button'}>
                                <Button type="submit"
                                        className={'save-button'}
                                        variant="contained"
                                        color="primary">
                                    Save
                                </Button>
                            </div>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
    );
};

export default CertificateAdd;