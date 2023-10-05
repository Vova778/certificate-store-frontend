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

const CertificateEdit = ({setVisible, handleClose, certificateToUpdate}) => {
    const [isValid, setIsValid] = useState(true);
    const [showAlert, setShowAlert] = useState(false);
    const [certificate, setCertificate] = useState({
        id: 0, name: '', description: '', price: 1, duration: 0, tags: []
    });
    const [tags, setTags] = useState([]);
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [descriptionErrorMessage, setDescriptionErrorMessage] = useState('');
    const [priceErrorMessage, setPriceErrorMessage] = useState('');
    const [durationErrorMessage, setDurationErrorMessage] = useState('');
    const [tagsErrorMessage, setTagsErrorMessage] = useState('');
    useDispatch();

    useEffect(() => {
        if (certificateToUpdate) {
            setCertificate({
                id: certificateToUpdate.id, name: certificateToUpdate.name, description: certificateToUpdate.description,
                price: certificateToUpdate.price, duration: certificateToUpdate.duration,
                tags: certificateToUpdate.tags.map(tag => ({name: tag.name}))
            });
            setTags(certificateToUpdate.tags.map(tag => ({id: tag.name, text: tag.name})));
        }
    }, [certificateToUpdate]);

    useEffect(() => {
        setTags(tags);
        mapTagInCertificate();
    }, [tags]);

    const handleTagDelete = (i) => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleTagAdd = (tag) => {
        setTags([...tags, tag]);
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
        setNameErrorMessage('');
        setDescriptionErrorMessage('');
        setPriceErrorMessage('');
        setDurationErrorMessage('');
        setTagsErrorMessage('');
        setShowAlert(false);
        handleClose();
    }


    const getRequestCertificate = () => {
        return (certificateToUpdate.name !== certificate.name) ? certificate
            : {
                id: certificate.id, description: certificate.description, price: certificate.price,
                duration: certificate.duration, tags: certificate.tags
            };
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        mapTagInCertificate();
        if (isValid) {
            const request = getRequestCertificate();
            CertificateService.update(request)
                .then(() => {
                    handleCloseForm();
                })
                .catch(e => {
                    if (e.response.status === 400) {
                        setShowAlert(true);
                    }
                });
        }
    };

    return (
        <Dialog  className="modal-form-container" open={setVisible} onClose={handleCloseForm}>
            <DialogTitle className="certificate-header">Edit Certificate</DialogTitle>
            <hr/>
            <DialogContent >
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
                            handleDrag={handleTagDrag}
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
                                Edit
                            </Button>
                        </div>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default CertificateEdit;