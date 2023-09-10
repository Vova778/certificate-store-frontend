import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 1,
    size: 10,
    pageQty: 1,
};

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPage(state, action) {
            state.page = action.payload;
        },
        setSize(state, action) {
            state.size = action.payload;
        },
        setPageQty(state, action) {
            state.pageQty = action.payload;
        },
    },
});

export const { setPage,
    setSize,
    setPageQty
} = paginationSlice.actions;
export default paginationSlice.reducer;