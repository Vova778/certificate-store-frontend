import React, {useState} from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@mui/material';
import '../../../../../../../assets/styles/CertificateView.css';
import {WithContext as ReactTags} from "react-tag-input";

const CertificateView = ({setVisible, handleClose, certificate}) => {

    const [tags] = useState([]);

    return (
        <Dialog open={setVisible} onClose={handleClose} maxWidth="md">
            <div className="dialog-title">
                <DialogTitle>Certificate with id={certificate.id}</DialogTitle>
            </div>
            <hr/>
            <DialogContent>
                <div className="modal-view-card">
                    <div className="modal-view-column">
                        <h1 className="card-item-name">{certificate.name}</h1>
                        <p className="card-item-description">{certificate.description}</p>
                        <div className={'tags-container'}>
                            <label className={'tag-label'}>Tags</label>
                            <ReactTags
                                tags={certificate ? certificate.tags.map(tag => ({id: tag.name, text: tag.name})): tags}
                                inputFieldPosition="top"
                                readOnly={true}
                            />
                        </div>
                        <p className="card-item-price">
                            Price: ${certificate.price}
                        </p>
                        <p className="update-date">
                            Last Update: {new Date(certificate.lastUpdateDate).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" variant="contained" className="card-button">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
        ;
};

export default CertificateView;
