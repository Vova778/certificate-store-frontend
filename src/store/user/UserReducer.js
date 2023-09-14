import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userFirstName: '',
    userLastName: '',
    email: '',
    role: '',
    isAuth: false,
};

 const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserFirstName(state, action) {
            state.userFirstName = action.payload;
        },
        setUserLastName(state, action) {
            state.userLastName = action.payload;
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
        setRole(state, action) {
            state.role = action.payload;
        },
        setIsAuth(state, action) {
            state.isAuth = action.payload;
        },
    },
});

export const { setUserFirstName,
    setUserLastName,
    setEmail,
    setRole,
    setIsAuth } = userSlice.actions;
export default userSlice.reducer;