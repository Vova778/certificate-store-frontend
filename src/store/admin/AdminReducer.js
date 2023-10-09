import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    certificates: [],
    filteredCertificates: [],
    selectedCertificate: '',
    searchedCertificateName: '',
    searchedCertificateDescription:'',
    certificatesOpinions: ['CreatedDate','Title', 'Description'],
    selectedOpinion: 'CreatedDate',
    isSortingAscending: false,
    isPageRefresh: false,
};

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setCertificates(state, action) {
            state.certificates = action.payload;
        },
        setSearchedCertificateName(state, action){
            state.searchedCertificateName = action.payload;
        },
        setSearchedCertificateDescription(state, action){
            state.searchedCertificateDescription = action.payload;
        },
        setSelectedCertificate(state, action) {
            state.selectedCertificate = action.payload;
        },
        setFilteredCertificates(state, action) {
            state.filteredCertificates = action.payload;
        },
        setCertificatesOpinions(state, action) {
            state.certificatesOpinions = action.payload;
        },
        setSelectedOpinion(state, action) {
            state.selectedOpinion = action.payload;
        },
        setIsSortingAscending(state, action) {
            state.isSortingAscending = action.payload;
        },
        setPageRefresh(state, action) {
            state.isPageRefresh = action.payload;
        },
    },
});

export const {
    setCertificates,
    setSelectedCertificate,
    setFilteredCertificates,
    setCertificatesOpinions,
    setSelectedOpinion,
    setIsSortingAscending,
    setSearchedCertificateName,
    setSearchedCertificateDescription,
    setPageRefresh,
} = adminSlice.actions;
export default adminSlice.reducer;
