import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    certificates: [],
    filteredCertificates: [],
    selectedCertificate: '',
    certificatesOpinions: ['Name', 'Description'],
    ascSortDirection: false,
};

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setCertificates(state, action) {
            state.certificates = action.payload;
        },
        setSelectedCertificate(state, action) {
            state.selectedCertificate = action.payload;
        }
    },
});

export const {
    setCertificates,
    setSelectedCertificate
} = adminSlice.actions;
export default adminSlice.reducer;
