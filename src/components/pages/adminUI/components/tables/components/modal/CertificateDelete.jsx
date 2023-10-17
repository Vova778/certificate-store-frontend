import React from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button,} from '@mui/material';
import '../../../../../../../assets/styles/CertificateDelete.css';
import CertificateService from "../../../../../service/CertificateService";
import {useNavigate} from "react-router-dom";

const CertificateDelete = ({setVisible, handleClose, certificate}) => {
    const navigate = useNavigate();
    const handleDelete = async () => {
        try {
            await CertificateService.delete(certificate.id);
            handleClose();
        } catch (error) {
            handleClose();
        }
        navigate(0);
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
