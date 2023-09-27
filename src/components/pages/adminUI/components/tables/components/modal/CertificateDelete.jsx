import React from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button,} from '@mui/material';
import '../../../../../../../assets/styles/CertificateDelete.css';
import CertificateService from "../../../../../service/CertificateService";
import {useDispatch} from "react-redux";

const CertificateDelete = ({setVisible, handleClose, certificate}) => {
    useDispatch();
    const handleDelete = async () => {
        try {
            await CertificateService.delete(certificate.id);
            handleClose();
        } catch (error) {
            handleClose();
        }
    };

    return (
        <Dialog open={setVisible} onClose={handleClose}>
            <DialogTitle className="certificate-delete-header">Delete Confirmation</DialogTitle>
            <DialogContent>
                <div className="certificate-delete-card">
                    <h2 className="certificate-delete-text">
                        Do you really want to delete Certificate with id = {certificate.id}?
                    </h2>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleDelete} color="error">
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CertificateDelete;
