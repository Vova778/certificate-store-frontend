import React from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@mui/material';
import '../../../../../../../assets/styles/CertificateView.css';

const CertificateView = ({open, handleClose, certificate}) => {
    return (
        <Dialog open={open} onClose={handleClose} maxWidth="md">
            <div className="dialog-title">
                <DialogTitle>Certificate with id={certificate.id}</DialogTitle>
            </div>
            <hr/>
            <DialogContent>
                <div className="modal-view-card">
                    <div className="modal-view-column">
                        <h1 className="card-item-name">{certificate.name}</h1>
                        <p className="card-item-description">{certificate.description}</p>
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
                <Button onClick={handleClose} color="primary" variant="outlined" className="card-button">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
        ;
};

export default CertificateView;
