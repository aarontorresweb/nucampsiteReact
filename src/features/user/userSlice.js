import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: { 
        setCurrentUser: (state, action) => {
            // console.log('line 12 from userSlice.js:', ...state, currentUser: action.payload)
            return {...state, currentUser: action.payload };
        },
    }
});


export const userReducer = userSlice.reducer;

export const selectCurrentUser = (state) => {
    return state.user.currentUser;
};