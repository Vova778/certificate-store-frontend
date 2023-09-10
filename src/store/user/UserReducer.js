import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userName: '',
    email: '',
    role: '',
    isAuth: false,
};

 const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserName(state, action) {
            state.userName = action.payload;
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

export const { setUserName,
    setEmail,
    setRole,
    setIsAuth } = userSlice.actions;
export default userSlice.reducer;