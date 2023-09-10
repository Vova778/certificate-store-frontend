import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    certificates: [],
};

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setCertificates(state, action) {
            state.certificates = action.payload;
        }
    },
});

export const {
    setCertificates
} = adminSlice.actions;
export default adminSlice.reducer;
